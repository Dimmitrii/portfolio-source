const webSocket = new WebSocket("wss://hidden-brushlands-96911.herokuapp.com");

// setInterval(()=>{
//     console.log(webSocket.readyState);
// },1000)

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
    if(webSocket.readyState === 1){
        webSocket.addEventListener("message",(message)=>{
            // console.log(JSON.parse(message.data));
            dispatch(JSON.parse(message.data));
        });
        webSocket.send(JSON.stringify({type:"GET_MESSAGES"}));
        webSocket.send(JSON.stringify({type:"GET_USERS"}));
        dispatch({type:actions.loadingChat,payload:isLoaded});
        // костыль изз-за того что я не знаб как бороться с тем что хероку убивает сокет через 55 секунд
        setInterval(()=>{
            webSocket.send(JSON.stringify({}))
        },50000)
    }else if(webSocket.readyState === 0){
        webSocket.addEventListener("opne",()=>{
            webSocket.addEventListener("message",(message)=>{
                // console.log(JSON.parse(message.data));
                dispatch(JSON.parse(message.data));
            });
            webSocket.send(JSON.stringify({type:"GET_MESSAGES"}));
            webSocket.send(JSON.stringify({type:"GET_USERS"}));
            dispatch({type:actions.loadingChat,payload:isLoaded});
            // костыль изз-за того что я не знаб как бороться с тем что хероку убивает сокет через 55 секунд 
            setInterval(()=>{
                webSocket.send(JSON.stringify({}))
            },50000)
        });
    }
}

// export const getTasks = () => (dispatch)=>{
    
// }

// export const getTasks = () => ()=>{
//    webSocket.onopen = ()=> {webSocket.send(JSON.stringify({type:"GET_TASKS"}))}
// }

export const addMessage = (userName,text) => async()=>{
    // console.log(text);
    webSocket.send(JSON.stringify({type:"ADD_MESSAGE",payload:{ userName, text }}));
}

export const deleteMessage = (userName,id) => async()=>{
    webSocket.send(JSON.stringify({type:"DELETE_MESSAGE",payload:{ userName ,id }}));
}

export const updateMessage = (id, text, userName) => async()=>{
    webSocket.send(JSON.stringify({type:"UPDATE_MESSAGE",payload:{ id, userName, updText:text }})) 
}

export const addUser = (userName) => async(dispatch)=>{
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
    // dispatch.add
}


