//variable
body = document.body




//Header Date
src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"
let date = moment().format('ll');
let time = moment().format('LT');
document.getElementById("currentDay").textContent = 'Today is ' + date;
document.getElementById("currentTime").textContent = 'It is ' + time;
