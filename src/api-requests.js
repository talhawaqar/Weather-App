
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '&APPID=915030e0750a47e3644dab2f5d014e52';

const weatherInfo = async (city) => {
  console.log(city);
  try {
    const response = await fetch(`${url}${city}${key}`, { mode: 'cors' });
    const result = await response.json();
    return result;
  } catch (err) {
    return err;
  }
};

export {
  weatherInfo
};
