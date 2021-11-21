from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import authenticate, login
from django.http import HttpRequest, JsonResponse
from django.shortcuts import redirect, render
from django.views.generic import View
from django.contrib.auth.models import User


class HomeView(View):
    def get(self, request: HttpRequest, *args, **kwargs):
        context = {}
        return render(request, 'index.html', context)

class LoginView(View):
    def get(self, request: HttpRequest, *args, **kwargs):
        context = {}
        if request.user.id:
            return redirect('/')

        return render(request, 'login.html', context)

    def post(self, request: HttpRequest, *args, **kwargs):
        context = {}
        id = request.POST['card-id']
        password = request.POST['card-password']
        user = authenticate(username=id, password=password)

        if user is not None:
            login(request, user)
            context['success'] = True
            context['message'] = '로그인 되었습니다.'
        else:
            context['success'] = False
            context['message'] = '일치하는 회원정보가 없습니다.'
        return JsonResponse(context, content_type='application/json')

class LogoutPageView(View):
    def get(self, request: HttpRequest, *args, **kwargs):
        context = {}

        return render(request, 'logout.html', context)

class RegisterView(View):
    def get(self, request: HttpRequest, *args, **kwargs):
        context = {}
        if request.user.id:
            return redirect('/')

        return render(request, 'register.html', context)

    def post(self, request: HttpRequest, *args, **kwargs):
        context = {}
        id = request.POST['login-id']
        password = request.POST['login-password']
        password_confirm = request.POST['login-confirm-password']
        email = request.POST['login-email']

        try:
            user = User.objects.get(username=id)
            context['success'] = False
            context['message'] = '아이디가 이미 존재합니다.'
            return JsonResponse(context, content_type='application/json')

        except:
            user = User.objects.create_user(
                id,
                email,
                password
            )


        context['success'] = True
        context['message'] = '등록 되었습니다.'
        return JsonResponse(context, content_type='application/json')

