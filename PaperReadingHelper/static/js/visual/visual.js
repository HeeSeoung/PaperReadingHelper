// let search = location.search.substring(1);
// let searchObj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
// console.log(searchObj);
// async () => {
//     const formData = new FormData();
//     formData.append('file_name', searchObj);
//     const response = await fetch('', {
//         method: 'POST',
//         headers: {'X-CSRFToken': getCookie('csrftoken')},
//         body: formData,
//     })
//     .catch((error) => {
//         alert(error);
//     })
//     const result = await response.json()
//     alert(result.file);        
// }

// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//       const cookies = document.cookie.split(';');
//       for (let i = 0; i < cookies.length; i++) {
//                 const cookie = cookies[i].trim();
//                 // Does this cookie string begin with the name we want?
//                 if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
//     return cookieValue;
//     }