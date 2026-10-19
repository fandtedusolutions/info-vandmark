from django.db import models


class SiteConfiguration(models.Model):
    phone = models.CharField(max_length=20, default="9207666712")
    email = models.EmailField(default="vandmarkconcepts@gmail.com")
    website = models.CharField(max_length=100, default="vandmark.com")
    instagram_url = models.URLField(
        default="https://www.instagram.com/vandmark_communications?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw=="
    )
    facebook_url = models.URLField(
        default="https://www.facebook.com/vandmarkcommunicationsllp/"
    )
    linkedin_url = models.URLField(
        default="https://www.linkedin.com/company/vandmark/home/"
    )
    youtube_url = models.URLField(
        default="https://www.youtube.com/@vandmarkcommunications"
    )
    whatsapp_workshop_message = models.CharField(
        max_length=255,
        default="Hi Vandmark! I attended your photography workshop and would like to know more.",
    )
    whatsapp_project_message = models.CharField(
        max_length=255,
        default="Hi Vandmark! I'd like to start a project with you.",
    )

    class Meta:
        verbose_name = "Site Configuration"
        verbose_name_plural = "Site Configuration"

    def __str__(self):
        return f"Vandmark Site Config ({self.phone})"

    @classmethod
    def get_solo(cls):
        obj, created = cls.objects.get_or_create(id=1)
        return obj


class Service(models.Model):
    title = models.CharField(max_length=100)
    icon = models.CharField(
        max_length=50,
        help_text="Icon identifier, e.g. design, cam, edit, poster, code, layers, event, magnet, live, blog, brand, seo, digi, film, photo",
    )
    bg_word = models.CharField(max_length=50, help_text="Large background watermark word")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return f"{self.order:02d}. {self.title}"


class Event(models.Model):
    name = models.CharField(max_length=120)
    caption = models.CharField(max_length=255, default="Event media & coverage")
    video = models.CharField(
        max_length=255,
        blank=True,
        help_text="Video filename (e.g. Video-44962.mp4) or full URL. Leave blank if none.",
    )
    tone = models.CharField(
        max_length=5,
        choices=[("a", "Tone A (Orange)"), ("b", "Tone B (Cyan)"), ("c", "Tone C (Yellow)")],
        default="a",
    )
    glyph = models.CharField(max_length=10, default="*")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return f"{self.name} ({self.tone})"


class ContactInquiry(models.Model):
    name = models.CharField(max_length=120, blank=True)
    contact = models.CharField(max_length=120, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Contact Inquiry"
        verbose_name_plural = "Contact Inquiries"
        ordering = ["-created_at"]

    def __str__(self):
        return f"Inquiry from {self.name or self.contact or 'Anonymous'} at {self.created_at:%Y-%m-%d %H:%M}"
