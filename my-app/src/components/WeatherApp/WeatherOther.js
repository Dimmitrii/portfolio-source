import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherOther = (props)=>{
    const {forecast} = props;
    // const {dt,weather,main} = forecast;
    // const {icon} = weather[0];
    // const {temp} = main;
    const weatherItems = forecast.map((item,index)=><WeatherItem key={index} date={item.dt} icon={item.weather[0].icon} temp={item.main.temp}/>)
    return(
        // <ul className="list">
        <>
            {weatherItems}
        </>
        // </ul>
    );
}

export default WeatherOther;