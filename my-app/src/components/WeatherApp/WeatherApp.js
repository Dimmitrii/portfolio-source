import React from 'react';

import "./WeatherApp.css";
import Spinner from "../common/Spinner";
import WeatherOther from "./WeatherOther";
import WeatherToday from "./WeatherToday";


const axios = require('axios').default;
const moment = require('moment');

class WeatherApp extends React.Component {
  state={
    isData:false,
    days:[],
    today:"",
  }
  componentDidMount(){
    axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Warsaw&appid=a94d0a5ac08570add4b47b8da933f247")
    .then((response)=>{
      const forecast = response.data.list;
      const days = forecast.filter((item)=>{ return moment(+`${item.dt}000`).format("H:mm") === "20:00"  });
      this.setState({days,isData:true,today:forecast[1]});
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  render(){
    console.log(this.state);
    return (
      <>
        {this.state.isData? 
        <div style={{width:"1356px",margin:"20px auto"}}>
          <div>
            <div style={{width:"730px",margin:"0 auto"}}>
              <WeatherToday forecast={this.state.today}/>
              <WeatherOther forecast={this.state.days}/>
            </div>
          </div>
        </div>
        :
        <Spinner/>}
      </>
    );
  }
}

export default WeatherApp;
