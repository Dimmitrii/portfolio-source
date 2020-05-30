// import React,{useState,useRef,useEffect} from 'react';
// import { connect } from "react-redux";

// import { addMessage, deleteMessage, updateMessage } from "redux/chat/action";

// function ChatWindow(props) {
//     const [message,setMesage] = useState("");
//     const [isShowingUsers,setIsShowingUsers] = useState(false);
//     const [changingMsgId,setChangingMsgId] = useState("");
//     const [changingMsg,setChangingMsg] = useState("");

//     const containerRef = useRef();
//     const textAreaRef = useRef();

//     useEffect(()=>{
//         textAreaRef.current.focus();
//     },[]);

//     useEffect(()=>{
//         console.log(2);
//         console.log(containerRef.current.scrollHeight);
//         setTimeout(()=>{
//             containerRef.current.scrollTo(0,containerRef.current.scrollHeight)
//         },0)
//     },[props.messages.length]);

//     const addMessage = (userName,text)=>{
//         if(text.trim() !== ""){
//             props.addMessage(userName,text);
//             setMesage("");
//         }
//     }
    
//     const addMessageOnEnter = (e)=>{
//         if(e.keyCode === 13){
//             addMessage(props.user,message);
//         }
//     }

//     const onCloseUsers = (e)=>{
//         console.log(e.target.style.backgroundColor);
//         if(e.target.style.backgroundColor === "rgba(0, 0, 0, 0.3)"){
//             setIsShowingUsers(false);
//         }
//     }

//     const onOpenUsers = ()=>{
//         setIsShowingUsers(true);
//     }

//     const onEdit = (e)=>{
//         setChangingMsgId(e.target.id);
//         console.log(changingMsgId);
//         console.log(e.target.id)
//     }

//     return (
//         <div>
//             {isShowingUsers?<div style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 zIndex: 1050,
//                 display: "block",
//                 width: "100%",
//                 height: "100%",
//                 overflow: "hidden",
//                 outline: 0,
//                 backgroundColor:"rgb(0,0,0,0.3)"
//             }} onClick={onCloseUsers}>
//                 <div style={{width:"500px",margin:"0 auto",textAlign:"center",backgroundColor:"white"}}>{props.users.map((user,index)=><h4 key={index}>{user}</h4>)}</div>
//             </div>: false}
//             <div style={{textAlign:"center",backgroundColor:"white"}}>
//                 CHAT
//                 <p style={{margin:"0",color:"#939393"}}><a href="#" style={{color:"#939393"}} onClick={onOpenUsers}>{props.users.length} members</a></p>
//                 </div>
//             <hr style={{margin:"0"}}/>
//             <div style={{height:"790px",overflow:"auto",backgroundColor:"white"}} ref={containerRef}>
//                 <ul style={{listStyle:"none"}} onClick={onEdit}>
//                     {props.messages.map((msg)=>{
//                         return(
//                         <li style={{width:"673px",overflowWrap:"anywhere"}} key={msg.id}>
//                             {msg.from===props.user?<span style={{float:"right",cursor:"pointer"}} id={msg.id}>Edit</span>
//                             :false}
//                             <h6>{msg.from}</h6>
//                             <p>{msg.text}</p>
//                             {/* {msg.id === changingMsgId? setChangingMsg(msg.text) :} */}
//                         </li>)
//                     })}
//                 </ul>
//             </div>
//             <textarea ref={textAreaRef} onKeyDown={addMessageOnEnter} style={{width:"668px",float:"left",overflow:"auto",resize: "none"}} value={message} className="form-control" onChange={(e)=>{setMesage(e.target.value)}}/>
//             <button style={{height:"62px"}} className="btn btn-success" onClick={()=>{addMessage(props.user,message)}}>Send</button>
//         </div>
//     )
// }

// const actions = { addMessage, deleteMessage, updateMessage }

// const mapStateToProps = (state)=>{
//     return{
//         messages: state.chat.messages,
//         users: state.chat.users,
//         user: state.chat.user,
//     }
// }

// export default connect(mapStateToProps,actions)(ChatWindow);





import React,{useState,useRef,useEffect} from 'react';
import { connect } from "react-redux";

import { addMessage, deleteMessage, updateMessage } from "redux/chat/action";

