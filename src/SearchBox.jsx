import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
 let [city, setCity] = useState("");
 let [error , setError] = useState(false);
 let [weatherImage, setWeatherImage] = useState("");
 let [seasonMessage, setSeasonMessage] = useState("");
 

let Api_Url = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "09dbf90216013f946bfc93f65ea9c255";

let getWeather = async () =>{
    try{
        let res = await fetch(`${Api_Url}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse  = await res.json();
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        if (result.temp > 28) {
            setWeatherImage("https://cdn.pixabay.com/photo/2016/03/31/18/14/icon-1294224_1280.png"); 
            setSeasonMessage("Summer Season");
        } else if (result.temp < 15) {
            setWeatherImage("https://cdn.pixabay.com/photo/2013/07/13/13/24/snow-160956_1280.png"); 
            setSeasonMessage("Winter Season");
        } else if (result.weather.includes("rain")) {
            setWeatherImage("https://cdn.pixabay.com/photo/2016/03/18/15/05/rain-1265201_1280.png"); 
            setSeasonMessage("Rainy Season");
        } else {
            setWeatherImage("https://cdn.pixabay.com/photo/2020/04/23/06/37/birds-5081316_1280.png"); 
            setSeasonMessage("Clear Sky");
        }
        return result;
    } catch(err){
       throw err;
    }
   
};

let handleChange =  (e)=>{
    setCity(e.target.value);
}
let handleSubmit = async(e)=>{
    try{
        e.preventDefault();
        setCity("");
        setWeatherImage("");
        setSeasonMessage(""); 
      let newInfo =   await  getWeather();
      updateInfo(newInfo);
    } catch(err){
       setError(true);
    }
};

return (
    <div className='SearchBox'>
        {weatherImage && <img src={weatherImage} alt="" style={{ height: "180px" }} />}
    <form action="" onSubmit={handleSubmit} className='SearchBox'>
    <TextField id="city" className="search" label="city-name" variant="outlined" required value={city} onChange={handleChange}/>
    <Button variant="contained" endIcon={<SendIcon />} type='submit'>Search</Button>
    {error && <p style = {{color : "red"}}>No Such Place Exist!</p>}
    </form>
    {seasonMessage && <h1 style={{boxShadow:"0 5px 10px yellow",color:"#84C7E3"}}>{seasonMessage}</h1>}
    </div>  
)
}