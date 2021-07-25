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
    // console.log($($(this).siblings()[1]).val()); //after zooming in to the array, jquery lost its mojo
    var text = $(this).siblings()[1].value;
    var id = $(this).siblings()[1].id;
    localStorage.setItem("Daily Scheduler" + id, text);
  });

  //Showing the items that are saved from local storage on page once refreshed

  $("#9").text(localStorage.getItem("Daily Scheduler" + 9));
  $("#10").text(localStorage.getItem("Daily Scheduler" + 10));
  $("#11").text(localStorage.getItem("Daily Scheduler" + 11));
  $("#12").text(localStorage.getItem("Daily Scheduler" + 12));
  $("#13").text(localStorage.getItem("Daily Scheduler" + 13));
  $("#14").text(localStorage.getItem("Daily Scheduler" + 14));
  $("#15").text(localStorage.getItem("Daily Scheduler" + 15));
  $("#16").text(localStorage.getItem("Daily Scheduler" + 16));
  $("#17").text(localStorage.getItem("Daily Scheduler" + 17));

  //Clear All Button at bottom, with confirmation alert

  $(".clear").on("click", function () {
    if (confirm("Are you sure you want to clear everything?")) {
      localStorage.clear();
      location.reload();
    } else {
      alert("Tasks where not deleted");
    }
  });

  /*// For loop to retrieve tasks saved on scheduler from local storage
  for (let i = 0; i < blockTime.length; i++) {
    $(".retrieve").on("click", function () {
      let tasks = $(this).siblings();
      const name = localStorage.id(i);
      const val = localStorage.getItem(name);
      textArea.innerHTML += "${val}";
      localStorage.getItem("Daily Scheduler" + blockTime[i]);

      //localStorage.getItem("Daily Scheduler" + blockTime[i]);
      console.log(tasks);
    });*/
});
