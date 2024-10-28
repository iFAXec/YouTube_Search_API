let myKey = config.MY_KEY;

fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=travel&key=' + myKey)
    .then(response => {
        // network failure, request prevented
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
    })
    .then(data => {
        // console.log(data)
        const videoData = data.items.map((item)=>{
            return item.snippet;
        });

        console.log(videoData)
        
        const videoContainer = document.getElementById('video-container');               
        const videoDiv = document.createElement('div');
        videoData.forEach(video => {
           videoDiv.innerHTML = `
           <img src=${video.thumbnails.high.url}>
           `
        
       });

        videoContainer.appendChild(videoDiv);

    });




// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         const resData = JSON.parse(xhttp.responseText);
//         console.log("🚀 ~ resData:", resData);
//     }
// };
// xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=travel&key=" + myKey, true);
// xhttp.send();
