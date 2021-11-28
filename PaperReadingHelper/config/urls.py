from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LogoutView


urlpatterns = [

    path('admin/', admin.site.urls),
    path('', include('paper.urls')),
    path('', include('user.urls')),

]
