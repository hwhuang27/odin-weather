import displayWeather from './display.js'

let city = 'Vancouver';
displayWeather(city);

let input = document.querySelector('.search-field');
let submit = document.querySelector('.button');

submit.addEventListener('click', () => {
    city = input.value;
    console.log(city);
    displayWeather(city);
    input.textContent = '';
})