from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect, render
from django.http import HttpRequest, JsonResponse
from django.views.generic import View
from nltk.util import pr
from paper import models as model
from django.contrib.auth.models import User

from nltk.tokenize import word_tokenize, sent_tokenize
import nltk
import re
from collections import Counter
from gensim.models import Word2Vec
class VisualView(LoginRequiredMixin, View):
    def get(self, request: HttpRequest):
        context = {}
        try:
            # file = request.GET.get('file_name')        
            file = 'hrnet_M838A12.pdf'            
            all_text = ''
            data = model.Paper.objects.filter(file_name=file).values_list('file_text', flat=True)
            for page in data:
                all_text += page                      
        except:
            print('안됨')
            data = 'dddd,sad,f,adf,a,f,asdf,as'
        # data = ','.join(data) 
        all_text = all_text[2:]
        all_text = all_text[:-1]        
        nltk.download('punkt')
        data = re.sub(r'\([^)]*\)', '', all_text)
        data = sent_tokenize(data)
        normalized_text = []
        for string in data:
            tokens = re.sub(r"[^a-z0-9]+", " ", string.lower())
            normalized_text.append(tokens)        
        # 각 문장에 대해서 NLTK를 이용하여 단어 토큰화를 수행.
        w2v_text = []
        wordcolud_text = []
        for sentense in normalized_text:                 
            sentense_tok = word_tokenize(sentense)            
            w2v_text.append(sentense_tok)
            wordcolud_text = wordcolud_text + sentense_tok        
        # text = [word_tokenize(sentence) for sentence in normalized_text]
        def wordcolud(text):                  
            counts = Counter(text)
            result = counts.most_common(40)
            result = [[i, j] for i,j in result]          
            return result
        wordcolud_text = wordcolud(wordcolud_text)                
        context['wordcloud'] = wordcolud_text
        # print(wordcolud_text)            

        def word2vecmodel(text):      
            model = Word2Vec(sentences=text, vector_size=100, window=5, min_count=1, workers=4)            
            # model_result = model.wv.most_similar("and")
            print(model.wv.vectors_for_all)            
        word2vecmodel(w2v_text)
        # print(text)
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