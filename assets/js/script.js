// some pseudo code based on starter code instruction
// define DOM elements
var currentDateEl = $("#currentDate");
var plannerDisplayEl = $(".container");

// Display the current day at the top of the calender when a user opens the planner.
function displayCurrentDate() {
  var currentDate = moment().format("dddd, MMMM Do");
  currentDateEl.text(currentDate);
};

displayCurrentDate ();

// Present timeblocks dynamically for standard business hours when the user scrolls down.
function displayPlanner() {
  var row = $("<div>").addClass("p-2 row time-block");
  var rowHourEl = $("<div>").addClass("p-2 col-lg-1 hour");
  var rowItemEl = $("<textarea>").addClass("p-2 col-lg-10");
  var saveIcon = $("<i>"). addClass("fa fa-save");
  var saveButton = $("<button>").addClass("p-2 col-lg-1 saveBtn text-center");
  
  // append the elements to display the daily plan
  saveButton.append(saveIcon);
  row.append(rowHourEl, rowItemEl, saveButton);
  plannerDisplayEl.append(row);
}

displayPlanner ();


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function colorCode () {
  var currentHour = moment().hour();
  if (rowHour < currentHour) {
        $(task).addClass('past');
      } else if (rowHour === currentHour) {
        $(task).addClass('present');
      } else if (rowHour > currentHour) {
        $(task).addClass('future');
      }
};

colorCode ();

// themeButtonEl.on('click', function (event) {
//   event.preventDefault();
//   
// });

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page




