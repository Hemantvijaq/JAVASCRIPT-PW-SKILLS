function charactersearching(inputstr){

    let typeDigit = /\d/
    let typeLowerCase =/[a-z]/g
    let typeUpperCase = /[A-Z]/g
    let typeAlphanumeric = /\w/

    const digitMatches = inputstr.match(typeDigit)
    const lowerCaseMatches = inputstr.match(typeLowerCase)
    const UppercaseMatches = inputstr.match(typeUpperCase)
    const AlphanumericMatches = inputstr.match(typeAlphanumeric)

    return {
        digits: digitMatches,
        lowercase: lowerCaseMatches,
        Uppercase: UppercaseMatches,
        Alphanumeric: AlphanumericMatches
    }
}

const stringsample = "Hello! pw Skills @2024  aplha1.09877 full stack"
const output = charactersearching(stringsample)

console.log(output.lowercase)
console.log(output.Uppercase)
console.log(output.Alphanumeric)
console.log(output.digits)

