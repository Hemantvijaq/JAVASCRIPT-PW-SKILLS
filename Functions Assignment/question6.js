function calculatingVolume(lenght){
    return function (breadth){
        return function (height){
            return lenght*height*breadth
        }
    }

}

let volume = calculatingVolume(10)(8)(6)
console.log(volume)