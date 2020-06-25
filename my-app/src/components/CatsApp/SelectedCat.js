import React from "react";

const SelectedCat = (props)=>{
    return(
        <>
        {props.selectedCat? 
        <div className="float-right" style={{margin:"25px 0 0 0"}}>
            <div className="card">
            <img src={`https://serene-mesa-35124.herokuapp.com/files/${props.selectedCat.pic}`} className="card-img-top" alt=""/>
                <div className="card-body">
                    <p className="card-text">{props.selectedCat.bio}</p>
                </div>
            </div>
        </div> 
        : false}
        </>
    );
}

export default SelectedCat;