const button = document.getElementsByClassName('fa-magnifying-glass')[0];
button.addEventListener('click', () => APIConvertCity());
async function APIConvertCity() {
    const city = document.getElementById('weatherInput').value.toLowerCase();
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=63e1acaec8dd2692bb774f9c1a33ae59`)
    .then(response => response.json())
    .then(json => {
        // if(json[0].lat !== undefined){
            console.log(json)
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${json[0].lat}&lon=${json[0].lon}&appid=63e1acaec8dd2692bb774f9c1a33ae59`)
            .then(response => response.json())
            .then(Data => console.log(Data))
        // }
        // else {
            // console.log('invalid city')
        // }
    })
    .catch(() => console.log('Invalid city name'));
}
async function APISearchWeather(lat, lon) {

}