const shortDescription = (str)=>{
    if(str.length>70){
        return str.slice(0,71) + "...";
    }
    return str;
}

export default shortDescription;