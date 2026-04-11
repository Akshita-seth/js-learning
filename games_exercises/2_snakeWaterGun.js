//let user = prompt("Enter S, W or G, It's Your Turn!")
readlineSync = require("readline-sync")
const user = readlineSync.question("Enter S, W or G, It's Your Turn!")

const random = Math.floor(Math.random()*3);
const comp = ["S", "W", "G"][random]

const match = (comp, user)=> { 
    if(comp===user)
        return "TIE";
    else if(comp ==='S' && user === 'W')
        return "Computer Wins";
    else if(comp ==='S' && user === 'G')
        return "User Wins";
    
    else if(comp === 'W' && user == 'G')
        return  "Computer Wins";
    else if(comp === 'W' && user == 'S')
        return  "User Wins";
    else if(comp ==='G' && user === 'S')
        return "Computer Wins";
    else if(comp ==='G' && user === 'W')
        return "User Wins";
}
let result = match(comp, user)
console.log(`Computer : ${comp}\nUser : ${user}`) //Use <br> instead of \n in case of html file and script.js linked
console.log (result)