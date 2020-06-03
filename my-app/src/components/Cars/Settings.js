import React from 'react'
import {connect} from "react-redux";

import {onChange,onChangeCheckBox} from "redux/cars/action";

function CarsSettings(props) {
    console.log(props);
    return (
        <div className="float-left">
            {props.dict? 
            <>
               <p>Состояние автомобиля</p>
               <select defaultValue="Любое"  onChange={props.onChange} title="state">
                    <option value="">Любое</option>
                    {props.dict.state.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}
                </select>

                <br/>

                <p>Цена</p>
                <input title="costFrom" placeholder="от" onChange={props.onChange}/><input title="costTo" placeholder="до" onChange={props.onChange}/>

                <p>Марка автомобиля</p>
                <select defaultValue="Любая" title="manufacturer" onChange={props.onChange}>
                    <option value="">Любая</option>
                    {props.dict.manufacturer.map(item=><option key={item.id} value={item.name}>{item.name}</option>)}
                </select>

                <p>Тип кузова</p>
                <select defaultValue="Любой" title="bodyType" onChange={props.onChange}>
                    <option value="">Любой</option>

                    {props.dict.body_type.map(item=>{
                        return(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })}

                </select>

                <p>Коробка Передач</p>
                {props.dict.transmission.map(item=>{
                    console.log(item);
                    return(
                        <p key={item.id}><label>{item.name}<input type="checkbox"  title={item.id} onChange={props.onChangeCheckBox}/></label></p>
                    )
                })}

                <p>Привод</p>
                {props.dict.drivetrain.map(item=>{
                    console.log(item);
                    return(
                        <p key={item.id}><label>{item.name}<input type="checkbox" title={item.id} onChange={props.onChangeCheckBox}/></label></p>
                    )
                })}

                <p>Пробег</p>
                <input title="odometerValueFrom" placeholder="от" onChange={props.onChange}/><input title="odometerValueTo" placeholder="до" onChange={props.onChange}/>
            </>
            : null}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        dict: state.cars.dict,
    }
}

const actions = {onChange,onChangeCheckBox};

export default connect(mapStateToProps,actions)(CarsSettings);