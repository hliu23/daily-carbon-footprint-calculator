$(function () {
  newCalendar();

  
}) 

function newCalendar(date = new Date()) {
  // date object as parameter

  var dateYear = date.getFullYear();
  var dateMonth = date.getMonth();
  var first = new Date(dateYear, dateMonth, 1);
  var last = new Date(dateYear, dateMonth+1, 0);

  var calendarMonth = first.toLocaleString("default", {year:"numeric", month: "long"});
  $("#calendar-month").append(calendarMonth);

  // classes: previous, current, today | success, failure

  for (var i = 0; i < first.getDay(); i++) {
    $("#row-1").append("<td class=\"previous\"></td>");
  }
  var goal = window.localStorage.getItem("goal");
  var row = 1;
  for (var i = 1; i <= last.getDate(); i++) {
    // local storage: goal; pull info from that day; compare; color; hover
    var day = new Date(dateYear, dateMonth, i);
    
    if (window.localStorage.getItem(yyyymmdd(day)) > goal) var result = "success"; //|failure | not started | future
    $(`#row-${row}`).append(`<td id=\"${yyyymmdd(day)}\" class=\"current ${result}\">${i}</td>`);
    if (day.getDay() == 6) row++;
  }
}