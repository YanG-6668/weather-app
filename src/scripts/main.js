'use strict';

const appId = 'e1893000db0630e29e513dd37ec06b5b';
const units = 'imperial';
let searchMethod;

function getSearchMethod(searchTerm) {
  if (searchTerm === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
    searchMethod = 'zip';
  } else {
    searchMethod = 'q';
  }
}

function searchWeather(searchTerm) {
  getSearchMethod(searchTerm);

  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  });
}

function init(resultFromServer) {
  const clearWeather = document.querySelector('.clear');
  const cloudyWeather = document.querySelector('.cloudy');
  const stormWeather = document.querySelector('.storm');
  const snowWeather = document.querySelector('.snow');
  const rainWeather = document.querySelector('.rain');
  const defaultWeather = document.querySelector('.default');
  const promoImgs = document.querySelectorAll('.promo-img');

  const removeClassImg = () => promoImgs.forEach(img => {
    img.classList.remove('active');
  });

  switch (resultFromServer.weather[0].main) {
    case 'Clear':
      removeClassImg();
      clearWeather.classList.add('active');
      break;

    case 'Clouds':
      removeClassImg();
      cloudyWeather.classList.add('active');
      break;

    case 'Rain':
    case 'Drizzle':
    case 'Mist':
      removeClassImg();
      rainWeather.classList.add('active');
      break;

    case 'Thunderstorm':
      removeClassImg();
      stormWeather.classList.add('active');
      break;

    case 'snow':
      removeClassImg();
      snowWeather.classList.add('active');
      break;

    default:
      removeClassImg();
      defaultWeather.classList.add('active');
      break;
  }

  const weatherDescriptionHeader = document.querySelector('.weather__description-header');
  const weatherTemperature = document.querySelector('.weather__temperature');
  const humidityElement = document.querySelector('.weather__humidity');
  const windSpeed = document.querySelector('.weather__wind-speed');
  const cityHeader = document.querySelector('.weather__city-header');
  const weatherIcon = document.querySelector('.weather__icon');
  const weatherContainer = document.querySelector('.weather__container');

  const resultDescription = resultFromServer.weather[0].description;

  weatherIcon.src = 'http://openweathermap.org/img/wn/' + resultFromServer.weather[0].icon + '.png';
  weatherDescriptionHeader.textContent = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);
  weatherTemperature.innerHTML = Math.round((resultFromServer.main.temp - 32) / 1.8) + '&#8451';
  humidityElement.textContent = 'Humidity levels at ' + Math.round(resultFromServer.main.humidity) + '%';
  windSpeed.textContent = 'Wind at ' + Math.round(resultFromServer.wind.speed) + ' m/s';
  cityHeader.textContent = `${resultFromServer.name}, ${resultFromServer.sys.country}`;
  weatherContainer.style.visibility = 'visible';
}

const weatherSearchBtn = document.querySelector('.weather__search-btn');

weatherSearchBtn.addEventListener('click', () => {
  const searchTerm = document.querySelector('.weather__search-input').value;

  if (searchTerm) {
    searchWeather(searchTerm);
  }
});
