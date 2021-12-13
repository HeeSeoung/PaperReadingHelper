let wordcloud_data = new Array();
console.log(wordcloud_text[0]);
for (var text in wordcloud_text) {    
    console.log(text);
    let wordcloud_item = new Object();
    wordcloud_item.x = wordcloud_text[text][0];
    wordcloud_item.value = wordcloud_text[text][1];
    wordcloud_data.push(wordcloud_item);
}

chart = anychart.tagCloud(wordcloud_data);
chart.container("wordcloud");
chart.draw();

chart = anychart.bar();
let series = chart.bar(wordcloud_data.slice(undefined, 5));
chart.container("barchart");
chart.draw();

chart_pie = anychart.pie();
let series_2 = chart_pie.bar(wordcloud_data.slice(undefined, 5));
chart_pie.container("piechart");
chart_pie.draw();



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