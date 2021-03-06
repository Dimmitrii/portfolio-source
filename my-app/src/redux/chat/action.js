let webSocket;

const reloadWebsocket = (dispatch)=>{
    // console.log(dispatch)
    webSocket = new WebSocket("wss://hidden-brushlands-96911.herokuapp.com");
    webSocket.addEventListener("message",(message)=>{
        console.log("ff");
        console.log(JSON.parse(message.data));
        dispatch(JSON.parse(message.data));
    });
    console.log(webSocket);
    webSocket.addEventListener("close",()=>{
        reloadWebsocket(dispatch);
    });
}
// setInterval(()=>{
//     console.log(webSocket);
// },1000)
// const dispatchMessage = (dispatch)=>{
//     webSocket.addEventListener("message",(message)=>{
//         console.log(JSON.parse(message.data));
//         dispatch(JSON.parse(message.data));
//     });
// }

const load = (dispatch,isLoaded)=>{
    webSocket.send(JSON.stringify({type:"GET_MESSAGES"}));
    webSocket.send(JSON.stringify({type:"GET_USERS"}));
    dispatch({type:actions.loadingChat,payload:isLoaded});
}

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
    // webSocket = new WebSocket("wss://hidden-brushlands-96911.herokuapp.com");
    reloadWebsocket(dispatch);
    if(webSocket.readyState === 1){
        console.log("load instantly");
        load(dispatch,isLoaded);
    }else if(webSocket.readyState === 0){
        console.log("load with delay");
        webSocket.addEventListener("open",()=>{
            load(dispatch,isLoaded);
        });
    }
}

export const addMessage = (userName,text) => async()=>{
    webSocket.send(JSON.stringify({type:"ADD_MESSAGE",payload:{ userName, text }}));
}

export const deleteMessage = (userName,id) => async()=>{
    webSocket.send(JSON.stringify({type:"DELETE_MESSAGE",payload:{ userName ,id }}));
}

export const updateMessage = (id, text, userName) => async()=>{
    webSocket.send(JSON.stringify({type:"UPDATE_MESSAGE",payload:{ id, userName, updText:text }})) 
}

export const addUser = (userName) => async(dispatch)=>{
    console.log(webSocket);
    if(webSocket.readyState === 1){
        webSocket.send(JSON.stringify({type:"ADD_USER",payload:{userName}}))
        dispatch({type:actions.initialUser,payload:userName})
    }
    if(webSocket.readyState === 0){
        webSocket.addEventListener("open",()=>{
            webSocket.send(JSON.stringify({type:"ADD_USER",payload:{userName}}))
            dispatch({type:actions.initialUser,payload:userName})
        });
    }
}

