
function calculateDiliveryTime(packageType) {
    
    let arrivingTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            console.log("3-4 working days")
            break;
        case "express":
            console.log("1-2 working days")
            break;
        case "overnight":
           console.log("next day")
            break;
        default: "delay"
            console.log("their might be some delay ")
            break;
    }
    return arrivingTime;
}


let packageType = "standard"
let packageType1 = "delay"
let packageType2= "express"
let packageType3= "overnight"

let estimateTime = calculateDiliveryTime((packageType))
let estimateTime1 = calculateDiliveryTime((packageType1))
let estimateTime2 = calculateDiliveryTime((packageType2))
  
