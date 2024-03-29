import React from "react";
import { Route, Switch } from "react-router-dom";

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
import VideoPage from "./webCam";


const App = () => {
    return(
        <>
        <ClickCounter/>  
        <Route path="/"  render = {props => <NavBar {...props}
        items={[{text:"Forecast",path:"/forecast"},{text:"Tech",path:"/tech"},{text:"Favorite Tech",path:"/favoritetech"},{text:"memes",path:"/memes"},
        {text:"post",path:"/posts"},{text:"Coctails",path:"/coctails"},{text:"Cars",path:"/cars"},{text:"CHAT",path:"/chat"}]}/>}/>
        <Route path="/" render ={() => <div style={{maxWidth:"1356px",margin:"0 auto",fontSize:"24px"}}>
            Hello World! Welcome on my Page! There you can find little pet projects, have a good look!:)
            To checkout Post need ask permission <a href="https://cors-anywhere.herokuapp.com/corsdemo">here</a>
        </div>} exact/>
        <PrivateRoute path="/forecast"  component = {WeatherApp}/>
        <PrivateRoute path="/cats" component = {CatsApp} />
        <PrivateRoute path="/tech" exact component = {TechPages}/>
        <PrivateRoute path="/tech/:id" component = {TechPage}/>
        <PrivateRoute path="/favoritetech" component = {TechFavorite}/>
        <PrivateRoute path="/memes" component={MemApp} />
        <PrivateRoute path="/cars" component={CarsListPage} />
        <Route path="/login" component={LoginPage} />
        {/*comment posts becuse api doesnt respone but i didnt touched code for your code review*/}
        <Switch>
            <PrivateRoute path="/posts/:id" component={PostSinglePage} />
            <PrivateRoute path="/posts" component = {PostListPage} />
        </Switch>
        <PrivateRoute path="/coctails" component={CoctailsPage}/>
        <PrivateRoute path="/chat" component={Chat}/>
        {/* <VideoPage/> */}
        </>
    );
}

export default App;