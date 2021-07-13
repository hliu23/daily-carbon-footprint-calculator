$(function () {
  newCalendar();

  var date = new Date();
  var nextDate = new Date();

  $("#previous-month").on("click", function () {
    date.setMonth(date.getMonth()-1);
    newCalendar(date);
  })

  $("#next-month").on("click", function () {
    date.setMonth(date.getMonth()+1);
    newCalendar(date);
  })
}) 

function newCalendar(date = new Date()) {
  // date object as parameter

  var dateYear = date.getFullYear();
  var dateMonth = date.getMonth();
  var first = new Date(dateYear, dateMonth, 1);
  var last = new Date(dateYear, dateMonth+1, 0);

  var calendarMonth = first.toLocaleString("default", {year:"numeric", month: "long"});
  $("#calendar-month").empty();
  $("#calendar-month").append(calendarMonth);

  // classes: previous, current, today | success, failure
  for (var i = 1; i <= 6; i++) {
    $(`#row-${i}`).empty();
  }

  
  var row = 1;
  var column = 1;

  for (var i = 0; i < first.getDay(); i++) {
    $("#row-1").append("<td class=\"previous\"></td>");
    column++;
  }
  var goal = window.localStorage.getItem("goal");
  
  for (var i = 1; i <= last.getDate(); i++) {
    // local storage: goal; pull info from that day; compare; color; hover
    var day = new Date(dateYear, dateMonth, i);
    
    if (window.localStorage.getItem(yyyymmdd(day)) > goal) var result = "success"; //|failure | not started | future
    $(`#row-${row}`).append(`<td id=\"${yyyymmdd(day)}\" class=\"current ${result}\">${i}</td>`);
    column++;
    if (day.getDay() == 6 && i !== last.getDate()) {
      row++;
      column = 1;
    }
  }
  
  // for (var i = row; i <= 6; i++) {
    for (var j = column; j <= 7; j++) {
      $(`#row-${row}`).append("<td class=\"next\"></td>");
    }
    // column = 1;
  // }
   
}