import React from 'react'
import FormattedDate from './FormattedDate'
import WeatherIcon from './WeatherIcon'
import WeatherTemperature from './WeatherTemperature'
import './Weather.css'

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-center text-capitalize">{props.data.city}</h1>
      <ul>
        <li className="description">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize description">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="clearfix">
            <div className="iconW">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <ul class>
            <li className="HumidityWind">Humidity: {props.data.humidity}%</li>
            <li className="HumidityWind">Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
