import React,{useState} from 'react';

const websocket = new WebSocket("ws://localhost:3002");

function Chat() {
    const [messages,setMesages] = useState([]);
    websocket.addEventListener("message",(message)=>{
        console.log(message);
        const updatedMessages = [...messages,message.data];
        setMesages(updatedMessages); 
    });
    const [message,setMesage] = useState([]);
    const onClick = (e)=>{
        websocket.send(JSON.stringify(message));
    }
    return (
        <div>
            <ul>
                {messages.map(item=><li>{item}</li>)}
            </ul>
            <input onChange={(e)=>{setMesage(e.target.value)}}/>
            <button onClick={onClick}>Отправить</button>
        </div>
    )
}

export default Chat;
