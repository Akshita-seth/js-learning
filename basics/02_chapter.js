//Q1
let age1 = prompt("What is your age?")
if(age1 >= 10 && age1 <= 20)
    console.log("YES")
else
    console.log("NO")
//Q2
const grade = "d"
switch (grade) {
    case "A" : console.log("First")
               break;
    case "B" : console.log("Second")
               break;
    case "C" : console.log("Third")          
               break;
    default : console.log("Last")
}
//Q3
const num1 = 12
if(num1%2 == 0 && num1%3 == 0)
    console.log("Divisible by both 2 and 3")
else
    console.log("Not divisible by both")
//Q4
const num2 = 14
if(num2%2 == 0 && num2%3 == 0)
    console.log("Divisible by both 2 and 3")
else if(num2%2 == 0)
    console.log("Divisible by 2 only")
else if(num%3 == 0)
    console.log("Divisible by 3 only")
else
    console.log("Not divisible by both")
//Q5
const age2 = 17
console.log("You can", age2<18? "not drive!" : "drive!")
