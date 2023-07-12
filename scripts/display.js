import key from './secret.js';
import { fetchWeatherData, processWeatherData } from './weather.js';

const condition = document.querySelector('.condition');
const location = document.querySelector('.location');
const region = document.querySelector('.region');
const temp = document.querySelector('.temp');
const feels_like = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

async function displayWeather(city) {
    let api_data = await fetchWeatherData(city, key);
    let data = await processWeatherData(api_data);

    condition.textContent = data.condition;
    location.textContent = data.location;
    region.textContent = data.region;
    temp.textContent = `${data.temp}°C`
    feels_like.textContent = `Feels like ${data.feelsLike}°C`   
    wind.textContent = `Wind ${data.wind} km/h`;
    humidity.textContent = `Humidity ${data.humidity}%`;
}

export default displayWeather;