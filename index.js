function distanceFromHqInBlocks(someValue){
    const hqBlock = 42;
    if (someValue > 42){
      let distanceFromHqInBlocks = someValue - hqBlock;
      return distanceFromHqInBlocks;
    }else{
      let distanceFromHqInBlocks = hqBlock -someValue;
      return distanceFromHqInBlocks;
    }
  }
  
  function distanceFromHqInFeet(value){
    let distanceFromHqInFeet = distanceFromHqInBlocks(value) * 264;
    return distanceFromHqInFeet ;
  }
 
  function distanceTravelledInFeet(start, destination){
    if (start > 42){
      let distanceTravelledInFeet = (destination - start) * 264;
      return distanceTravelledInFeet;
    } else {
      let distanceTravelledInFeet = (start - destination) * 264;
      return distanceTravelledInFeet;
    }
  }
  
  function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start , destination);
    if (distance <= 400) {
      return 0;
    } 
    else if(distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } 
    else if(distance > 2000 && distance <= 2500) {
      return 25;
    } 
    else {
      return 'cannot travel that far' ;
    }
  }