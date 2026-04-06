//random number generation
const number_generated =  Math.floor(Math.random() * 100 + 1)

// input
const readlineSync = require("readline-sync")
let guesses = 0;
let input_num;

while(true)
{
  input_num = readlineSync.question("Enter your guess:  ")
  guesses++;

// checking number's location
 if(input_num == number_generated) 
 {
    //const score = 100 - guesses;
    console.log(`Yayyy!! Your guess is correct, you guessed it in ${guesses} guesses. \nYour score is ${100 - guesses}`)
    break;
 }
else if(input_num < number_generated)
    console.log("Your number is lesser than my number! Try again.")

else if(input_num > number_generated)
    console.log("Your number is greater than my number! Try again.")

else
    console.log("Invalid input dear!")
}