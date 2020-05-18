import {actions} from "./actions";

const initialState = {
    coctails:[],
    coctail:"",
    isEnglish:true,
    ruDescription:"",
}

export const coctailsReducer = (state = initialState,action)=>{
    switch(action.type){
        case actions.fetchAll:
            return{
                ...state,
                coctails:action.payload,
            }

        case actions.fetchOne:
            return{
                ...state,
                coctail:action.payload,
            }
        
        case actions.translate:
            return{
                ...state,
                ruDescription:action.payload,
                isEnglish:!state.isEnglish,
            }
        
        case actions.changeCoctail:
            if(action.payload !== state.coctail.id){
                return{
                    ...state,
                    isEnglish:true,
                }
            }
            return state;
        default:
            return state;
    }
}
