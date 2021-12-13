from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect, render
from django.http import HttpRequest, JsonResponse
from django.views.generic import View
from paper import models as model
from django.contrib.auth.models import User



class UserView(LoginRequiredMixin, View):
    def get(self, request: HttpRequest, id):
        context = {}

        data = model.Paper.objects.filter(user=id).order_by('-upload_date')
        j = 1
        for i in data:
            i.index = j
            j += 1

        context['data'] = data
        context['user_id'] = request.user.id
        context['user_name'] = User.objects.filter(id=request.user.id).values_list('username', flat=True)[0]

        return render(request, 'mypage.html', context)


class UserDetailView(LoginRequiredMixin, View):
    def get(self, request: HttpRequest, id):
        context = {}

        file_name = request.GET.get('filename')                
        filetext = list(model.Paper.objects.filter(file_name=file_name).values_list('file_text', flat=True))
        
        context['paper_text'] = filetext
        context['file_name'] = file_name
        context['user_id'] = request.user.id
        context['user_name'] = User.objects.filter(id=request.user.id).values_list('username', flat=True)[0]

        return render(request, 'detailpage.html', context)

    