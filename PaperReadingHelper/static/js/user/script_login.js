'use strict';
const btnLogin = document.getElementById('login-btn');


btnLogin.addEventListener('click', async() => {

    const id = document.getElementById('login-id').value;
    const password = document.getElementById('login-password').value;

    if(id == ''){
        document.getElementById('login-id').focus();
        return false;
    }
    if(password == ''){
        document.getElementById('login-password').focus();
        return false;
    }

    const formData = new FormData();
    formData.append('login-id', document.getElementById('login-id').value);
    formData.append('login-password', document.getElementById('login-password').value);

    const response = await fetch('', {
        method: 'POST',
        headers: {'X-CSRFToken': getCookie('csrftoken')},
        body: formData,
    })
    .catch((error) => {
        alert(error);
    })
    const result = await response.json()
    if (result.success){
        alert(result.message);
        location.href='/';
    }
    else {
        alert(result.message);
    }

})


function enterkey() {
    if (window.event.keyCode == 13) {
        login();
    }
}


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