var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("HH");

// console log the gobal variables to check status //
console.log(currentDay)
console.log(currentHour)

// implement current day at top of page //
$("#currentDay").append(currentDay);


// Below saves button clicks in each row to local storage //
$(document).ready(function(){

$(".saveBtn").on("click", function() {


var value = $(this).siblings(".task").val();
var time = $(this).parent().attr("id")

localStorage.setItem(time, value)
})

})