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

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    datasets: [{
        data: wordcloud_data,      // 섭취량, 총급여량 - 섭취량
        borderWidth: 0,
        scaleBeginAtZero: true,
    }]},
    options: {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
        }
    }},
});

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