import { dateBuilder } from '../lib/dateBuilder'

function Weather({ weather }) {
  return (
    <>
      <div className="location">
        {weather.city}, {weather.country}
      </div>
      <div className="date">{dateBuilder(new Date(weather.dt))}</div>
      <div className="temp">{weather.temp}C</div>
      <div className="weather">{weather.detail[0].main}</div>
    </>
  )
}

export default Weather
