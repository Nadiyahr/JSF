const cities = {
  2643743: "london",
  3172394: "naples",
  702550: 'lviv',
  703448: 'kyiv',
  3169070: 'rome',
}

let select = document.getElementById('city')

for (key in cities) {
  let option = document.createElement("option");
  option.value = key;
  option.text = cities[key];
  select.append(option);
}

const param = {
  "url": "https://api.openweathermap.org/data/2.5/",
  "appid": "3a89d0a7d2a61cffcb6b268de02d46e4"
}
getWeather()

document.querySelector('#city').onchange = getWeather;

function getWeather() {
  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&lang=ua&appid=${param.appid}`)
      .then(weather => {
          return weather.json();
      }).then(showWeather);
}

function showWeather(data) {
  console.log(data);
  document.querySelector('.city-name').textContent = data.name;
  // document.querySelector('.country').textContent = data.sys.country;
  document.querySelector('.degre').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
  // document.querySelector('.cloud').textContent = data.weather[0]['description'];
  document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  // document.querySelector('.wind').innerHTML = 'вітер ' + data.wind.speed + ' м/с'
}