import React from 'react';
import {connect} from "react-redux";

import {translate} from "redux/coctails/actions";
// import axios from 'axios';

// const translateURL = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191101T200328Z.8d2b79e4806fbe46.18ba90eb15c52539aa3cf485e08fffabcd60629f&text=";

const SelectedCoctail = (props)=>{
    return (
        <>
            {!!props.coctail?
            <div className="float-right">
                <div className="card">
                <img style={{width:"700px",height:"700px"}} src={props.coctail.photo} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <p>{props.coctail.name}</p>
                        {props.coctail.ingridients.map((item,index)=><p key={index}>{item.ingridient}{item.measure}</p>)}
                        <p className="card-text">{props.isEnglish?props.coctail.description:props.russianDescription}</p>
                    </div>
                    <div>
                    <button type="button" className="btn btn-info" onClick={()=>{props.translate(props.coctail.description)}}>{props.isEnglish?"Перевести на русский":"Перевести на английский"}</button>
                    </div>
                </div>
            </div> 
            :false
            }
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        coctail:state.coctails.coctail,
        russianDescription:state.coctails.ruDescription,
        isEnglish:state.coctails.isEnglish,
    }
}

const actions = {translate}

export default connect(mapStateToProps,actions)(SelectedCoctail);