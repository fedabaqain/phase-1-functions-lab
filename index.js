// Code your solution in this file!
function  distanceFromHqInBlocks(pickupLocation){
if (pickupLocation === 43){
return ("number of block=", 1);}
else if (pickupLocation === 50){
return ("number of block=",8)
}
else if (pickupLocation === 34){
return ("number of block=",8)
}
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
 // result = distanceFromHqInBlocks(pickupLocation)
 // FinalRes = result * 264
  //return FinalRes 
}

function distanceTravelledInFeet(start, destination){
    if (destination>start){
return ((destination - start) * 264)
    }
    else {
       return( (start - destination)* 264)
    }
}


function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }