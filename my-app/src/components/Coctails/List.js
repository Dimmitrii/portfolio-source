import React from 'react';
import {connect} from "react-redux";

import {fetchOne,changeCoctail} from "redux/coctails/actions";

function CoctailsList(props) {
    const coctails = props.coctails.map(item=>{
        return(
            <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center" id={item.id}>
                <h6>{item.name}</h6>
                <button id={item.id} type="button" className="btn btn-info">Доп Инфа</button>
            </div>
        )
    })
    return (
        <div style={{width:"500px",float:"left"}}  onClick={(e)=>{props.fetchOne(e.target.id);props.changeCoctail(e.target.id)}}>
            {coctails}
        </div>
    )
}

// const mapStateToProps = (state)=>{
//     return{
//         coctails:state.coctails.coctails,
//     }
// }

const actions = {fetchOne,changeCoctail}

export default connect(null,actions)(CoctailsList);

