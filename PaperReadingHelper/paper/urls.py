from django.urls import path, include
from django.contrib.auth.views import LogoutView
from .views import HomeView


urlpatterns = [

    path('', HomeView.as_view()),

]
