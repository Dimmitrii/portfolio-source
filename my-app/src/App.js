import React from "react";
import {Route,Switch} from "react-router-dom";
// import {connect} from "react-redux";
// import {fetchCars,fetchDict} from "./redux/cars/action";

import WeatherApp from "./components/WeatherApp/WeatherApp";
import YoutubeApp from "./components/YoutubeApp/YoutubeApp";
import NavBar from "./components/NavBar/NavBar";
import CatsApp from "./components/CatsApp/CatsApp";
import TechPage from "./components/Tech/Page";
import TechPages from "./components/Tech/Pages";
import TechFavorite from "./components/Tech/Favorite";
import PostListPage from "./components/Post/ListPage";
import PostSinglePage from "./components/Post/SinglePage";
import MemApp from "./components/MemApp/App";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import LoginPage from './components/Auth/Login/Page';
import RegisterPage from './components/Auth/Register/Page';
import PrivateRoute from './PrivateRoute';
import CoctailsPage from "./components/Coctails/Page";
import CarsListPage from "./components/Cars/ListPage";
import Chat from "./components/Chat/Chat";


const App = (props) => {
    return(
        <>
        <ClickCounter/>  
        <Route path="/"  render = {props => <NavBar {...props}
        items={[{text:"Forecast",path:"/forecast"},{text:"Youtube",path:"/youtube"},{text:"Cats",path:"/cats"},
        {text:"Tech",path:"/tech"},{text:"Favorite Tech",path:"/favoritetech"},{text:"Posts",path:"/posts"},{text:"memes",path:"/memes"},
        {text:"Coctails",path:"/coctails"},{text:"Cars",path:"/cars"},{text:"CHAT",path:"/chat"},{text:"register",path:"/register"}]}/>}/>
        <PrivateRoute path="/forecast"  component = {WeatherApp}/>
        <PrivateRoute path="/youtube" component = {YoutubeApp}/>
        <PrivateRoute path="/cats" component = {CatsApp} />
        <PrivateRoute path="/tech" exact component = {TechPages}/>
        <PrivateRoute path="/tech/:id" component = {TechPage}/>
        <PrivateRoute path="/favoritetech" component = {TechFavorite}/>
        <PrivateRoute path="/memes" component={MemApp} />
        <PrivateRoute path="/cars" component={CarsListPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        {/*remove posts becuse api doesnt respone but i didnt touched code for your code review*/}
        <Switch>
            <PrivateRoute path="/posts/:id" component={PostSinglePage} />
            <PrivateRoute path="/posts" component = {PostListPage} />
        </Switch>
        <PrivateRoute path="/coctails" component={CoctailsPage}/>
        <PrivateRoute path="/chat" component={Chat}/>
        {/* <CarsListPage/> */}
        {/* <div onClick={()=>{props.fetchCars()}}> Проверить КОКТЕЛИ</div>
        <div onClick={()=>{props.fetchDict()}}> Проверить КОКТЕЛЬ</div> */}
        </>
    );
}

// const mapStateToPProps = (state)=>{
//     return{
//         cars: state.cars.cars,
//         coctail: state.cars.dict,
//     }
// }

// const actions = {fetchCars,fetchDict};

export default App;