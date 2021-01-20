
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '&APPID=915030e0750a47e3644dab2f5d014e52';
const GIFYAPIKEY = 'QUCK5K1zxPSp4P1KYmfb26YUYgIUgamw';
const gifyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GIFYAPIKEY}&limit=1&q=`;

const weatherInfo = async (city) => {
  try {
    const response = await fetch(`${url}${city}${key}`, { mode: 'cors' });
    const weateherData = await response.json();
    return weateherData;
  } catch (err) {
    return err;
  }
};

const getImage = async (search) => {
  try {
    const response = await fetch(`${gifyUrl}${search}`, { mode: 'cors' });
    const images = await response.json();
    return images;
  } catch (err) {
    return err;
  }
};

export { weatherInfo, getImage };
