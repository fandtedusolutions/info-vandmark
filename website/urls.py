from django.urls import path
from django.shortcuts import redirect
from . import views

app_name = "website"

urlpatterns = [
    path("", views.index, name="index"),
    path("404/", views.custom_404_view, name="404"),
    path("api/inquiry/", views.submit_inquiry, name="submit_inquiry"),
    path("vandmark.com", lambda r: redirect("https://vandmark.com/", permanent=True)),
    path("vandmark.com/", lambda r: redirect("https://vandmark.com/", permanent=True)),
]
