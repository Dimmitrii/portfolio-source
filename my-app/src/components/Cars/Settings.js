import React from 'react'
import {connect} from "react-redux";

import {onChange,onChangeCheckBox} from "redux/cars/action";

function CarsSettings(props) {
    console.log(props);
    return (
        <div style={{ float:"left", width:"260px" }}>
            {props.dict? 
            <>
                <h6 style={{ margin:"20px 0 10px 0" }}>State of car</h6>
                <select defaultValue="Любое"  onChange={props.onChange} title="state" style={{ width:"260px", height:"30px" }}>
                    <option value="">Any</option>
                    {props.dict.state.map(item=><option key={item.id} value={item.id}>{item.id}</option>)}
                </select>

                <br/>

                <h6 style={{ margin:"20px 0 10px 0" }}>Price</h6>
                <input title="costFrom" placeholder="от" onChange={props.onChange} style={{ width:"126px", height:"30px" }}/>
                <input title="costTo" placeholder="до" onChange={props.onChange} style={{ width:"126px", height:"30px" }}/>

                <h6 style={{ margin:"20px 0 10px 0" }}>Car label</h6>
                <select defaultValue="Любая" title="manufacturer" onChange={props.onChange} style={{ width:"260px", height:"30px" }}>
                    <option value="">Any</option>
                    {props.dict.manufacturer.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}
                </select>

                <h6 style={{ margin:"20px 0 10px 0" }}>Body type</h6>
                <select defaultValue="Любой" title="bodyType" onChange={props.onChange} style={{ width:"260px", height:"30px" }}>
                    <option value="">Any</option>
                    {props.dict.body_type.map(item=><option key={item.id} value={item.id}>{item.id}</option>)}
                </select>

                <h6 style={{ margin:"20px 0 10px 0" }}>Transmission</h6>
                {props.dict.transmission.map(item=>{
                return(
                    <div key={item.id}>
                        <label><input style={{verticalAlign:"middle",width:"15px",height:"15px"}}
                        type="checkbox" title={item.id} onChange={props.onChangeCheckBox}/> {item.id}</label>
                    </div>)
                })}

                <h6 style={{ margin:"20px 0 10px 0" }}>Drivetrain</h6>
                {props.dict.drivetrain.map(item=>{
                return(
                    <div key={item.id}>
                        <label><input style={{verticalAlign:"middle",width:"15px",height:"15px"}}
                        type="checkbox" title={item.id} onChange={props.onChangeCheckBox}/> {item.id}</label>
                    </div>)
                })}

                <h6 style={{ margin:"20px 0 10px 0" }}>Odometer</h6>
                <input title="odometerValueFrom" placeholder="от" onChange={props.onChange} style={{ width:"126px", height:"30px" }}/>
                <input title="odometerValueTo" placeholder="до" onChange={props.onChange} style={{ width:"126px", height:"30px" }}/>
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