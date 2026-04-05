//console.log('Hello World')
//Q1
let a = "Honey"
let b = 6
console.log(a+b)
//Q2
console.log(typeof (a+b))
//Q3
const student = {
    class : "7",
    sec : "B",
    age : 12
}
console.log(student["age"])
student["age"] = 13
console.log(student["age"])
//student = "Harry" CANNOT CHANGE A CONST OBJECT
// TO HOLD A STRING LATER
//Q4  
student["name"]  = "Honey"
console.log(student)  
//Q5
const dict = {
    languor : "lazyy",
    pugnacious : "aggressive",
    saunter : "walk aimlesly"
}
console.log(dict.saunter)