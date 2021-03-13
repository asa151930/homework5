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

    id = id.replace("hour_", "");

    var hr = moment().hour();
    console.log(id, hr);

    if (id < hr) {
        currentEL.addClass("past");
    } else if (id == hour) {
        currentEL.addClass("present");
    } else {
        currentEL.addClass("future");
    }
 })



// add time blocks and make sure to color code them
// how to check whether it'll be past,present or future
