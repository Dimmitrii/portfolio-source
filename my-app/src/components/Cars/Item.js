import React,{useState} from 'react';

export default function Carsitem(props) {

  const [activeUrl,setActiveUrl] = useState(props.url);

  return (
      <div  style={{width:"800px",height:"310px"}}>
        <div style={{width:"800px",height:"270px"}}>
          <div style={{height:"60px"}}>
            <h5 style={{float:"left",width:"500px"}}>{props.title}</h5>
            <p style={{float:"right",margin:"0 20px 0 0"}}>{props.price}BYN</p>
            <p style={{float:"right",margin:"0 20px 0 0"}}>{props.year}год</p>
            <p style={{float:"right",margin:"0 20px 0 0"}}>{props.odometrValue}КМ</p>
          </div>
          <div style={{float:"left"}}>
            <img src={`${activeUrl}`} width="200px" height="150px" alt=""/>
            <div onClick={(e)=>{setActiveUrl(e.target.src)}}>
              <img src={`${props.url}`} width="66.3px" height="50px" alt="" style={activeUrl===props.url?{opacity:0.5}:null} />
              <img src={`${props.url1}`} width="66.3px" height="50px" alt="" style={activeUrl===props.url1?{opacity:0.5}:null}/>
              <img src={`${props.url2}`} width="66.3px" height="50px" alt="" style={activeUrl===props.url2?{opacity:0.5}:null} />
            </div>
          </div>
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
        <button className="btn btn-primary">Подробне</button>
      </div>
  )
}
