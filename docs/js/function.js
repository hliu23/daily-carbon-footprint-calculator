function yyyymmdd(date) {
  // date object as parameter
  var yyyy = date.getFullYear().toString();

  function pad(num) {
    // take in num, return string
    if (num <= 9) return ("0" + num.toString());
  }

  var mm = pad(date.getMonth());
  var dd = pad(date.getDate());
  return (yyyy + mm + dd);

}