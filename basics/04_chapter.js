// Q1
console.log("har\"".length)
//output ?  4
// Q2
//includes()   method is used to check if a string contains a specified value. It returns true if the string contains the value, and false if not.
const sentence = "The quick brown fox jumps over the lazy dog";
const word = 'slow'
console.log(`The word "${word}" ${sentence.includes(word)? " is" : " is not "} in the sentence.`);
//startsWith() method is used to check if a string starts with a specified value. It returns true if the string starts with the value, and false if not.
const str = "Hello, world!";
console.log(str.startsWith("Heyy"));

//endsWith() method is used to check if a string ends with a specified value. It returns true if the string ends with the value, and false if not.
const str2 = "Hello, world!";
console.log(str2.endsWith("world!"));

// Q3
const str3 = "Hello, world!";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
// Q4
const str4 = "Please give Rs 1000"
const amount = Number(str4.slice(12)) //not a smart way to find the starting index of the amount
const amt = str4.slice("Please give Rs ".length) //smart way to find the starting index of the amount
console.log(amount)
console.log(amt)
console.log(typeof amount) //output ? number   
console.log(typeof amt) //output ? string 
// Q5
const str5 = "You are a good person"
str5[9] = 'y'
console.log(str5)
//output ?  You are a good person
// Explanation: In JavaScript, strings are immutable, which means that you cannot change a character at a specific index directly. When you try to assign a new value to a character in the string, it does not modify the original string. Instead, it simply ignores the assignment, and the original string remains unchanged. Therefore, when you log `str5`, it still outputs "You are a good person".