document.addEventListener('DOMContentLoaded', () => {
const apikey = "ad20cbb454a572067ed39edf415b99a6";
// Note: The base URL now does not include 'q=Nairobi'
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const url = `${apiurl}q=${city}&appid=${apikey}`;
    const response = await fetch(url);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{

    }

    const data = await response.json();
    

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
    document.querySelector(".wind").innerText = `${data.wind.speed} km/h`;
    
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
      } else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
     }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
     }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

    searchBtn.addEventListener("click", () => {
        checkWeather(searchbox.value);
    });

    inputBox.addEventListener('keydown', (event) => {
        // Check if the Enter key is pressed (key code 13)
        if (event.key === 'Enter') {
        checkWeather(inputBox.value);
        }
    });

})


// Initial call to checkWeather if needed, e.g., to load weather for a default city
// checkWeather('Nairobi'); // Uncomment and replace 'Nairobi' with your preferred default city
