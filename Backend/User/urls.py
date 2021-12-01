from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from User import views

urlpatterns = [
    url(r'^user$', views.userApi),
    url(r'^user/([0-9]+)$', views.userApi),   
]
