//Q1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
//Q2 is AUTO-CORRECTION OF BROWSER so it will come under Inspect but on doing view page sourse tbody will not be added since it just shows the raw code thta you wrote

//Q3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
//Q4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
})

// Q5 => None of these , since no ,ethod gives the farthest. closest is for closest