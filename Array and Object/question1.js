const shoppingCart = ["MILK","COFFEE","TEA","HONEY"]

let  adding = shoppingCart.unshift("MEAT")
console.log(adding)
let lastadding = shoppingCart.push("sugar")
console.log(lastadding)

let allergic = shoppingCart.pop()
console.log(allergic)

shoppingCart[3] = "GREEN TEA"
 console.log(shoppingCart) 