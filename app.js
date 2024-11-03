let myKey = config.MY_KEY;


const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchValue = document.querySelector('#search-bar').value;
    console.log("🚀 ~ searchValue:", searchValue);

    

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&maxResults=9&key=` + myKey)
        .then(response => {
            // network failure, request prevented
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
        })
        .then(data => {
            // console.log(data)
            const videoData = data.items.map((item) => {
                return item.snippet;
            });

            // console.log(videoData)

            const videoContainer = document.getElementById('video-container');
            videoContainer.innerHTML = '';

            videoData.forEach(video => {
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('video-style-div');
                videoDiv.innerHTML =
                    `
           <img src=${video.thumbnails.high.url}>
           <h4> ${video.title} </h4>
           <p>${video.channelTitle}</p>
           <p> ${new Date(video.publishTime).toLocaleDateString()}</p>
           `
                videoContainer.appendChild(videoDiv);
            });
        });


});



