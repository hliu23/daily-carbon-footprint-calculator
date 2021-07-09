$(function (){
  
$("#car-num").on("change", function (){
  $("#cars").empty();
  var carNum = $("#car-num").val();
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


$("#save").on("click", function (){
  var localStorage = window.localStorage;

  var carNum = $("#car-num").val();
  var totalGal = 0;
  for (var i = 1; i <= carNum; i++) {
    let miGal = $(`#car-${i}-mi-gal`).val();
    let miDay = $(`#car-${i}-mi-day`).val();
    let gallons = miGal / miDay;
    totalGal += gallons;
  }
  
  const CO2_PER_GAL = 19.6;
  const OTHER_EMISSION = 1.01;
  var footprint = totalGal * CO2_PER_GAL * OTHER_EMISSION * 365;

  $("#carbon-footprint").empty();
  $("#carbon-footprint").append(`<p>You are leaving a carbon footprint of <strong>${footprint}</strong> lbs/yr.</p>`);
  
})

})
