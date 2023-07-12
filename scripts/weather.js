
async function fetchWeatherData(city, key) {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
    let data = await response.json();
    return data;
}

async function processWeatherData(data){
     return {
        location: data.location.name,
        region: data.location.region,
        condition: data.current.condition.text,
        temp: data.current.temp_c,
        feelsLike: data.current.feelslike_c,
        wind: data.current.wind_kph,
        humidity: data.current.humidity
    };
}

export { fetchWeatherData, processWeatherData };
