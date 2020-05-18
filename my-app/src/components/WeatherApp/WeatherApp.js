import React from 'react';

import "./WeatherApp.css";
import Spinner from "./Spinner";
import WeatherOther from "./WeatherOther";
import WeatherToday from "./WeatherToday";
// import YoutubeApp from "../YoutubeApp/YoutubeApp";
// import NavBar from "../NavBar/NavBar";
// import CatsApp from "../CatsApp/CatsApp";
// import TechPage from "../Tech/Page";
// import TechPages from "../Tech/Pages";
// import TechFavorite from "../Tech/Favorite";


const axios = require('axios').default;
const moment = require('moment');

class WeatherApp extends React.Component {
  state={
    isData:false,
    days:[],
    today:"",
  }
  componentDidMount(){
    axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247")
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
      <div className="App container pt-3">
        <div className="row">
          <div className="col-8 offset-2">
        {this.state.isData? 
        <>
        <WeatherToday forecast={this.state.today}/>
        <WeatherOther forecast={this.state.days}/>
        {/* <Route render={props => <NavBar/>} /> */}
        {/* <Route path="/"  render = {props => <NavBar items={[{text:"Home",path:"/"},{text:"Forecast",path:"/forecast"},{text:"Youtube",path:"./youtube"},{text:"Cats",path:"/cats"},{text:"Tech",path:"/tech"},{text:"Favorite Tech",path:"/favoritetech"}]}/>}/>
        <Route path="/forecast" render = {props => <WeatherToday forecast={this.state.today}/>}/> 
        <Route path="/forecast"  render = {props => <WeatherOther forecast={this.state.days}/>}/>
        <Route path="/youtube" render = {props => <YoutubeApp/>}/>
        <Route path="/cats" component = {CatsApp} />
        <Route path="/tech" exact component = {TechPages}/>
        <Route path="/tech/:id" component = {TechPage}/>
        <Route path="/favoritetech" component = {TechFavorite}/> */}
        </>
        : 
        <Spinner/>}
      </div>
      </div>
      </div>
    );
  }
}

export default WeatherApp;
