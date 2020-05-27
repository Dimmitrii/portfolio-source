import React,{useState,useEffect} from 'react';

const websocket = new WebSocket("ws://localhost:3002");

function Chat() {
    const [messages,setMesages] = useState([]);
    const [message,setMesage] = useState([]);
    // useEffect(()=>{
    //     websocket.addEventListener("message",(message)=>{
    //     console.log(message.data);
    //     setMesages(messages=> [...messages,message.data] ); 
    // })},[]);
    websocket.onmessage = (message)=>{
        console.log(message.data)
    }
    const onClick = ()=>{
        websocket.send(JSON.stringify({type:"UPDATE_TASK",payload:{id:61270913,isDone:true,text:message}}));
        websocket.send(JSON.stringify({type:"GET_TASKS"}));
        // websocket.send(JSON.stringify({type:"DELETE_TASK",payload:{id:21692819}}));
    }
    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {/* {console.log(messages)} */}
                {messages.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
            <input onChange={(e)=>{setMesage(e.target.value)}}/>
            <button onClick={onClick}>Отправить</button>
        </div>
    )
}

export default Chat;
