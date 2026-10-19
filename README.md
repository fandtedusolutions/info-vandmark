# Vandmark Communication LLP - Django Web Application

This project converts the Vandmark Communication studio website into a complete, dynamic Django web application. It preserves 100% of the custom animations, interactive canvas aperture, parallax camera stage, darkroom contact prints, 3D coverflow services slider, and video film reel, while adding Django models, database management, and an administration dashboard.

---

## 🚀 Features

- **Dynamic Content Management via Django Admin**:
  - **Site Configuration**: Edit studio phone number, email, website URL, social media links, and customized WhatsApp inquiry messages.
  - **Services**: Add, reorder, edit, and toggle active/inactive services displayed in the interactive 3D coverflow carousel.
  - **Events / Media**: Add, edit, reorder, and configure video clips or tone glyphs in the animated film reel.
  - **Contact Inquiries**: Store inquiries submitted through the website.
- **Rich Frontend Preserved**:
  - Animated shutter camera entrance.
  - Real-time animated canvas aperture (f-stops calculation and blades).
  - Parallax interactive camera stage with moving mascot eyes.
  - 3D Coverflow services carousel with keyboard and pointer swipe navigation.
  - Film reel marquee with autoplaying HTML5 looping video previews.
- **Clean Django Architecture**:
  - `vandmark_project`: Core Django configuration (`settings.py`, `urls.py`, `wsgi.py`).
  - `website`: Main Django application (`models.py`, `views.py`, `admin.py`, `urls.py`).
  - `templates/`: Base layout (`templates/base.html`) and homepage (`templates/website/index.html`).
  - `static/`: Static styles, scripts, vector graphics, and event videos.

---

## 🛠️ Quickstart & Setup

### 1. Activate the Virtual Environment

```bash
source .venv/bin/activate
```

*(If creating a new virtualenv on another machine, run: `python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt`)*

### 2. Apply Database Migrations

```bash
python manage.py migrate
```

*(Default services, events, and site configuration are pre-seeded upon initial run).*

### 3. Create a Superuser (for Admin Access)

```bash
python manage.py createsuperuser
```

### 4. Start the Development Server

```bash
python manage.py runserver 8008
```

Open your browser and visit:
- **Main Website**: [http://127.0.0.1:8008/](http://127.0.0.1:8008/)
- **Django Admin**: [http://127.0.0.1:8008/admin/](http://127.0.0.1:8008/admin/)

---

## 📂 Project Structure

```
vandmark-site-final/
├── manage.py
├── requirements.txt
├── .gitignore
├── README.md
├── db.sqlite3
├── deploy/
│   ├── nginx/
│   │   └── info.vandmark.com.conf
│   ├── systemd/
│   │   └── vandmark.service
│   ├── setup_ec2.sh
│   └── deploy_to_ec2.sh
├── vandmark_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── website/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── migrations/
│       └── 0001_initial.py
├── templates/
│   ├── base.html
│   └── website/
│       └── index.html
└── static/
    ├── style.css
    ├── script.js
    ├── assets/
    │   └── vandmark-logo.png
    └── videos/
        ├── Video-17634.mp4
        ├── Video-40555.mp4
        └── Video-44962.mp4
```

---

## ☁️ EC2 & Nginx Deployment (info.vandmark.com)

### Step 1: DNS Setup
In your domain DNS manager (e.g. Cloudflare, Route 53, GoDaddy, Namecheap):
- Add an **A Record**:
  - **Host / Name**: `info`
  - **Type**: `A`
  - **Value**: Your EC2 Instance Public IPv4 Address (e.g. `54.x.x.x`)
  - **TTL**: Auto or 300s

### Step 2: AWS EC2 Security Group
Ensure the EC2 Security Group allows inbound traffic on:
- **Port 22 (SSH)**: Your IP or 0.0.0.0/0
- **Port 80 (HTTP)**: 0.0.0.0/0
- **Port 443 (HTTPS)**: 0.0.0.0/0

### Step 3: Deploy using Automated Script

Run from your local terminal:
```bash
./deploy/deploy_to_ec2.sh <YOUR_EC2_PUBLIC_IP> /path/to/your-key.pem
```

*Example:*
```bash
./deploy/deploy_to_ec2.sh 54.210.12.34 ~/Downloads/VandmarkERP.pem
```

### Or Step-by-Step Manual Deployment on EC2:

1. **SSH into your EC2 instance**:
   ```bash
   ssh -i /path/to/key.pem ubuntu@<YOUR_EC2_PUBLIC_IP>
   ```

2. **Copy or clone the repository to `/var/www/vandmark-site`**:
   ```bash
   sudo mkdir -p /var/www/vandmark-site
   sudo chown -R ubuntu:ubuntu /var/www/vandmark-site
   ```

3. **Run the automated setup script**:
   ```bash
   chmod +x /var/www/vandmark-site/deploy/setup_ec2.sh
   sudo /var/www/vandmark-site/deploy/setup_ec2.sh
   ```

4. **Verify services**:
   ```bash
   sudo systemctl status vandmark
   sudo systemctl status nginx
   ```

# info-vandmark
