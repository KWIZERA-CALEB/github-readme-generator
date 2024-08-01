import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const city = 'Kigali'

const App = () => {

  useEffect(()=> {
      const fetchWeather = async () => {
          try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            console.log(response)
          }catch(error) {
            console.log(error)
            throw error
          }
      }

      fetchWeather()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default App
