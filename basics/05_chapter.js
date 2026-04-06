// Q1
const readlineSync = require("readline-sync")
let num = [11, 22, 33, 44, 55]
let input = readlineSync.question("Enter number to be added: ")
// num[num.length] = Number(input)
num.push(Number(input))
console.log(num)
//Q2
do 
{
    input = readlineSync.question("Enter number to be added: ")
    num.push(Number(input))
} while(input != 0)
    console.log(num) 

// Q3
let newArr = num.filter( (i) => {
    // if (i%10 == 0)   NO NEED OF IF SINCE filter FN KNOWS WHAT TO DO, THE STATEMENT IN RETURN IS JUST A CONDITION
        return i%10 == 0;  //IT WILL RETURN i ONLY AN NOT TRUE/FALSE
})
console.log("Divisible by 10 array: ",newArr)

// Q4
let squareArr = num.map((i) => {
    return i*i
})
console.log("Squared array: ", squareArr)

// Q5
let natural = [1,2,3,4,5]
let factorial = natural.reduce((h1,h2) => {
    return h1*h2
})
console.log(factorial)