import React,{useState} from 'react';
import spacesForBigNumbers from "utils/spacesForBigNumbers";

export default function Carsitem(props) {

  const [activeUrl,setActiveUrl] = useState(props.url);

  return (
      <div  style={{width:"1000px",height:"270px",margin:"20px 0 40px 0"}}>
        <p style={{float:"right",margin:"0 20px 0 0"}}>{spacesForBigNumbers(props.price)}USD</p>
        <p style={{float:"right",margin:"0 20px 0 0"}}>{props.year}year</p>
        <p style={{float:"right",margin:"0 20px 0 0"}}>{spacesForBigNumbers(`${props.odometrValue}`)}KM</p>
        <div style={{float:"left"}}>
          <img src={`${activeUrl}`} width="300px" height="200px" alt=""/>
          <div onClick={(e)=>{setActiveUrl(e.target.src)}}>
            <img src={`${props.url}`} width="100px" height="70px" alt="" style={activeUrl===props.url?{opacity:0.5}:null} />
            <img src={`${props.url1}`} width="100px" height="70px" alt="" style={activeUrl===props.url1?{opacity:0.5}:null}/>
            <img src={`${props.url2}`} width="100px" height="70px" alt="" style={activeUrl===props.url2?{opacity:0.5}:null} />
          </div>
        </div>
        <div style={{float:"left"}}>
          <h5 style={{width:"360px",margin:"0 0 20px 40px"}}>{props.title}</h5>
          <ul style={{listStyle:"none",float:"left"}}>
            <li>{props.engineCapacity}</li>
            <li>{props.transmission}</li>
            <li>{props.bodyType}</li>
          </ul>
          <ul style={{listStyle:"none",float:"left"}}>
            <li>{!!props.enginePower?props.enginePower.value:null}</li>
            <li>{props.drivetrain}</li>
            <li>{props.color}</li>
          </ul>
        </div>
      </div>
  )
}
