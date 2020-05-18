import React from "react";
import windDiretion from "../../utils/windDirection";
import tempConverter from "../../utils/tempConverter";
const moment = require('moment');

const WeatherToday = (props)=>{
    const {forecast} = props;
    const {temp} = forecast.main;
    const {icon,main} = forecast.weather[0];
    const {dt} = forecast;
    const {speed,deg} = forecast.wind;
    const src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return(
        <div className="contaner">
            <div>Minsk,BY<br/>{moment(+`${dt}000`).format("H:mm")}</div>
            <div className="center"><img src={src} alt=""/><br/>{main}<br/>{tempConverter(temp)}</div>
            <div className="item-weather"><div className="float-left dr">{windDiretion(deg)}</div><div className="float-right sp">{speed}</div></div>
        </div>
    );
}

export default WeatherToday;