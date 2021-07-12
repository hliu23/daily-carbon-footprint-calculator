$(function (){
  var localStorage = window.localStorage;
  $("#result").on("change", function(){
    var date = new Date();
    var val = $("#result").val();
    localStorage.setItem(yyyymmdd(date), val);
  })
})