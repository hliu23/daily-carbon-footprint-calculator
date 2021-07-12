function yyyymmdd(date) {
  // date object as parameter
  var yyyy = date.getFullYear().toString();

  function pad(num) {
    // take in num, return string
    if (num <= 9) return ("0" + num.toString());
    return num.toString();
  }

  var mm = pad(date.getMonth());
  var dd = pad(date.getDate());
  return (yyyy + mm + dd);
}

function printDate(yyyymmdd) {
  var yyyy = Number(yyyymmdd.substring(0, 4));
  var mm = Number(yyyymmdd.substring(4, 6))-1;
  var dd = Number(yyyymmdd.substring(6, 8));
  var date = new Date(yyyy, mm, dd);
  return date.toLocaleString("default", {year:"numeric", month: "long", day: "numeric"});
}