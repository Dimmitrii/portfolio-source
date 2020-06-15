import React,{useState} from 'react';
import {connect} from "react-redux";

import {fetchAll} from "redux/coctails/actions"; 

//почему не работает?
// import {actions} from "../../redux/coctails/action";

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

const style = {fontSize:"26px",width:"45px",float:"left",textAlign:"center",cursor:"pointer"};

function CoctailsAlphabet(props){ 
    const [activeLetter,setActiveLetter] = useState();

    const items = alphabet.map((item,index)=>{
        return(
            <div key={index} style={activeLetter===item.toLowerCase() ? {backgroundColor:"#17a2b8",...style} : style}>{item.toLowerCase()}</div>
        )
    })
    return (
        <div style={{margin:"0 auto",width:"1200px"} } onClick={(e)=>{props.fetchAll(e.target.textContent);setActiveLetter(e.target.textContent)}}>
            {items}
        </div>
    )
}

const actions = {fetchAll}

export default connect(null,actions)(CoctailsAlphabet); 