import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
  let Hot_url ="https://cdn.pixabay.com/photo/2022/01/17/23/10/trees-6945935_1280.jpg";
  let Cold_Url = "https://cdn.pixabay.com/photo/2023/02/08/17/55/mountains-7777164_1280.jpg"; 
  let Rain_Url = "https://cdn.pixabay.com/photo/2015/04/20/13/12/little-boy-731165_1280.jpg" 

    return (

        <div className="InfoBox">
         <div className='card'>
         <Card sx={{ minWidth: 345 ,  transition: 'box-shadow 0.3s ease', 
                '&:hover': {
                    boxShadow: '0px 0px 8px  #FFCC00', 
                },}}>
      <CardMedia
        sx={{ height: 140 }}
        image = {
            info.humidity>80 
            ? Rain_Url 
            : info.temp > 15
            ? Hot_url 
            : Cold_Url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
       <div>Temperature = {info.temp}&deg;C </div>
       <div>Humidity = {info.humidity} </div>
       <div>Min Temp = {info.tempMin}&deg;C </div>
       <div>Max Temp = {info.tempMax}&deg;C </div>
       <div>The weather feels like = {info.feelsLike}&deg;C </div>
       <div>Weather = <i>{info.weather}</i> </div>
        </Typography>
      </CardContent>

    </Card>
    </div>
        </div>
    )
}