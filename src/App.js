import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import './App.css'
import Weather from './components/Weather'

function App() {
  const [query, setQuery] = useState('Seoul')
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const { REACT_APP_API_KEY } = process.env
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log(response.data)
        const {
          main: { temp },
          sys: { country },
          name,
          weather: detail,
          dt,
        } = response.data

        setWeather({
          temp: Math.ceil(temp),
          city: name,
          country: country,
          detail: detail,
          dt: dt,
        })
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [query])
  return (
    <div className="App">
      <Search setQuery={setQuery} />
      {!isLoading && <Weather weather={weather} />}
    </div>
  )
}

export default App
