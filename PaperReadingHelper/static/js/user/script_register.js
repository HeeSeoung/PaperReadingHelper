'use strict';
const btn_Create = document.getElementById('btn-create');
console.log(btn_Create.value);
btn_Create.addEventListener('click', async() => {

    let id = document.getElementById('login-id').value;
    let password = document.getElementById('login-password').value;
    let password_confirm = document.getElementById('login-confirm-password').value;
    let email = document.getElementById('login-email').value;

    if(id == ''){
        document.getElementById('login-id').focus();
        return false;
    }
    else{
        if(!checkID(id)){
            document.getElementById('login-id').focus();
            return false;
        }
    }
    if(password == ''){
        document.getElementById('login-password').focus();
        return false;
    }
    else{
        if(!checkPassword(password)){
            document.getElementById('login-password').focus();
            return false;
        }
    }
    if(password_confirm == ''){
        document.getElementById('login-confirm-password').focus();
        return false;
    }
    else{
        if(!inspectPassword()){
            document.getElementById('login-confirm-password').focus();
            return false;
        }
    }
    if(email == ''){
        document.getElementById('login-email').focus();
        return false;
    }
    else{
        if(!checkEmail(email)){
            document.getElementById('login-email').focus();
            return false;
        }
    }

    const data = new FormData(document.getElementById('RegisterForm'));

    const response = await fetch('', {
        method: 'POST',
        headers: {'X-CSRFToken': getCookie('csrftoken')},
        body: data,
    })
    .catch((error) => {
        alert(error);
    })
    const result = await response.json()
    if (result.success){
        alert(result.message)
        location.href='/login';
    }

})


function checkID(str){
    if(str === '')
        return;
    let reg_id = /^[a-z]+[a-z0-9]{5,19}$/g;

    if( !reg_id.test(str)) {
        document.getElementById('idError').innerText = '아이디는 영문자로 시작하는 6~20자 영문자 또는 숫자이어야 합니다.';
        return false;
    }
    else{
        document.getElementById('idError').innerText = ''
        return true;
    }
}


function checkEmail(str){                                        
     let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

     if(!reg_email.test(str)){
        document.getElementById('emailError').innerText = '잘못된 이메일 형식입니다.';
        return false;
    }         
     else{
        document.getElementById('emailError').innerText = ''
        return true;
    }             
}


function checkPassword(str){
    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/.test(str)){
        document.getElementById('passwordError').innerText = '숫자와 영문자 조합으로 8~16자리를 사용해야 합니다.';
        return false;
    }
  
    let checkNum = str.search(/[0-9]/g); // 숫자사용
    let checkEng = str.search(/[a-z]/ig); // 영문사용
  
    if(checkNum <0 || checkEng <0){
        document.getElementById('passwordError').innerText="숫자와 영문자를 조합하여야 합니다.";
        return false;
    }
    else{
        document.getElementById('passwordError').innerText="";
        return true;
    }
}


function inspectPassword(){
    let password = document.getElementById('login-password').value;
    let password_confirm = document.getElementById('login-confirm-password').value;
    if(password === '' || password_confirm === '')
        return
    if(password !== password_confirm){
        document.getElementById('passwordError').innerText="비밀번호가 일치하지 않습니다.";
        return false;
    }
    else{
        document.getElementById('passwordError').innerText="";
        return true;
    }
}