$(function (){
  var localStorage = window.localStorage;
  var sessionStorage = window.sessionStorage;

  if (localStorage.getItem("setup") === null) window.location.replace("./setup.html");

  $("#footprint").append(sessionStorage.getItem("initialFootprint"));

  $("#reset").on("click", function (){
    localStorage.removeItem("setup");
    window.location.replace("./setup.html");
  })
})