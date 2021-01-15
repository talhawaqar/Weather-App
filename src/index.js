import 'bootstrap';
import './style/main.scss';
import {displayWeather} from './dom'

const submitButton = document.getElementById('btnSubmit');
const cityTxt = document.getElementById('citytxt');
const toggleUnit = document.getElementById('toggleUnit');
let centigradeUnit = true;

submitButton.addEventListener('click', ()=>{
  displayWeather(cityTxt.value, centigradeUnit);
});

toggleUnit.addEventListener('click', (e) =>{
  if(e.target.innerHTML =='Ferhanite'){
    centigradeUnit = false;
    e.target.innerHTML ='Centigrade';
    displayWeather(cityTxt.value, centigradeUnit);
  }
  else {
    centigradeUnit = true;
    e.target.innerHTML ='Ferhanite';
    displayWeather(cityTxt.value, centigradeUnit);
  }
});
