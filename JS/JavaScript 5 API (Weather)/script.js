const apiKey = 'cb26841c69f9d7db81e320110402d9e6' 
const cities = document.querySelector('.city')
const temperature = document.querySelector('.temp')
const ic = document.querySelector('.icon')
const desc = document.querySelector('.description')
const hum = document.querySelector('.humidity')
const win = document.querySelector('.wind')

let weather_result = {
  fetch_weather: function (city) {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&appid=' +
        apiKey
    )
      .then((response) => response.json())
      .then((info) => this.display_weather(info))
  },
  display_weather: function (info) {
    console.log(info);
    const { name } = info
    const { icon, description } = info.weather[0]
    const { speed } = info.wind
    const { temp, humidity } = info.main
    cities.textContent = 'Weather in ' + name
    ic.src = 'https://openweathermap.org/img/wn/' + icon + '.png'
    temperature.textContent = 'Temperature is: ' + temp + ' F'
    desc.textContent = 'Description: ' + description
    hum.textContent = 'Humidity: ' + humidity + '%'
    win.textContent = 'Wind speed: ' + speed + 'Km/h'
  },
  search: function () {
    this.fetch_weather(document.querySelector('.search').value)
  },
}
document.querySelector('button').addEventListener('click', function () {
  weather_result.search()
})