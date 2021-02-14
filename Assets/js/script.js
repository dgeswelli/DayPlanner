var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");

// console log the gobal variables to check status //
console.log(currentDay)
console.log(currentHour)

// implement current day at top of page //
$("#currentDay").append(currentDay);


// Below saves button clicks in each row to local storage //
$(document).ready(function () {

    $(".saveBtn").on("click", function () {

        // set variables for value and time to be saved in local storage //
        var value = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, value)
    })

})



// Need code here to allow the application to check current time and recolor each row accordingly //


// below recalls what was stored in the textarea field for each hour from local storage //
// May be a way to use const and require less lines of code //

$("#hour-9 .task").val(localStorage.getItem("hour-9"));
$("#hour-10 .task").val(localStorage.getItem("hour-10"));
$("#hour-11 .task").val(localStorage.getItem("hour-11"));
$("#hour-12 .task").val(localStorage.getItem("hour-12"));
$("#hour-13 .task").val(localStorage.getItem("hour-13"));
$("#hour-14 .task").val(localStorage.getItem("hour-14"));
$("#hour-15 .task").val(localStorage.getItem("hour-15"));
$("#hour-16 .task").val(localStorage.getItem("hour-16"));
$("#hour-17 .task").val(localStorage.getItem("hour-17"));
