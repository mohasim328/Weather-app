const apiKey = "538920364b97a5abfbb108c8d304a689";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humedity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/cloud.png";
    } else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/duzzle.png";
    } else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/misst.png";
    }
    document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
console.log(data);