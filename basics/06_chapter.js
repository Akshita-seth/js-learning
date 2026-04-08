// Q1
// let age = parseInt(prompt("Enter your age:" ))
// if (age >= 18)
//     alert("You can can drive!")
// else 
//     alert("You cannot drive!")

// Q2
let response = true
 while (response)
{
    let age = parseInt(prompt("Enter your age:" ))
    if (age >= 18)
       alert("You can can drive!")
    else if (age < 18)
       alert("You cannot drive!")
       else if(age <= 0)
        console.error("Enter a valid age!!")
    response = confirm("You want to see the prompt again?")
}

// Q3
// let response = true
//  while (response)
// {
//     let age = parseInt(prompt("Enter your age:" ))
//     if(age <= 0)
//     {
//         console.error("Enter a valid age!!")
//         break;
//     }
//     else if (age >= 18)
//        alert("You can can drive!")
//     else (age < 18)
//        alert("You cannot drive!")
       
//     response = confirm("You want to see the prompt again?")
// }

// Q4
// let num = parseInt(prompt("Enter a number to see magic!"))
// if(num > 4)
//     location.href = "https://www.google.com/"

// Q5
// let colour = prompt("Enter initial Y or R or L")
// if(colour == 'Y')
//   document.body.style.background = "yellow"
// else if(colour == 'R')
//     document.body.style.background = "red"
// else if(colour == 'L')
//     document.body.style.background = "lavender"
// else 
//     console.error("Invalid Input")

// OR
// let colour = prompt("Enter the colour you like to see magic!!")
//   document.body.style.background = colour 