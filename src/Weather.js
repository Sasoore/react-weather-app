import React, { useState } from 'react'
import axios from 'axios'
import './Weather.css'
import WeatherInfo from './WeatherInfo'
import WeatherForecast from './WeatherForecast.js'

export default function Weather(props) {
  const [weatherData, setData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    setData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      weatherIcon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value)
  }

  function search() {
    const apiKey = 'c5eae455c0d84c0de87118e8f84251f7'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
    )
  } else {
    search()
    return 'Loading...'
  }
}
