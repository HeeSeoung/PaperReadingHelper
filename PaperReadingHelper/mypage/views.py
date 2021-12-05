from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect, render
from django.http import HttpRequest, JsonResponse
from django.views.generic import View
from paper import models as model
from django.contrib.auth.models import User



class UserView(LoginRequiredMixin, View):
    def get(self, request: HttpRequest, id):
        context = {}

        data = model.Paper.objects.filter(user=id)
        data.index = list(range(0, len(data) + 1))
        context['data'] = data

        context['user_id'] = request.user.id
        context['user_name'] = User.objects.filter(id=request.user.id).values_list('username', flat=True)[0]

        return render(request, 'mypage.html', context)

    