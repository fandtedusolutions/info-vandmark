#!/usr/bin/env bash
set -e

# ============================================================
# Local Helper Script to Deploy to EC2
# Usage: ./deploy/deploy_to_ec2.sh <EC2_HOST_OR_IP> [PEM_KEY_PATH]
# Example: ./deploy/deploy_to_ec2.sh 54.210.12.34 ~/Downloads/VandmarkERP.pem
# ============================================================

SERVER_HOST="$1"
KEY_PATH="${2:-$HOME/Downloads/VandmarkERP.pem}"
USER="ubuntu"
REMOTE_DIR="/var/www/vandmark-site"

if [ -z "$SERVER_HOST" ]; then
    echo "Error: Server IP or hostname is required."
    echo "Usage: ./deploy/deploy_to_ec2.sh <SERVER_IP> [KEY_PATH]"
    exit 1
fi

if [ ! -f "$KEY_PATH" ]; then
    echo "Warning: Key file '$KEY_PATH' not found. Please provide path to your .pem key."
    exit 1
fi

chmod 400 "$KEY_PATH"

echo "=== 1. Syncing project files to EC2 ($SERVER_HOST) ==="
ssh -i "$KEY_PATH" -o StrictHostKeyChecking=no "$USER@$SERVER_HOST" "sudo mkdir -p $REMOTE_DIR && sudo chown -R $USER:$USER $REMOTE_DIR"

rsync -avz --exclude '.venv' --exclude '__pycache__' --exclude 'db.sqlite3-journal' \
    -e "ssh -i $KEY_PATH -o StrictHostKeyChecking=no" \
    ./ "$USER@$SERVER_HOST:$REMOTE_DIR/"

echo "=== 2. Running setup and restart on EC2 ==="
ssh -i "$KEY_PATH" -o StrictHostKeyChecking=no -t "$USER@$SERVER_HOST" "chmod +x $REMOTE_DIR/deploy/setup_ec2.sh && sudo $REMOTE_DIR/deploy/setup_ec2.sh"

echo "=== Done! Access your site at http://info.vandmark.com or https://info.vandmark.com ==="
