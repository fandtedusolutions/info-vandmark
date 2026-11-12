from django.urls import path
from django.shortcuts import redirect
from . import views

app_name = "website"

urlpatterns = [
    path("", views.index, name="index"),
    path("qr", views.qr_page, name="qr_no_slash"),
    path("qr/", views.qr_page, name="qr"),
    path("404/", views.custom_404_view, name="404"),
    path("api/inquiry/", views.submit_inquiry, name="submit_inquiry"),
    path("sahodaya", lambda r: redirect("https://sahodaya.holygraceacademy.com/")),
    path("sahodaya/", lambda r: redirect("https://sahodaya.holygraceacademy.com/")),
    path("today", lambda r: redirect("https://sahodaya.holygraceacademy.com/")),
    path("today/", lambda r: redirect("https://sahodaya.holygraceacademy.com/")),
    path("photos", lambda r: redirect("https://photona.weddinghillage.com/my-photos/c4956cbe-377d-41aa-93b7-038b21bcfeee/")),
    path("photos/", lambda r: redirect("https://photona.weddinghillage.com/my-photos/c4956cbe-377d-41aa-93b7-038b21bcfeee/")),
    path("get-photo", lambda r: redirect("https://photona.weddinghillage.com/my-photos/c4956cbe-377d-41aa-93b7-038b21bcfeee/")),
    path("get-photo/", lambda r: redirect("https://photona.weddinghillage.com/my-photos/c4956cbe-377d-41aa-93b7-038b21bcfeee/")),
    path("vandmark.com", lambda r: redirect("https://vandmark.com/", permanent=True)),
    path("vandmark.com/", lambda r: redirect("https://vandmark.com/", permanent=True)),
]
