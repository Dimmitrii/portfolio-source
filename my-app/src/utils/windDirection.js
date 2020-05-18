const windDiretion = (degrees)=>{
    console.log(degrees);
    if(degrees > 337 || degrees < 22){
        return "North"
    }
    else if(degrees > 22 && degrees < 67){
        return "North-East"
    }
    else if(degrees > 67 && degrees < 112){
        return "East"
    }
    else if(degrees > 112 && degrees < 157){
        return "South-East"
    }
    else if(degrees > 157 && degrees < 202){
        return "South"
    }
    else if(degrees > 202 && degrees < 247){
        return "South-West"
    }
    else if(degrees > 247 && degrees < 292){
        return "North"
    }
    else if(degrees > 292 && degrees < 337){
        return "North-West"
    }
    
}

// console.log(windDiretion(25));
export default windDiretion;