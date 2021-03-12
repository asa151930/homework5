// #Homework #5 

//WHEN I open the planner 
//THEN the current day is displayed at the top of the calendar
var todayDate = $("#currentDay");
todayDate.text(moment().format('dddd, MMMM Do YYYY, h:mm a'));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// refer to lines 22-102 on the index.html

// WHEN I view the timeblocks for that day 
// THEN each timeblock is color coded to indicate whether it is in the past,  present, or future

var dt = new Date();
var hr = dt.getHours();

function checkPresent () {

}

// add time blocks and make sure to color code them
// how to check whether it'll be past,present or future
