from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LogoutView
from config.views import HomeView


urlpatterns = [

    path('admin/', admin.site.urls),
    path('', include('user.urls')),
    path('', HomeView.as_view()),

]
