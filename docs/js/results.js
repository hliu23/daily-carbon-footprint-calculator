$(function () {
  var now = new Date();
  var first = new Date(now.getFullYear(), now.getMonth(), 1);
  var last = new Date(now.getFullYear(), now.getMonth()+1, 0);

  var currentMonth = first.toLocaleString("default", {year:"numeric", month: "long"});
  $("#currentMonth").append(currentMonth);

  // classes: previous, current, today

  for (var i = 0; i < first.getDay(); i++) {
    $("#row-1").append("<td class=\"previous\"></td>");
  }
  for (var i = 1; i <= last.getDate(); i++) {
    first.getDay();
  }
}) 