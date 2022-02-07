import { dateBuilder } from '../lib/dateBuilder'
import './Weather.css'

function Weather({ weather }) {
  return (
    <>
      <div className="location-box">
        <div className="location">
          {weather.city}, {weather.country}
        </div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">{weather.temp}°c</div>
        <div className="weather">{weather.detail[0].main}</div>
      </div>
    </>
  )
}

export default Weather
