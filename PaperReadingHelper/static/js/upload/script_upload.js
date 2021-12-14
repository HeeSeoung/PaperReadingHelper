'use strict';
const btnUpload = document.getElementById('btn-upload');
const paper_img = document.getElementById('paper-img');
const paper_text = document.getElementById('paper-text');
const btnVisual = document.getElementById('btn-visual');
let paper_order = 0;
let result;
let file_name_path;
let file_name;
btnUpload.addEventListener('click', async() => {
    console.log("hello");
    const formData = new FormData();
    formData.append('customFile', document.getElementById('customFile').files[0]);

    const response = await fetch('', {
        method: 'POST',
        headers: {'X-CSRFToken': getCookie('csrftoken')},
        body: formData,
    })
    .catch((error) => {
        alert(error);
    })
    result = await response.json()
    console.log(result.file_text);
    file_name = result.file_name;
    file_name_path = result.file_name.slice(0, -4);    
    console.log(result.paper_text);
    if (result.success){        
        // $(".modal-body").html("업로드 완료되었습니다!");        
        paper_img.style.height = '500px';
        paper_img.src = "media/"+file_name_path+"/"+file_name_path+String(paper_order)+".png";
        document.getElementById('btn-visual').setAttribute('href', `/visual?filename=${result.file_name}`)
        // btnVisual.classList.remove('d-none');
        // document.getElementById('btn-trans').classList.remove('d-none');
        // document.getElementById('btn-next').classList.remove('d-none');
        // document.getElementById('btn-prev').classList.remove('d-none');        
        paper_text.innerText = result.paper_text[0];
        $('#myModal').modal('hide');      
    }
    else {
        alert(result.message);
    }
})
btnVisual.addEventListener('click', () => {
    let obj={
        file_name: result.file_name
    }      
    window.location.href = 'http://127.0.0.1:8000/visual/' +'?' + $.param(obj);        
})
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

const btnTrans = document.getElementById('btn-trans');
const textTrans = document.getElementById('translated-text');

btnTrans.addEventListener('click', async () => {
    
    console.log("dfdfdfdfdfdfdffffffffffffffffffff");
    console.log(file_name);
    const formData = new FormData();
    formData.append('file_name', file_name);

    const response = await fetch('', {
        method: 'PUT',
        headers: {'X-CSRFToken': getCookie('csrftoken')},
        body: formData,
    })
    .catch((error) => {
        alert(error);
    })
    result = await response.json();

    if (result.success){        
        // $(".modal-body").html("업로드 완료되었습니다!");  
        textTrans.innerText = result.result_text[0];
        $('#myModal').modal('hide');
        $('#translation-modal').modal('show');
    }
    else {
        alert(result.message);
    }
})
    