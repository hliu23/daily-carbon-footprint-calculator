$(function (){
  var localStorage = window.localStorage;
  // var sessionStorage = window.sessionStorage;

  if (localStorage.getItem("setup") === null) {
    alert("Please enter some basic info first.")
    window.location.replace("setup.html");
  }

  var user = JSON.parse((localStorage.getItem("user")));
  var carNum = localStorage.getItem("car-num");

  if (localStorage.getItem("initialFootprint") !== null) {
    var footprint = JSON.parse(localStorage.getItem("initialFootprint"));
    $("#footprint").append(footprint["footprint"]);
    $("#setup-date").append(printDate(footprint["date"]));
  } else {
    $("#carbon-footprint").hide();
  }

  $("#reset").on("click", function (){
    localStorage.removeItem("setup");
    window.location.replace("setup.html");
  })

  $("#goal-footprint").attr("max", footprint["footprint"]);

  $("#goal-footprint").on("change", function (){
    var goal = $("#goal-footprint").val();
    $("#maintenance").empty();
    for (var i = 1; i <= carNum; i++) {
      let element = 
      `<div class=\"car${i}\">
        Car ${i}:&nbsp;&nbsp;
        <input type=\"checkbox\" class=\"custom-engine\"></input> keep engine in tune | 
        <input type=\"checkbox\" class=\"custom-tire\"></input> keep tires properly inflated
      </div>`;
      $("#maintenance").append(element);
    }
    // default number
  var miles = goal / carNum / 365 / CO2_PER_GAL * 21.6;
  $("#goal-mileage").append(miles);
  })
  
  var reduceFootprint = 0;
  const CO2_PER_GAL = 19.6;
  const OTHER_EMISSION = 1.01;
  const ENGINE_REDUCE = 0.04;
  const TIRE_REDUCE = 0.006;

  // not successful yet
  $("#submit").on("click", function() {
    for (var j = 1; j <= carNum; j++) {
      var gallons = user[`car${j}`]["miPerGal"] / user[`car${j}`]["miPerDay"];
  
      if ($(`.car${j} > .custom-engine`).checked) {
        console.log("check")
        var engineReduce = gallons * CO2_PER_GAL * OTHER_EMISSION * 365 * ENGINE_REDUCE;
        reduceFootprint += engineReduce;
      }
  
      if ($(`.car${j} > .custom-tire`).checked) {
        var tireReduce = gallons * CO2_PER_GAL * OTHER_EMISSION * 365 * TIRE_REDUCE;
        reduceFootprint += tireReduce;
      }
    }
    
  // console.log(footprint["footprint"] - reduceFootprint);
  // $("#projected-footprint").append(footprint["footprint"] - reduceFootprint);
  })

  

  


  

})