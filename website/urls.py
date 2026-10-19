from django.urls import path
from . import views

app_name = "website"

urlpatterns = [
    path("", views.index, name="index"),
    path("404/", views.custom_404_view, name="404"),
    path("api/inquiry/", views.submit_inquiry, name="submit_inquiry"),
]
