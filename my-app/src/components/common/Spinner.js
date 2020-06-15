import React from "react";

const Spinner = ()=>{
    return(
        <div style={{margin:"0 auto",width:"42px",height:"42px"}}>
            <div style={{position: "absolute",top: "50%"}}>
                <div className="spinner-border " role="status"></div>
            </div>
        </div>
    );
}

export default Spinner;