from django.urls import path, include
from .views import UserView, UserDetailView


urlpatterns = [

    path('user/<int:id>', UserView.as_view()),
    path('user/<int:id>/detail', UserDetailView.as_view()),

]
