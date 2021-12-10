from django.urls import path, include
from .views import VisualView


urlpatterns = [
    path('visual/', VisualView.as_view()),
]
