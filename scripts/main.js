
import key from './secret.js';
import {fetchWeatherData, processWeatherData} from './weather.js';

async function displayWeather(city){
    let api_data = await fetchWeatherData(city, key);
    let data = await processWeatherData(api_data);

    console.log(data.location);
    console.log(data.region);
    console.log(data.condition);    
    console.log(data.temp);
    console.log(data.feelsLike);
    console.log(data.wind);
    console.log(data.humidity);
}


displayWeather('Vancouver');