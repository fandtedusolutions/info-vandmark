from django.urls import path
from . import views

app_name = "website"

urlpatterns = [
    path("", views.index, name="index"),
    path("api/inquiry/", views.submit_inquiry, name="submit_inquiry"),
]
