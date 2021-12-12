// const btn_reload = document.getElementsByClassName('btn btn-primary');
// btn_reload.addEventListener('click', ()=>{
//     console.log(this.value);
// })

$('.btn-primary').on('click', (e)=>{
    let obj={
        file_name: e.target.value
    }      
    window.location.href = 'http://127.0.0.1:8000/' +'?' + $.param(obj);
    console.log(e.target.value);
})