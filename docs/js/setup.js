$(function (){
  var localStorage = window.localStorage;
  var sessionStorage = window.sessionStorage;

  // as settings page?
  if (localStorage.getItem("setup") !== null) window.location.replace("saved.html");
  
  $("#car-num").on("change", function (){
    $("#cars").empty();
    var carNum = $("#car-num").val();
    // if more than 10 entered as car number?
    for (let i = 1; i <= carNum; i++) {
      let element = 
      `<div id="car-${i}">
        <label>Car ${i}: </label>
        <input type="number" id="car-${i}-mi-gal" min="10" max="50" value="21.6" step="0.1">
        <label for="car-${i}-mi-gal"> miles per gallon |</label>
        <input type="number" id="car-${i}-mi-day" min="0" max="1000" value="31.3" step="0.1">
        <label for="car-${i}-mi-day"> miles driven on a normal day</label><br>
      </div>`;
      $("#cars").append(element);
    }
  });


  $("#transportation-form").on("submit", function (){
    var conf = true;
    if (localStorage.getItem("user") !== null) conf = confirm("You have previously saved data which will be erased by this action.");
    
    if (conf) {
      localStorage.removeItem("user");

      var user;
      var carNum = $("#car-num").val();
      var totalGal = 0;
      for (var i = 1; i <= carNum; i++) {
        let miGal = $(`#car-${i}-mi-gal`).val();
        let miDay = $(`#car-${i}-mi-day`).val(); 
        let gallons = miGal / miDay;
        totalGal += gallons;

        let objName = `car${i}`;
        let obj = {
          [`car${i}`] : {"miPerGal": miGal, "miPerDay": miDay}
        }
        user = {...user, ...obj};
        localStorage.setItem("user", JSON.stringify(user));
      }
      localStorage.setItem("car-num", carNum);
    
      const CO2_PER_GAL = 19.6;
      const OTHER_EMISSION = 1.01;
      var footprint = totalGal * CO2_PER_GAL * OTHER_EMISSION * 365;
      var date = yyyymmdd(new Date());

      var footprintObj = {
        "footprint" : footprint,
        "date" : date
      };

      localStorage.setItem("initialFootprint", JSON.stringify(footprintObj));
      // if no user set
      localStorage.setItem("setup", "true");
      alert("Your data were successfully saved.");
    }
    
  })
  
  for (i = 0; i < localStorage.length; i++)   {
    console.log(localStorage.key(i) + ", " + localStorage.getItem(localStorage.key(i)));
  }

})
