// #Homework #5 

//WHEN I open the planner 
//THEN the current day is displayed at the top of the calendar
// https://momentjs.com
var todayDate = $("#currentDay");
todayDate.text(moment().format('dddd, MMMM Do YYYY, h:mm a'));

// WHEN I view the timeblocks for that day 
// THEN each timeblock is color coded to indicate whether it is in the past,  present, or future
 var timeblock = $(".time-block");
 console.log(timeblock);

 timeblock.each(function () { // Loop started
    var currentEL = $(this);
    console.log(currentEL.attr("id"));

    var id = currentEL.attr("id");
    console.log(id.replace("hour_", "")); 

    id = id.replace("hour_", "");       // replaces the string with the number

    var hr = moment().hour(); // log in hours
    console.log(id, hr);

    if (id < hr) {          // timeblock gets color coded with past, present, and future
        currentEL.addClass("past");
    } else if (id == hour) {
        currentEL.addClass("present");
    } else {
        currentEL.addClass("future");
    }
 })

// WHEN I click into a timeblock 
// THEN I can enter an event 
// WHEN I click the save button for that timeblock 
// THEN the text for that event is saved in local storage 

var saveBtn = $(".saveBtn");
console.log(saveBtn);

//$(document).ready(function (){
  //  saveBtn = $(".saveBtn");
    // save button event listener
    //$("saveBtn").on("click", function (){
        
    //})

//})

