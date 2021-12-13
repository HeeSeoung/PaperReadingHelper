'use strict';
const btnUpload = document.getElementById('btn-upload');
const paper_img = document.getElementById('paper-img');
const paper_text = document.getElementById('paper-text');
const btnVisual = document.getElementById('btn-visual');
let paper_order = 0;
let result;
let file_name_path;

file_name_path = {{ file_name }}.slice(0, -4);    
paper_img.style.height = '500px';
paper_img.src = "media/"+file_name_path+"/"+file_name_path+String(paper_order)+".png";
document.getElementById('btn-visual').setAttribute('href', `/visual?filename={{file_name}}`)     
paper_text.innerText = {{ paper_text }}[0];
        
const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click', () => {
    console.log(result.paper_text.length);
    console.log(paper_order);
    if (paper_order < result.paper_text.length - 1){            
        paper_order ++;
        paper_img.src = "media/"+file_name_path+"/"+file_name_path+String(paper_order)+".png";
        paper_text.innerText = result.paper_text[paper_order];
    }
})
const btnPrev = document.getElementById('btn-prev');
btnPrev.addEventListener('click', () => {
    if (paper_order > 0){            
        paper_order --;
        paper_img.src = "media/"+file_name_path+"/"+file_name_path+String(paper_order)+".png";
        paper_text.innerText = result.paper_text[paper_order];
    }
})

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
    return cookieValue;
    }