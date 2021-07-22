//variable
body = document.body




//Header Date
src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"
let date = moment().format("dddd, MMM Do YYYY");
let time = moment().format('LT');
document.getElementById("currentDay").textContent = 'Today is ' + date;
document.getElementById("currentTime").textContent = 'It is ' + time;


//Setting the color attributes to the different rows of text
row1 = document.querySelector('#row1');
var rowT = 10;
function pastClass(){
    if(time > row){
    row1.addClass('past');
    }else if(time = row){
        row1.addClass = ('present');
    }else{
        row1.addClass = ('future');
    }
}
console.log();
$(document).ready(function(){
    console.log('hi');
})
//utilize event listener and not try to use class
//event listner named onload, what it does is that it is triggered when we load a page. It will call for an event to occur
//when we 