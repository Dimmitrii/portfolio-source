import React,{useEffect} from 'react';
import {connect} from "react-redux";

import {fetchCars,fetchDict} from "redux/cars/action";

import CarsList from "./List";
import CarsSettings from "./Settings";
import Spinner from "../common/Spinner";

function CarslistPage(props) {

    useEffect(()=>{
        if(props.isLoaded === false){
            props.fetchCars();
            props.fetchDict();
        }
    },[props])

    return (
        <>
        {props.isLoaded?
        <div style={{width:"1356px",margin:"0 auto"}}>
            <CarsList/>
            <CarsSettings/>
        </div>
        :
        <Spinner/>}
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        isLoaded: state.cars.isLoaded,
    }
}

const actions = { fetchCars, fetchDict };

export default connect(mapStateToProps,actions)(CarslistPage);