//Q3
document.getElementById("google").addEventListener("click", function(){
    window.location = "https://google.com";
    window.focus();
})
document.getElementById("fb").addEventListener("click", function(){
    window.location = "https://facebook.com";
    window.focus();
})
document.getElementById("yt").addEventListener("click", function(){
    window.location = "https://youtube.com";
    window.focus();
})
document.getElementById("x").addEventListener("click", function(){
    window.location = "https://x.com";
    window.focus();
})
// Q4

//Q5
setInterval(function(){
  document.querySelector("#bulb").classList.toggle("bulb")
,300})