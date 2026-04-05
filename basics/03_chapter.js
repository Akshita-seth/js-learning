
const marks = {
    harry : 98,
    rohan : 70,
    akash : 90
}
//Q1
 for(let i=0; i< Object.keys(marks).length; i++)
 {
    console.log("Marks of " + Object.keys(marks)[i] + " are : " + marks[Object.keys(marks)[i]]);
 }
//Q2
for (let key in marks)
{
    console.log("Marks of " + key + " are : " + marks[key])
}
//Q3
const readlineSync = require("readline-sync")
let cn = 90
let i
while (i != cn)
{
    i = readlineSync.question("Enter a number : ")
    if(Number(i) != cn)
    {
        console.log("Try again")
    }
}
console.log("Congratulations! You guessed the number")
//Q4
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}
console.log("Mean is : " + mean(1,3,5,7,9))