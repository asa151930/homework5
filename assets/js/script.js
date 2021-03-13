// #Homework #5 

//WHEN I open the planner 
//THEN the current day is displayed at the top of the calendar
// https://momentjs.com

$(document).ready(function () {         // when the document is ready, set the click event on 

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

        console.log(localStorage.getItem(id))

        var existingTask = localStorage.getItem(id);

        if (existingTask) {
            currentEL.children('textarea').val(existingTask);
        }

        if (id < hr) {          // timeblock gets color coded with past, present, and future
            currentEL.addClass("past");
        } else if (id == hr) {
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

    saveBtn.on('click', function (event) {
        event.preventDefault();
        // function give us to do something after the click
        var text = $(this).prev().val();
        console.log(text);
        var hour = $(this).parent();
        console.log(hour);

        var hour = $(this).parent().attr('id').replace("hour_", "");
        console.log(hour);
        // save to local storage
        
        if (text !== "") { 
            localStorage.setItem(hour, text);
        } else {
            localStorage.removeItem(hour)
        }

    });
});






