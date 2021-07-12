$(function (){
  if (sessionStorage.getItem("initialFootprint") !== null) {
    $("#footprint").append(sessionStorage.getItem("initialFootprint"));
  } else {
    $("#carbon-footprint").hide();
  }
})

// goal setting, daily log and email
// style results page
// logo and navbar
// check
// video and essay
// two meetings
// practice