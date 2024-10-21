
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
import './App.css'
export default function WeatherApp(){

const [weatherInfo , setWeatherInfo] = useState({
    city : "delhi",
    feelsLike : 24.84,
    temp : 25.05,
    tempMin : 25.05,
    tempMax: 25.05,
    humidity : 47,
    weather : "haze"
});

let updateInfo = (newInfo)=>{
  setWeatherInfo(newInfo);
}
    return (
        <>

        <div style= {{textAlign:"center"}} className="weather">
            <div className="heading">
            <h1>Weather App</h1>
            </div>
         <SearchBox updateInfo={updateInfo}/>
        <InfoBox info = {weatherInfo}/> 
        </div>
        </> 
    )
}