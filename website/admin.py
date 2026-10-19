from django.contrib import admin
from .models import SiteConfiguration, Service, Event, ContactInquiry


@admin.register(SiteConfiguration)
class SiteConfigurationAdmin(admin.ModelAdmin):
    list_display = ("phone", "email", "website")

    def has_add_permission(self, request):
        return not SiteConfiguration.objects.exists()


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "order", "icon", "bg_word", "is_active")
    list_display_links = ("title",)
    list_editable = ("order", "is_active")
    search_fields = ("title", "bg_word")
    list_filter = ("is_active",)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("name", "order", "caption", "video", "tone", "glyph", "is_active")
    list_display_links = ("name",)
    list_editable = ("order", "tone", "is_active")
    search_fields = ("name", "caption")
    list_filter = ("tone", "is_active")


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ("created_at", "name", "contact", "message")
    readonly_fields = ("created_at",)
    search_fields = ("name", "contact", "message")
