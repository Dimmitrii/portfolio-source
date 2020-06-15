import {actions} from "./action";

console.log(actions);

const initialState = {
    users:[],
    messages:[],
    isLoadedChat:false,
    user: "",
}

// setInterval(()=>{
//     console.log(initialState.isLoadedChat);
// },1000)

export const chatReducer = (state = initialState, action)=>{
    switch(action.type){
        case actions.loadingChat:
            console.log(44);
            return{
                ...state,
                isLoadedChat:action.payload,
            }
        case actions.receiveMessages:
            console.log(action.payload);
            return{
                ...state,
                messages: action.payload.messages,
            }
        case actions.receiveUsers:
            return{
                ...state,
                users: action.payload.users,
            }
        case actions.initialUser:
            return{
                ...state,
                user:action.payload,
            }

        case actions.addUser:
            // console.log(action.payload);
            return{
                ...state,
                users: [...state.users, action.payload.userName],
                // user: action.payload.userName,
            }

        case actions.addedMessage:
            console.log(action.payload);
            return{
                ...state,
                messages: [...state.messages ,action.payload],
            }
        case actions.deletedMessage:
            // console.log(action.payload);
            // console.log(action.payload.id);
            // console.log(state.tasks.filter(item => item.id !== action.payload.id));
            return{
                ...state,
                messages: state.messages.filter(msg => msg.id !== action.payload.id),
            }
        case actions.updatedMessage:
            const updatedMessages = state.messages.map(msg=>{
                if(msg.id === action.payload.id){
                    return action.payload
                }
                return msg;
            })
            return{
                ...state,
                messages: updatedMessages,
            }
        default:
            return state;
    }
}