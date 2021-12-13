from django.urls import path, include
from .views import UserView


urlpatterns = [

    path('user/<int:id>', UserView.as_view()),
    path('user/<int:id>/detail', UserView.as_view()),

]
