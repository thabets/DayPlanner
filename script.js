//variable
body = document.body
const localInput = document.getElementById('#storage');



//Header Date
src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"
let date = moment().format("dddd, MMM Do YYYY");
let time = moment().format('LT');
let hour = moment().format('HH');

document.getElementById("currentDay").textContent = 'Today is ' + date;
document.getElementById("currentTime").textContent = 'It is ' + time;

//Body Content







// CSS styling addclass feature

$(document).ready(function(){
    if (hour>=10){
        $('textarea').addClass('past');
    }else if (hour == 9){
        $('textarea').addClass('present');
    }else{
        $('textarea').addClass('future');
    }
}




)


//Setting the color attributes to the different rows of text
row1 = document.querySelector('#row1');
var rowT = 10;
function pastClass(){
    if(hour > rowT){
    row1.addClass('past');
    }else if(time = row){
        row1.addClass = ('present');
    }else{
        row1.addClass = ('future');
    }
}console.log(pastClass);
console.log();
$(document).ready(function(){
    console.log('hi');
})
//utilize event listener and not try to use class
//event listner named onload, what it does is that it is triggered when we load a page. It will call for an event to occur
//when we 

//develop storage
//  That will be done by adding an event listner or onclick, reaserch what is better then a function will occur by saving the information within the text area.
//  we will need to also set an functionality to the function that would limit the amount of input allowed into the text area.
//  look into the different between session storage and local storage

