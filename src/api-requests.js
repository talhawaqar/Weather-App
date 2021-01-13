
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '&APPID=915030e0750a47e3644dab2f5d014e52';

const weatherInfo = async (city) => {
  try {
    const response = await fetch(`${url}${city}${key}`, { mode: 'cors' });
    const weateherData = await response.json();
    return weateherData;
  } catch (err) {
    return err;
  }
};

export {
  weatherInfo
};
