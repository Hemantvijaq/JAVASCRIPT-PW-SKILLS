function outerFunction(parameter){
    var out = outsider
    
    function innerFunction(){
    console.log(out)   
   
}
   innerFunction()
}