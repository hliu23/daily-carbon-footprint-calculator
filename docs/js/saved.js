$(function (){
  var localStorage = window.localStorage;
  var sessionStorage = window.sessionStorage;

  if (localStorage.getItem("setup") === null) window.location.replace("setup.html");

  if (sessionStorage.getItem("initialFootprint") !== null) {
    $("#footprint").append(sessionStorage.getItem("initialFootprint"));
  } else {
    $("#carbon-footprint").hide();
  }

  $("#reset").on("click", function (){
    localStorage.removeItem("setup");
    window.location.replace("setup.html");
  })
})