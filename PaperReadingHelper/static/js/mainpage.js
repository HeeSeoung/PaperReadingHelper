const url = new URL(location.href);
const urlParams = url.searchParams;
try{
  let paper_order_reload = 0;
  let file_name_reload = urlParams.get('file_name');
  console.log(file_name_reload);
  if (file_name_reload != '') {    
    let file_name_path = file_name_reload.slice(0, -4);
    paper_img.src = "media/"+file_name_path+"/"+file_name_path+String(paper_order_reload)+".png";    
    btnVisual.classList.remove('d-none');
    document.getElementById('btn-trans').classList.remove('d-none');
    document.getElementById('btn-next').classList.remove('d-none');
    document.getElementById('btn-prev').classList.remove('d-none');
    paper_text.innerText = result.paper_text[0];
  }
}
catch {
  console.log("파일 이름 없음");
}

// function readURL(input) {
//     if (input.files && input.files[0]) {
  
//       var reader = new FileReader();
  
//       reader.onload = function(e) {
//         $('.image-upload-wrap').hide();
  
//         $('.file-upload-image').attr('src', e.target.result);
//         $('.file-upload-content').show();
  
//         $('.image-title').html(input.files[0].name);
//       };
  
//       reader.readAsDataURL(input.files[0]);
  
//     } else {
//       removeUpload();
//     }
//   }
  
//   function removeUpload() {
//     $('.file-upload-input').replaceWith($('.file-upload-input').clone());
//     $('.file-upload-content').hide();
//     $('.image-upload-wrap').show();
//   }
//   $('.image-upload-wrap').bind('dragover', function () {
//           $('.image-upload-wrap').addClass('image-dropping');
//       });
//       $('.image-upload-wrap').bind('dragleave', function () {
//           $('.image-upload-wrap').removeClass('image-dropping');
//   });