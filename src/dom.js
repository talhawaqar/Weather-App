import { weatherInfo } from './api-requests';
let widgetDiv = document.getElementById('weather-info');
 
const displayWeather = async (city) => {
  let weather = await weatherInfo(city);
  console.log(weather);
  if (weather.message == "city not found" ) {
    widgetDiv.innerHTML = `<h5>City not Found</h5>`;
    return;  
  }
  widgetDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="https://www.countryflags.io/${weather.sys.country}/flat/64.png" class="card-img-top" style="width:64px; display:inline-block; margin:auto" alt="">
      <div class="card-body">
        <h5 class="card-title"> ${weather.name} ${weather.sys.country} ${Math.round(weather.main.temp - 273)}°C</h5>
        <p> ${weather['weather']['0']['description']} || feels like ${Math.round(weather.main.feels_like - 273)}°C || Humidity: ${weather.main.humidity} || wind speed: ${weather.wind.speed}</p>
      </div>
    </div>`
  ;
};

export {
  displayWeather
};
