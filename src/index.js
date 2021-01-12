import 'bootstrap';
import './style/main.scss';
import { weatherInfo } from './api-requests';

const c = weatherInfo('Lahore');
console.log(c);
