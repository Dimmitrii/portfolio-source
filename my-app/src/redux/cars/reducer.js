import {actions} from "./action";

const initialState = {
    cars:[],
    dict:"",
    isLoaded:false,
    state:"",
    costFrom:"",
    costTo:"",
    manufacturer:"",
    bodyType:"",
    front:false,
    rear:false,
    automatic:false,
    mechanical:false,
    all:false,
    odometerValueFrom:"",
    odometerValueTo:"",
}

export const carsReducer = (state = initialState, action)=>{
    switch(action.type){
        case actions.fetchCars:
            return{
                ...state,
                cars: action.payload,
                isLoaded: true,
            }
        
        case actions.fetchDict:
            return{
                ...state,
                dict:action.payload
            }

        case actions.onChange:
            return{
                ...state,
                [action.payload.title]:action.payload.value,
            }

        case actions.onChangeChBx:
            return{
                ...state,
                [action.payload.title]:action.payload.checked,
            }

        default:
            return state;
    }
}