from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from Servers import views

urlpatterns = [
    url(r'^server$', views.serverAPI),
    url(r'^server/([0-9]+)$', views.serverAPI),   
]
