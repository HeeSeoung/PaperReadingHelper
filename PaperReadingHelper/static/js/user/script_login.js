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
        location.href='/';
    }

})


function enterkey() {
    if (window.event.keyCode == 13) {
        login();
    }
}