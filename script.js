//variable
$(document).ready(function () {
  //Header Date
  let date = moment().format("dddd, MMM Do YYYY");
  let time = moment().format("LT");
  let hour = moment().format("HH");
  var blockTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]; //Hour identifying array
  $("#currentDay").text("Today is " + date);
  $("#currentTime").text("It is " + time);

  // CSS styling addClass feature  (Need to look as to why it might not work)

  for (let i = 0; i < blockTime.length; i++) {
    if (hour > blockTime[i]) {
      $(".time-block textarea:eq(" + i + ")").addClass("past");
    } else if (hour == blockTime[i]) {
      $(".time-block textarea:eq(" + i + ")").addClass("present");
    } else {
      $(".time-block textarea:eq(" + i + ")").addClass("future");
    }
  }

  // Saving text Function
  $(".saveBtn").on("click", function () {
    console.log($($(this).siblings()[1]).val()); //after zooming in to the array, jquery lost its mojo
    console.log($(this).siblings());
    var text = $(this).siblings()[1].value;
    var id = $(this).siblings()[1].id;
    localStorage.setItem("Daily Scheduler" + id, text);

    var tasks = localStorage.getItem("Daily Scheduler" + 15, text);
    console.log(tasks);
  });
});

//Return of information on scheduler from local storage;

//$(document).ready(function () {
// retrieve();
//});

//$("#9").getitem().val("FAEWhioafwehiafewhoifae");
