//SYNCHRONUS PROGRAM
// let userName = prompt("Enter your name: ")
// let age = prompt("Enter your age: ")
// console.log(`${userName} is ${age} years old.`)

//ASYNCHRONUS   
console.log("START")
setTimeout(function(){
  console.log("Hey I am Honey!")
}, 5000)
console.log("END")
/*output => START
            END
            Hey I am Honey! */