// https://www.googleapis.com/youtube/v3/search?part=snippet&q=travel&key=AIzaSyDiuzQymgMZUkmEphXYni5CaGE11Gwbgcw


fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=travel&key=AIzaSyDiuzQymgMZUkmEphXYni5CaGE11Gwbgcw')
    .then(response => {
        // network failure, request prevented
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
    })
    .then(data => {
        console.log("🚀 ~ data:", data);
        document.getElementById('res').innerHTML = JSON.stringify(data);
    })





// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         const resData = JSON.parse(xhttp.responseText);
//         console.log("🚀 ~ resData:", resData);
//     }
// };
// xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=travel&key=AIzaSyDiuzQymgMZUkmEphXYni5CaGE11Gwbgcw", true);
// xhttp.send();