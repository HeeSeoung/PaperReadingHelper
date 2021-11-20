'use strict';
const btnLogin = document.getElementById('login-btn');


btnLogin.addEventListener('click', async() => {

    const id = document.getElementById('card-id').value;
    const password = document.getElementById('card-password').value;

    if(id == ''){
        document.getElementById('card-id').focus();
        return false;
    }
    if(password == ''){
        document.getElementById('card-password').focus();
        return false;
    }

    const formData = new FormData();
    formData.append('card-id', document.getElementById('card-id').value);
    formData.append('card-password', document.getElementById('card-password').value);

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