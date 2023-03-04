// some pseudo code based on starter code instruction
// define DOM elements
var currentDateEl = $('#currentDate');
var projectDisplayEl = $('.container')

// Display the current day at the top of the calender when a user opens the planner.
function displayCurrentDate() {
  var currentDate = moment().format("dddd, MMMM Do");
  currentDateEl.text(currentDate);
};

displayCurrentDate ();

// Present timeblocks for standard business hours when the user scrolls down.
function displayPlanner() {
  var plannerRowEl = $('<tr>');

  var rowHourEl = $('<td>').addClass('p-2');

  var rowItemEl = $('<td>').addClass('p-2');

  var saveButton = $('<td>')
  .addClass('p-2 save-btn text-center')
  .text('save');

  plannerRowEl.append(
    rowHourEl,
    rowItemEl,
    saveButton
  );

  projectDisplayEl.append(projectRowEl);
}

displayPlanner ();

projectDisplayEl.html(test);

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




