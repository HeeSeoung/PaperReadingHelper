from django.urls import path, include
from .views import UserView


urlpatterns = [

    path('user/<int:id>', UserView.as_view()),

]
