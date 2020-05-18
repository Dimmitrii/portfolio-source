const filterCars = (cars,state,costFrom,costTo,manufacturer,bodyType,front,rear,automatic,mechanical,all,odometerValueFrom,odometerValueTo)=>{
    if(!!state === true){
        cars = cars.filter(item=>item.specs.state === state);
    }
    if(!!costFrom === true){
        cars = cars.filter(item=> item.price.converted.BYN.amount > +costFrom)
    }
    if(!!costTo === true){
        cars = cars.filter(item=> item.price.converted.BYN.amount < +costTo)
    }
    if(!!manufacturer === true){
        cars = cars.filter(item=> item.manufacturer.name === manufacturer)
    }
    if(!!bodyType === true){
        cars = cars.filter(item=> item.specs.body_type === bodyType);
    }
    if(front === true){
        cars = cars.filter(item=> item.specs.drivetrain === "front");
    }
    if(rear === true){
        cars = cars.filter(item=> item.specs.drivetrain === "rear");
    }
    if(automatic === true){
        cars = cars.filter(item=> item.specs.transmission === "automatic");
    }
    if(mechanical === true){
        cars = cars.filter(item=> item.specs.transmission === "mechanical");
    }
    if(all === true){
        cars = cars.filter(item=> item.specs.drivetrain === "all");
    }
    if(!!odometerValueFrom === true){
        cars = cars.filter(item=> item.specs.odometer.value > +odometerValueFrom)
    }
    if(!!odometerValueTo === true){
        cars = cars.filter(item=> item.specs.odometer.value < +odometerValueTo)
    }
    
    return cars;
}

export default filterCars;