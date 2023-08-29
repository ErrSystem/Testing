const weatherButton = document.getElementsByClassName('fa-magnifying-glass')[0];
const weatherInput = document.getElementById('weatherInput');
const weatherSection = document.getElementById('Weather');
weatherButton.addEventListener('click', () => getWeather());
weatherInput.addEventListener('focus', () => {
    if (weatherSection.className != ''){
        weatherSection.setAttribute('class', 'closeWeather');
        $(document.getElementById('weatherInformations')).fadeOut('slow');
        $(document.getElementById('weather404')).fadeOut('slow');
    }
});
async function getWeather() {
    const city = weatherInput.value.toLowerCase();
    // convert city to latitude and longitude
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=63e1acaec8dd2692bb774f9c1a33ae59`)
    .then(response => response.json())
    .then(json => {
        // get the weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${json[0].lat}&lon=${json[0].lon}&appid=63e1acaec8dd2692bb774f9c1a33ae59`)
        .then(response => response.json())
        .then(Data => {
            console.log(Data);
            document.getElementById('weatherMaxTemp').innerText = `${parseInt(Data.main.temp_min - 273.15)}˚C  / ${parseInt(Data.main.temp_max - 273.15)}˚C`;
            document.getElementById('weatherImg').setAttribute('src', `http://openweathermap.org/img/w/${Data.weather[0].icon}.png`);
            document.getElementById('weatherStatus').innerText = Data.weather[0].main;
            document.getElementById('weatherTemp').innerHTML = `<i class="fa-solid fa-temperature-half" style="padding-right: 10px;"></i>${(Data.main.temp - 273.15).toFixed(0)}˚C`;
            document.getElementById('weatherWindSpeed').innerHTML = `<i class="fa-solid fa-wind" style="padding-right: 10px;"></i>${(Data.wind.speed * 1.609).toFixed(2)} km/h`;
            document.getElementById('weatherHumidity').innerHTML = `<i class="fa-solid fa-water" style='padding-right: 10px'></i> ${Data.main.humidity}%`;
            weatherSection.setAttribute('class', 'openWeather');
            $(document.getElementById('weatherInformations')).fadeIn('slow');
            // edit styles
            tempColor(Data.main.temp - 273.15);
        })
    })
    .catch(() => {
        console.log('Invalid city name');
        weatherSection.setAttribute('class', 'openWeather');
        $(document.getElementById('weather404')).fadeIn('slow');
    });
}
const tempColor = temp => {
    if (temp >= 35){
        document.getElementsByClassName('fa-temperature-half')[0].style.color = 'red';
    }
    else if (temp < 35) {
        document.getElementsByClassName('fa-temperature-half')[0].style.color = 'aqua';
    }
}