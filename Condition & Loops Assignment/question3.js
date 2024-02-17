//*Loops :-  in programming are control flow structures that allow a certain block of code to be executed repeatedly until a specified condition is met. Loops are essential for automating repetitive tasks, iterating over collections of data, and performing computations. They help in making code more concise, readable, and efficient.

//*for Loop :- It's useful when the number of iterations is known before entering the loop. It typically has an initialization step, a condition for continuation, and an iteration step.

// syntax for loop-

// for(Declaration/initialization; condition; iteration){
//     body of the loop
// }

// //example
// for (let i = 4; i <=6; i+=2) {
//     console.log(i)
//  }

// // syntax while loop

// //  while(condition){
// //     body of while loop
// //  }

// let i = 0, n =10 ;
// while (i <= n){
//     console.log(i);
//     i=i+2;
// }

//syntax do while loop
let result = '';

let i = 0;
do {
    i = i+1;
    result = result + i;

}
while (i < 10);
console.log(result);