function ChatWindow(props) {
    const [message,setMesage] = useState("");
    const [isShowingUsers,setIsShowingUsers] = useState(false);
    const [changingMsgId,setChangingMsgId] = useState("");
    const [changingMsg,setChangingMsg] = useState("");
    const [isUpdating,setIsUpdating] = useState(false);

    const containerRef = useRef();
    const textAreaRef = useRef();

    useEffect(()=>{
        textAreaRef.current.focus();
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    },[]);

    useEffect(()=>{
        console.log(555555555555555555555555555555);
        console.log(containerRef.current.scrollHeight);
        // setTimeout(()=>{
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        // },0)
    },[props.messages.length]);

    const addMessage = (userName,text)=>{
        if(text.trim() !== ""){
            props.addMessage(userName,text);
            setMesage("");
        }
    }
    
    const addMessageOnEnter = (e)=>{
        if(e.keyCode === 13){
            addMessage(props.user,message);
        }
    }

    const onCloseUsers = (e)=>{
        console.log(e.target.style.backgroundColor);
        if(e.target.style.backgroundColor === "rgba(0, 0, 0, 0.3)"){
            setIsShowingUsers(false);
        }
    }

    const onOpenUsers = ()=>{
        setIsShowingUsers(true);
    }

    const onEdit = (id,text)=>{
        console.log(text);
        console.log(id);
        setChangingMsgId(id);
        setChangingMsg(text)
        console.log(text);
        console.log(id);
        setIsUpdating(true);
    }

    const updateMessage = ()=>{
        if(changingMsg !== ""){
            props.updateMessage(changingMsgId,changingMsg,props.user);
            setChangingMsg("");
            setChangingMsgId("");
            setIsUpdating(false);
        }
    }

    const updateMessageOnEnter = (e)=>{
        if(e.keyCode === 13){
            updateMessage();
        }
    }

    return (
        <div>
            {isShowingUsers?<div style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 1050,
                display: "block",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                outline: 0,
                backgroundColor:"rgb(0,0,0,0.3)"
            }} onClick={onCloseUsers}>
                <div style={{width:"500px",margin:"0 auto",textAlign:"center",backgroundColor:"white"}}>{props.users.map((user,index)=><h4 key={index}>{user}</h4>)}</div>
            </div>: false}
            <div style={{textAlign:"center",backgroundColor:"white"}}>
                CHAT
                <p style={{margin:"0",color:"#939393"}}><a href="#" style={{color:"#939393"}} onClick={onOpenUsers}>{props.users.length} members</a></p>
                </div>
            <hr style={{margin:"0"}}/>
            <div style={{height:"790px",overflow:"auto",backgroundColor:"white"}} ref={containerRef}>
                <ul style={{listStyle:"none"}}>
                    {props.messages.map((msg)=>{
                        return(
                        <li style={{width:"673px",overflowWrap:"anywhere"}} key={msg.id}>
                            {msg.from===props.user?
                            <>
                            <p style={{float:"right",cursor:"pointer"}} onClick={()=>{props.deleteMessage(msg.from,msg.id)}}>Del </p>
                            <p style={{float:"right",cursor:"pointer",margin:"0 5px 0 0"}} onClick={()=>{onEdit(msg.id,msg.text)}}>Edit </p>
                            </>
                            :false}
                            <h6>{msg.from}</h6>
                            <p>{msg.text}</p>
                        </li>)
                    })}
                </ul>
            </div>
            <textarea ref={textAreaRef} onKeyDown={isUpdating ? updateMessageOnEnter : addMessageOnEnter} 
            style={{width:"668px",float:"left",overflow:"auto",resize: "none"}} 
            value={isUpdating? changingMsg : message} className="form-control" onChange={(e)=>{isUpdating? setChangingMsg(e.target.value) : setMesage(e.target.value)}}/>
            <button style={{height:"62px"}} className="btn btn-success" onClick={()=>{isUpdating ? updateMessage() : addMessage(props.user,message)}}>{isUpdating ? "Edit" :"Send"}</button>
        </div>
    )
}

const actions = { addMessage, deleteMessage, updateMessage }

const mapStateToProps = (state)=>{
    return{
        messages: state.chat.messages,
        users: state.chat.users,
        user: state.chat.user,
    }
}

export default connect(mapStateToProps,actions)(ChatWindow);

