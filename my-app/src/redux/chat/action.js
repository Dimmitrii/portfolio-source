const webSocket = new WebSocket("wss://hidden-brushlands-96911.herokuapp.com");

export const actions = {
    loadingChat:"LOADING",
    receiveMessages:"RECEIVE_MESSAGES",
    receiveUsers:"RECEIVE_USERS",
    addedMessage:"MESSAGE_ADDED",
    deletedMessage:"MESSAGE_DELETED",
    updatedMessage:"MESSAGE_UPDATED",
    addUser:"USER_ADDED",
    initialUser:"INITIAL_USER",
}

export const loadingChat = (isLoaded) => async (dispatch)=>{
    console.log(555);
    webSocket.addEventListener("message",(message)=>{
        // console.log(message);
        console.log(JSON.parse(message.data));
        dispatch(JSON.parse(message.data));
    });
    // webSocket.addEventListener("open",()=>{
        // console.log("доходит")
        webSocket.send(JSON.stringify({type:"GET_MESSAGES"}));
        webSocket.send(JSON.stringify({type:"GET_USERS"}));
    // },{once:true});
    dispatch({type:actions.loadingChat,payload:isLoaded});
}

// export const getTasks = () => (dispatch)=>{
    
// }

// export const getTasks = () => ()=>{
//    webSocket.onopen = ()=> {webSocket.send(JSON.stringify({type:"GET_TASKS"}))}
// }

export const addMessage = (userName,text) => async()=>{
    console.log(text);
    webSocket.send(JSON.stringify({type:"ADD_MESSAGE",payload:{ userName, text }}));
}

export const deleteMessage = (userName,id) => async()=>{
    webSocket.send(JSON.stringify({type:"DELETE_MESSAGE",payload:{ userName ,id }}));
}

export const updateMessage = (id, text, userName) => async()=>{
    // console.log(text);
    // console.log(isDone);
    // console.log(!!isDone===false)
    webSocket.send(JSON.stringify({type:"UPDATE_MESSAGE",payload:{ id, userName, updText:text }})) 
}

export const addUser = (userName) => async(dispatch)=>{
    webSocket.send(JSON.stringify({type:"ADD_USER",payload:{userName}}))
    dispatch({type:actions.initialUser,payload:userName})
    // dispatch.add
}


