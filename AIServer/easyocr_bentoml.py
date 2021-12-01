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
        return {"text" : text_instances}

import easyocr
service = EasyOCRService()
lang_list = ['en']
recog_network = "zh_sim_g2"
model = easyocr.Reader(lang_list=lang_list, download_enabled=True, recog_network=recog_network)
service.pack('en', model, lang_list=lang_list, recog_network= recog_network)
saved_path = service.save()