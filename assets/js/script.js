// define DOM elements
var currentDateEl = $("#currentDate");
var plannerDisplayEl = $(".container");

// Display the current day at the top of the calender when a user opens the planner.
function displayCurrentDate() {
  var currentDate = moment().format("dddd, MMMM Do");
  currentDateEl.text(currentDate);
};

displayCurrentDate();

// Present timeblocks dynamically for standard business hours when the user scrolls down.
function displayPlanner() {

  // allow users to choose start and end time
  var startTime = 9;
  var endTime = 18;

  // set up the structure of the planner
  for (var i = startTime; i < endTime; i++) {

    // to display timing in X am/ X pm format
    var HourEl = moment().hour(i).format("h a");

    // define time block row
    var row = $("<div>").addClass("row time-block").attr({ id: i });

    // define timing and the event
    var rowHourEl = $("<div>").addClass("col-lg-1 hour").text(HourEl).attr({ id: i });

    // Allow a user to enter an event when they click a timeblock
    var rowEventEl = $("<textarea>").addClass("col-lg-10 event").attr({ id: i });

    // definte save icon as mockup and button
    var saveIcon = $("<i>").addClass("fa fa-save").attr({ id: i });
    var saveButton = $("<button>").addClass("col-lg-1 saveBtn text-center").attr({ id: i });

    // append the elements to display the daily plan
    saveButton.append(saveIcon);
    row.append(rowHourEl, rowEventEl, saveButton);
    plannerDisplayEl.append(row);

    // Color-code each timeblock based on past, present, and future when the timeblock is viewed.

    var currentHour = moment().hour();
    var hour = (moment().hour(i).format("H"));

    rowEventEl.remove("past, present, future");

    // compare Hour on timeblock with current hour, if past, grey out the area, present = red, future = green 
    if (hour < currentHour) {
      rowEventEl.addClass("past");
    } else if (hour == currentHour) {
      rowEventEl.addClass("present");
    } else {
      rowEventEl.addClass("future");
    }
  }
};

displayPlanner();


//Save the event in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on('click', function () {
  // retrieve the hour of the timeblock
  var time = $(this).siblings(".hour").text();
  // retrieve the value in element
  var event = $(this).siblings(".event").val();

  //save to local storage
  localStorage.setItem(time, event);
})


// Persist events between refreshes of a page
function showSavedEvent() {

  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentEvent = localStorage.getItem(currentHour);

    if (currentEvent !== null) {
      $(this).siblings(".event").val(currentEvent);
    }
  });
}

showSavedEvent();
