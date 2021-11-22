from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect, render
from django.http import HttpRequest, JsonResponse
from django.views.generic import View


class HomeView(LoginRequiredMixin, View):
    def get(self, request: HttpRequest, *args, **kwargs):
        context = {}

        return render(request, 'blank.html', context)

    def post(self, request: HttpRequest, *args, **kwargs):
        context = {}
        

        return JsonResponse(context, content_type='application/json')
