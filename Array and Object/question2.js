const ages = [19,22,19,24,20,25,26,24,25,24]
let sorting = ages.sort((x,y) => x-y)

let mini = ages[0]
let  maxi = ages[ages.length-1]
console.log(mini)
console.log(maxi)

var median;
if (ages.length % 2 === 0) {
    median = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    median = ages[Math.floor(ages.length / 2)];
}

let Plus = ages.reduce((sum,curr)=> sum+curr)
let average = Plus/ages.length

console.log(average)


let min = ages[0]
let max = ages[0]

 for (let i = 0;  i < ages.length; i++) {
    if(ages[i]<min){
        min =ages[i]
    }
    if(ages[i]>max){
        max = ages[i]
    }
    
 }
 const Range =  max - min
 console.log(Range)

 let compare = min - average
 let compare1 =  max-average

 let comparission = Math.abs(compare)
 let comparission1 = Math.abs(compare1)

 console.log(comparission)
 console.log(comparission1)