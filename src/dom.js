import weatherInfo from './api-requests';

const widgetDiv = document.getElementById('weather-info');

const displayWeather = async (city, centigradeUnit) => {
  const weather = await weatherInfo(city);
  let unit = '';
  let temperature = 0;
  let feelLike = 0;

  if (weather.message === 'city not found') {
    widgetDiv.innerHTML = '<h5>City not Found</h5>';
    document.getElementById('toggleUnit').style.visibility = 'hidden';
    return;
  }
  document.getElementById('toggleUnit').style.visibility = 'visible';
  if (centigradeUnit) {
    unit = 'C';
    temperature = Math.round(weather.main.temp - 273);
    feelLike = Math.round(weather.main.feels_like - 273);
  } else {
    unit = 'F';
    temperature = Math.round((weather.main.temp - 273) * (9 / 5) + 32);
    feelLike = Math.round((weather.main.feels_like - 273) * (9 / 5) + 32);
  }
  widgetDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="https://www.countryflags.io/${weather.sys.country}/flat/64.png" class="card-img-top" style="width:64px; display:inline-block; margin:auto" alt="">
      <div class="card-body">
        <h5 class="card-title"> ${weather.name} ${weather.sys.country} ${temperature}°${unit}</h5>
        <p> ${weather.weather['0'].description} || feels like ${feelLike}°${unit} || Humidity: ${weather.main.humidity} || wind speed: ${weather.wind.speed}</p>
      </div>
    </div>`;
};

export default displayWeather;
