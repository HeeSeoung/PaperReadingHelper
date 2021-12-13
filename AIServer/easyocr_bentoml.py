import bentoml
from bentoml.frameworks.easyocr import EasyOCRArtifact
from bentoml.adapters import ImageInput
import numpy as np

@bentoml.env(pip_packages=["easyocr>=1.3.0"])
@bentoml.artifacts([EasyOCRArtifact("en")])
class EasyOCRService(bentoml.BentoService):
    @bentoml.api(input=ImageInput(), batch=False)
    def predict(self, image):
        reader = self.artifacts.en
        raw_results = reader.readtext(np.array(image))
        text_instances = [x[1] for x in raw_results]
        return text_instances


import easyocr
service = EasyOCRService()
lang_list = ['en']
model = easyocr.Reader(lang_list=lang_list, download_enabled=True)
service.pack('en', model, lang_list=lang_list)
saved_path = service.save()