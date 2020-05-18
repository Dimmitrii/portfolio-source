import axios from "axios";

import coctailIngridients from "../../utils/coctailsIngidients";

const coctailsURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const coctailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const translateURL = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191101T200328Z.8d2b79e4806fbe46.18ba90eb15c52539aa3cf485e08fffabcd60629f&text=";

export const actions = {
    fetchAll:"FETCH_COCTAILS",
    fetchOne:"FETCH_ONE_COCTAIL",
    translate:"TRANSLATE",
    changeCoctail:"CHANGE_COCTAIL",
}

export const fetchAll = (letter)=> async (dispatch)=>{
    try{
        const {data} = await axios(`${coctailsURL}${letter}`);
        console.log(data);
        const coctails = data.drinks.map((item)=>{
            return { id:item.idDrink, name:item.strDrink}
        });
        dispatch({ type: actions.fetchAll, payload: coctails });
    }
    catch(error){
        console.log(error)
    }
}

export const fetchOne = (id)=> async (dispatch)=>{
    try{
        const { data } = await axios(`${coctailURL}${id}`);
        console.log(data);
        const drink = data.drinks[0];
        const ingridients = coctailIngridients(drink);
        const coctail = {ingridients,photo:drink.strDrinkThumb,description:drink.strInstructions,name:drink.strDrink,id:drink.idDrink};
        dispatch({type:actions.fetchOne,payload:coctail});
        console.log(coctail);
    }
    catch(error){
        console.log(error);
    }
}

export const translate = (text)=> async(dispatch)=>{
    try{
        const {data} = await axios(`${translateURL}${text}&lang=en-ru&format=plain`);
        console.log(data);
        dispatch({type:actions.translate,payload:data.text});
    }
    catch(error){
        console.log(error);
    }
}

export const changeCoctail = (id)=> ({type:actions.changeCoctail,payload:id});
