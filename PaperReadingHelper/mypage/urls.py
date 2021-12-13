from django.urls import path, include
from .views import UserView, UserDetailView


urlpatterns = [

    path('user/<int:id>', UserView.as_view()),
    path('user/detail', UserDetailView.as_view()),

]
