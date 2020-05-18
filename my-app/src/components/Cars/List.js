import React from 'react';
import {connect} from "react-redux";

import {fetchCars,fetchDict} from "redux/cars/action";
import filterCars from "./filterCars";

import CarsItem from "./Item";

function CarsList(props) {
    return (
        <div className="float-right">
                {props.cars.map(item=>{
                    return (
                    <CarsItem key={item.id} title={item.title} bodyType={item.specs.body_type} year={item.specs.year} transmission={item.specs.transmission} color={item.specs.color} 
                    odometrValue={item.specs.odometer.value} engineCapacity={item.specs.engine.capacity} enginePower={item.specs.engine.power} drivetrain={item.specs.drivetrain}
                    url={item.images[0]} url1={item.images[1]} url2={item.images[2]} price={item.price.converted.BYN.amount}/>)
                })}
        </div>
    )
}

const mapStateToProps = (store)=>{
    const {state,costFrom,costTo,manufacturer,bodyType,front,rear,automatic,mechanical,all,odometerValueFrom,odometerValueTo} = store.cars;
    return{
        cars: filterCars(store.cars.cars,state,costFrom,costTo,manufacturer,bodyType,front,rear,automatic,mechanical,all,odometerValueFrom,odometerValueTo),
        dict: store.cars.dict,
    }
}

const actions = { fetchCars, fetchDict };

export default  connect(mapStateToProps,actions)(CarsList);