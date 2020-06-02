import React from "react";
import tempConverter from "../../utils/tempConverter";
const moment = require('moment');

const WeatherItem = (props)=>{
    const {date,icon,temp} = props;
    const src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return(
        <div className="item-weather" style={{backgroundColor:"white"}}>
           <div className="float-left item-content">{moment(+`${date}000`).format("YYYY.MM.DD")}
            <br/> 
            {moment(+`${date}000`).format(" H:mm")} 
            </div>
            <div className="float-left i-i"><img src={src} alt=""/></div>
            <div className="float-right item-content">{tempConverter(temp)}</div>
        </div>
    )
}

export default WeatherItem;