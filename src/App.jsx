import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const defaultCity = "Kigali"

const App = () => {
  
  const [weatherdata, setWeatherData] = useState(null)
  const [searchdata, setSearchData] = useState(null)
  const [city, setCity] = useState('')
  

  useEffect(()=> {
      const fetchWeather = async () => {
          try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${API_KEY}`)
            setWeatherData(response.data)
          }catch(error) {
            console.log(error)
            throw error
          }
      }

      fetchWeather()
  },[])


  const handleCityChange = (e)=> {
    setCity(e.target.value)
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      setSearchData(response.data)
    }catch(error) {
      console.log(error)
      throw error
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder='Search City' value={city} onChange={handleCityChange} />
            <button type="submit"></button>
          </div>
        </form>
      </div>
      {weatherdata ? 
        <div>
          <h1>Location: {weatherdata.name}</h1>
          <h3>Temperature: {weatherdata.main.temp}</h3>
          <h3>Humidity: {weatherdata.main.humidity}</h3>
          <h3>Temperature: {weatherdata.main.pressure}</h3>
        </div>
      :
        <h3>No data</h3>
      }

      {searchdata ? 
        <div>
          <h1>Location: {searchdata.name}</h1>
          <h3>Temperature: {searchdata.main.temp}</h3>
          <h3>Humidity: {searchdata.main.humidity}</h3>
          <h3>Temperature: {searchdata.main.pressure}</h3>
        </div>
      :
        <h3>No data</h3>
      }
      
    </div>
  )
}

export default App
