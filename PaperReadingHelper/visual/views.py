from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect, render
from django.http import HttpRequest, JsonResponse
from django.views.generic import View
from paper import models as model
from django.contrib.auth.models import User

from nltk.tokenize import word_tokenize, sent_tokenize
import nltk
import re

class VisualView(LoginRequiredMixin, View):
    def get(self, request: HttpRequest):
        context = {}
        try:
            file = request.GET.get('file_name')        
            data = model.Paper.objects.filter(file_name=file).values_list('file_text', flat=True)[0] 
            data = 'I am a resident of Cansinghill Apartments, located right next to the newly opened Vuenna Dog Park. As I live with three dogs, I am very happy to let my dogs run around and safely play with other dogs from the neighborhood. However, the noise of barking and yelling from the park at night is so loud and disturbing that I cannot relax in my apartment. Many of my apartment neighbors also seriously complain about this noise. I want immediate action to solve this urgent problem.'       
        except:
            print('안됨')
            data = 'dddd,sad,f,adf,a,f,asdf,as'
        # data = '\n'.join(data)      
        nltk.download('punkt')
        data = re.sub(r'\([^)]*\)', '', data)
        data = sent_tokenize(data)
        normalized_text = []
        for string in data:
            tokens = re.sub(r"[^a-z0-9]+", " ", string.lower())
            normalized_text.append(tokens)

        # 각 문장에 대해서 NLTK를 이용하여 단어 토큰화를 수행.
        result = [word_tokenize(sentence) for sentence in normalized_text]
        print(result)
        # context['text_freq'] = data

        # context['user_id'] = request.user.id
        # context['user_name'] = User.objects.filter(id=request.user.id).values_list('username', flat=True)[0]
        # context['text'] ='sdf,sdfsd,f,sdf'
        return render(request, 'visual.html', context)

    # def post(self, request: HttpRequest, *args, **kwargs):
    #     context ={}
    #     try:
    #         file = request.GET.get('file_name')
    #         print(file + "--------------------")
    #         # request.GET('file_name')
    #         context['file'] = file
    #         context['message'] = "완료완료"
    #         return JsonResponse(context, content_type='application/json')
    #     except Exception as e:
    #         context['success'] = False
    #         context['message'] = e

    #         return JsonResponse(context, content_type='application/json')