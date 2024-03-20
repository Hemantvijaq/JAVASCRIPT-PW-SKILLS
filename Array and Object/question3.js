let initialObj = {a:1,b:2,c:3,d:4}
console.log( initialObj)

Object.preventExtensions(initialObj)

initialObj.e =5
console.log(Object.isExtensible(initialObj))

let teacher = {subject:"maths"}

Object.seal(teacher)

console.log(Object.isSealed(teacher))
