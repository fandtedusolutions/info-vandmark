import json
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.templatetags.static import static
from .models import SiteConfiguration, Service, Event, ContactInquiry

DEFAULT_SERVICES = [
    ("Graphic Design", "design", "DESIGN"),
    ("Videography", "cam", "CINEMA"),
    ("Video Editing", "edit", "EDIT"),
    ("Poster Design", "poster", "POSTER"),
    ("Web & App Development", "code", "CODE"),
    ("Vertical Branding", "layers", "VERTICAL"),
    ("Events", "event", "EVENTS"),
    ("Influence & Attraction Marketing", "magnet", "INFLUENCE"),
    ("Live Broadcast Solutions", "live", "LIVE"),
    ("Content Creation & Blogging", "blog", "CONTENT"),
    ("Branding", "brand", "BRAND"),
    ("SEO Optimization", "seo", "SEO"),
    ("Digital Marketing", "digi", "DIGITAL"),
    ("Creative Video Production", "film", "PRODUCTION"),
    ("Product Photography", "photo", "PRODUCT"),
]

DEFAULT_EVENTS = [
    {
        "name": "Plus Three",
        "caption": "Event media & coverage",
        "video": "Video-44962.mp4",
        "tone": "a",
        "glyph": "T",
    },
    {
        "name": "Eyecon",
        "caption": "Event media & coverage",
        "video": "Video-17634.mp4",
        "tone": "b",
        "glyph": "E",
    },
    {
        "name": "Tukuja",
        "caption": "Event media & coverage",
        "video": "Video-40555.mp4",
        "tone": "b",
        "glyph": "E",
    },
    {
        "name": "Your Moments Could Be Next.",
        "caption": "Conferences, fests & corporate events",
        "video": "",
        "tone": "c",
        "glyph": "+",
    },
]


def seed_defaults_if_empty():
    """Ensure baseline services and events exist in the database."""
    if not Service.objects.exists():
        for i, (title, icon, bg_word) in enumerate(DEFAULT_SERVICES):
            Service.objects.create(
                title=title,
                icon=icon,
                bg_word=bg_word,
                order=i + 1,
                is_active=True,
            )

    if not Event.objects.exists():
        for i, ev in enumerate(DEFAULT_EVENTS):
            Event.objects.create(
                name=ev["name"],
                caption=ev["caption"],
                video=ev["video"],
                tone=ev["tone"],
                glyph=ev["glyph"],
                order=i + 1,
                is_active=True,
            )


def index(request):
    try:
        seed_defaults_if_empty()
    except Exception:
        pass

    config = SiteConfiguration.get_solo()

    # Load active services
    services_qs = Service.objects.filter(is_active=True).order_by("order", "id")
    services_list = [
        [s.title, s.icon, s.bg_word]
        for s in services_qs
    ] or DEFAULT_SERVICES

    # Load active events
    events_qs = Event.objects.filter(is_active=True).order_by("order", "id")
    events_list = []
    if events_qs.exists():
        for e in events_qs:
            video_url = ""
            if e.video:
                if e.video.startswith("http://") or e.video.startswith("https://") or e.video.startswith("/"):
                    video_url = e.video
                else:
                    video_url = static(f"videos/{e.video}")
            events_list.append({
                "name": e.name,
                "caption": e.caption,
                "video": video_url,
                "tone": e.tone,
                "glyph": e.glyph,
            })
    else:
        for ev in DEFAULT_EVENTS:
            video_url = static(f"videos/{ev['video']}") if ev["video"] else ""
            events_list.append({
                "name": ev["name"],
                "caption": ev["caption"],
                "video": video_url,
                "tone": ev["tone"],
                "glyph": ev["glyph"],
            })

    # Prepare JS data
    frontend_data = {
        "vm": {
            "phone": config.phone,
            "email": config.email,
            "website": config.website,
            "instagram": config.instagram_url,
            "facebook": config.facebook_url,
            "linkedin": config.linkedin_url,
            "youtube": config.youtube_url,
            "whatsapp_workshop": config.whatsapp_workshop_message,
            "whatsapp_project": config.whatsapp_project_message,
        },
        "events": events_list,
        "services": services_list,
    }

    context = {
        "config": config,
        "frontend_data_json": json.dumps(frontend_data),
        "services_count": len(services_list),
    }
    return render(request, "website/index.html", context)


@require_POST
def submit_inquiry(request):
    try:
        data = json.loads(request.body) if request.body else request.POST
        name = data.get("name", "").strip()
        contact = data.get("contact", "").strip()
        message = data.get("message", "").strip()

        if not contact and not name and not message:
            return JsonResponse({"status": "error", "message": "Please provide some information."}, status=400)

        inquiry = ContactInquiry.objects.create(name=name, contact=contact, message=message)
        return JsonResponse({"status": "success", "message": "Thank you! We have received your inquiry."})
    except Exception as exc:
        return JsonResponse({"status": "error", "message": str(exc)}, status=500)


def custom_404_view(request, exception=None):
    config = SiteConfiguration.get_solo()
    frontend_data = {
        "vm": {
            "phone": config.phone,
            "email": config.email,
            "website": config.website,
            "instagram": config.instagram_url,
            "facebook": config.facebook_url,
            "linkedin": config.linkedin_url,
            "youtube": config.youtube_url,
            "whatsapp_workshop": config.whatsapp_workshop_message,
            "whatsapp_project": config.whatsapp_project_message,
        },
        "events": [],
        "services": [],
    }
    return render(
        request,
        "404.html",
        {
            "config": config,
            "frontend_data_json": json.dumps(frontend_data),
        },
        status=404,
    )

