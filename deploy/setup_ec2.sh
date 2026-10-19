#!/usr/bin/env bash
set -e

# ============================================================
# EC2 Setup Script for info.vandmark.com
# Ubuntu 22.04 / 24.04 LTS
# ============================================================

DOMAIN="info.vandmark.com"
APP_DIR="/var/www/vandmark-site"
LOG_DIR="/var/log/vandmark"

echo "=== 1. Updating system packages ==="
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install -y python3-pip python3-venv nginx certbot python3-certbot-nginx rsync ufw

echo "=== 2. Creating directory structure and logs ==="
sudo mkdir -p "$APP_DIR"
sudo mkdir -p "$LOG_DIR"
sudo chown -R ubuntu:www-data "$APP_DIR"
sudo chown -R ubuntu:www-data "$LOG_DIR"
sudo chmod -R 775 "$LOG_DIR"

echo "=== 3. Setting up Python virtual environment ==="
if [ ! -d "$APP_DIR/.venv" ]; then
    python3 -m venv "$APP_DIR/.venv"
fi

"$APP_DIR/.venv/bin/pip" install --upgrade pip
"$APP_DIR/.venv/bin/pip" install -r "$APP_DIR/requirements.txt"

echo "=== 4. Running database migrations and collecting static files ==="
cd "$APP_DIR"
"$APP_DIR/.venv/bin/python" manage.py migrate --noinput
"$APP_DIR/.venv/bin/python" manage.py collectstatic --noinput

# Seed initial defaults if fresh database
"$APP_DIR/.venv/bin/python" manage.py shell -c "from website.views import seed_defaults_if_empty; seed_defaults_if_empty()" || true

echo "=== 5. Installing and starting Systemd service ==="
sudo cp "$APP_DIR/deploy/systemd/vandmark.service" /etc/systemd/system/vandmark.service
sudo systemctl daemon-reload
sudo systemctl enable vandmark
sudo systemctl restart vandmark

echo "=== 6. Configuring Nginx ==="
sudo cp "$APP_DIR/deploy/nginx/info.vandmark.com.conf" "/etc/nginx/sites-available/$DOMAIN"
sudo ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/"

# Remove default site if present
if [ -f /etc/nginx/sites-enabled/default ]; then
    sudo rm /etc/nginx/sites-enabled/default
fi

sudo nginx -t
sudo systemctl reload nginx

echo "=== 7. Configuring UFW Firewall ==="
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable || true

echo "=== 8. Installing SSL Certificate with Certbot ==="
echo "Note: Make sure your DNS A-Record for $DOMAIN points to this server's public IP before running Certbot."
if sudo certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos -m admin@vandmark.com --redirect; then
    echo "SSL Certificate installed successfully!"
else
    echo "Certbot skipped or DNS not yet propagated. Once DNS points to this server, run:"
    echo "  sudo certbot --nginx -d $DOMAIN"
fi

echo "============================================================"
echo " Deployment completed! Check status with:"
echo "   sudo systemctl status vandmark"
echo "   sudo systemctl status nginx"
echo "============================================================"
