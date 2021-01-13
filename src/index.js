import 'bootstrap';
import './style/main.scss';
import {displayWeather} from './dom'

const submitButton = document.getElementById('btnSubmit');
const cityTxt = document.getElementById('citytxt');

submitButton.addEventListener('click', ()=>{
  displayWeather(cityTxt.value);
});
