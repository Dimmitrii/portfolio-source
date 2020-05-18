const coctailIngridients = (obj)=>{
    const ingridients = [];
    for(let i = 0;i<16;i++){
        if(!!obj[`strIngredient${i}`]){
            const ingridient = obj[`strIngredient${i}`];
            const measure = obj[`strMeasure${i}`];
            ingridients.push({ingridient,measure})
        }
    }
    return ingridients;
}

export default coctailIngridients;