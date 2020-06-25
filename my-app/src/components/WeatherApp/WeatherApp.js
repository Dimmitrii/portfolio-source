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
    axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Helsinki&appid=a94d0a5ac08570add4b47b8da933f247")
    .then((response)=>{
      const forecast = response.data.list;
      const days = forecast.filter((item)=>{ return moment(+`${item.dt}000`).format("H:mm") === "21:00"  });
      this.setState({days,isData:true,today:forecast[0]});
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
        <div className="App container pt-3">
          <div className="row">
            <div className="col-8 offset-2">
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
