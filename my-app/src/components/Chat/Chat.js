import React,{ useState, useEffect, useRef } from 'react';
import { connect } from "react-redux";

import { loadingChat, addUser } from "redux/chat/action";

import ChatWindow from "./ChatWindow";

document.body.style.backgroundColor="#edeef0";

function Chat(props) {
    const [user,setUser] = useState("");
    
    const inputRef = useRef();

    useEffect(()=>{
        console.log(props.isLoaded);
        if(!props.isLoaded){
            inputRef.current.focus();
        }
    },[]);

    const addUserOnEnter = (e)=>{
        if(e.keyCode === 13){
            addUser();
        }
    }

    const addUser = ()=>{
        props.loadingChat(true)
        console.log(user);
        props.addUser(user);
        setUser("");
    }
    return (
        <div style={{width:"730px",margin:"0 auto"}}>
            {props.isLoaded?
            <ChatWindow/>
            :
            <>
            <input ref={inputRef} onKeyDown={addUserOnEnter} style={{width:"500px",float:"left"}} type="text" className="form-control" placeholder="" value={user} onChange={(e)=>{setUser(e.target.value)}}/>
            <button className="btn btn-success" onClick = {()=>{addUser()}}>Write yor nickname for chat</button>
            </>}
        </div>
    )
}

const actions = { loadingChat, addUser }

const mapStateToProps = (state)=>{
    return{
        isLoaded: state.chat.isLoadedChat,
    }
}

export default connect(mapStateToProps,actions)(Chat);

