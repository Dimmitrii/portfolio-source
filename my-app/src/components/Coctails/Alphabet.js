import React from 'react';
import {connect} from "react-redux";

import {fetchAll} from "redux/coctails/actions"; 

//почему не работает?
// import {actions} from "../../redux/coctails/action";

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"];

function CoctailsAlphabet(props) {
    const items = alphabet.map((item,index)=>{
        return(
            <span key={index} style={{fontSize:"26px",margin:"0px 15px 0px 15px"}}>{item.toLowerCase()}</span>
        )
    })
    return (
        <div style={{margin:"0 auto",width:"1200px"} } onClick={(e)=>{props.fetchAll(e.target.textContent)}}>
            {items}
        </div>
    )
}

const actions = {fetchAll}

export default connect(null,actions)(CoctailsAlphabet); 