from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('se/', views.se),
    path('search/<name>/', views.search)
]