import { useState } from "react"
import axios from "axios"

function Weather(){
    const [city,setcity]=useState("")
    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const[desc,setdesc] = useState("")
  
    function handleCity(evt){
      setcity(evt.target.value)
    }
  
    function getWeather(){
      var weatherData = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0bed3fa8e73e0a65b98f64940459d60`)
      weatherData.then(function(success)
      {console.log(success.data)
        setweather(success.data.weather[0].main)
        setdesc(success.data.weather[0].description)
        settemp(success.data.main.temp)
  
  
  
      })
  
    }
    
    return(<div className="bg-black p-20">
    <div className="bg-green-400 p-10 border-black rounded-md">
      <h1 className="text-4xl font-bold">Weather Report</h1>
      <p className="text-1xl"> I can give you a weather report about your city! </p>
      <input onChange={handleCity} value={city} type="text" placeholder="Enter your City Name" className="border-black rounded-md p-1 mt-5"></input>
      <br></br>
      <button onClick={getWeather} className="bg-black text-white p-3 border-black rounded-md mt-5">Get Report</button>
      <h2 className="font-bold text-2xl">Weather:{weather}</h2>
      <h2 className="font-bold text-2xl">Temperature:{temp}</h2>
      <h2 className="font-bold text-2xl">Description:{desc}</h2>
    </div>
  </div>)
    

}

export default Weather
