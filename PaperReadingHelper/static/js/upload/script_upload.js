'use strict';

const btnUpload = document.getElementById('customFile');

// btnUpload.addEventListener('change', async() =>{

//     const formData = new FormData();
//     formData.append('customFile', document.getElementById('customFile')[0]);

//     const response = await fetch('', {
//         method: 'POST',
//         headers: {'X-CSRFToken': getCookie('csrftoken')},
//         body: formData,
//     })
//     .catch((error) => {
//         alert(error);
//     })
//     const result = await response.json()
//     if (result.success){
//         alert(result.message);
//     }
//     else {
//         alert(result.message);
//     }


// })

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