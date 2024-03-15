function taxCalculation(){
  
    const taxRates =[
        {max:1000,min:0,rate:0.1},
         {max:10000,min:1001,rate:0.2},
         {max:Infinity,min:10001,rate:0.4}
        ]
    return function (income) {
        for(const range of taxRates)
        if (income >= range.min && income <=range.max){
            return income*range.rate
        }
             
    }
    }

    let calculteTax = taxCalculation();

    console.log(calculteTax(40000));

      

