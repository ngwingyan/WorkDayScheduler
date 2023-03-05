// some pseudo code based on starter code instruction
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

  // allow the user to customize start and end time
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
    var rowEventEl = $("<textarea>").addClass("col-lg-10").attr({ id: i });

    // definte save icon as mockup and button
    var saveIcon = $("<i>").addClass("fa fa-save").attr({ id: i });
    var saveButton = $("<button>").addClass("col-lg-1 saveBtn text-center").attr({ id: i });

    // append the elements to display the daily plan
    saveButton.append(saveIcon);
    row.append(rowHourEl, rowEventEl, saveButton);
    plannerDisplayEl.append(row);

  };
}

displayPlanner();


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function colorCode() {
  var currentHour = moment().hour();
  if (rowHour < currentHour) {
    $().addClass('past');
  } else if (rowHour === currentHour) {
    $().addClass('present');
  } else if (rowHour > currentHour) {
    $().addClass('future');
  }
};

colorCode();

// themeButtonEl.on('click', function (event) {
//   event.preventDefault();
//   
// });

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page




