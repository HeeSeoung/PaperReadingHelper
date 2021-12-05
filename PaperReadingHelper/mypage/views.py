from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect, render
from django.http import HttpRequest, JsonResponse
from django.views.generic import View
from paper import models as model



class UserView(LoginRequiredMixin, View):
    def get(self, request: HttpRequest, id):
        context = {}

        data = model.Paper.objects.filter(user=id)
        context['data'] = data
        context['user_id'] = request.user.id

        return render(request, 'mypage.html', context)

    