import axios from "axios";

const carsURL = "https://serene-mesa-35124.herokuapp.com/api/cars";
const dictURL = "https://serene-mesa-35124.herokuapp.com/api/cars/dict";

export const actions = {
    fetchCars: "FETCH_CARS",
    fetchDict: "FETCH_DICT",
    onChange: "ON_CHANGE",
    onChangeChBx:"ON_CHANHE_CHECK_BOX",
}

export const fetchCars = () => async (dispatch)=>{
    try{
        const { data } = await axios(carsURL);
        console.log(data);
        dispatch({ type: actions.fetchCars, payload: data});
    }
    catch(error){
        console.log(error);
    }
}

export const fetchDict = () => async (dispatch)=>{
    try{
        const {data} = await axios(dictURL);
        dispatch({ type: actions.fetchDict, payload: data })
    }
    catch(error){
        console.log(error);
    }
}

export const onChange = (e) => ({ type: actions.onChange, payload: e.target });

export const onChangeCheckBox = (e) => ({ type: actions.onChangeChBx, payload: e.target })

