var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function jumpNdrop(entries) {
  const days= 1000*60*60*24
  let max = 0;
  let min = 0;

  for (var i = 2; i < entries.length; i++) {
    let yesterday = Date.parse(entries[i - 1].slice(0, 10)) / days;
    let today = Date.parse(entries[i].slice(0, 10)) / days;
    if (today === yesterday + 1) {
      yesterday = +(entries[i - 1].slice(entries[i - 1].length - 5));
      today = +(entries[i].slice(entries[i].length - 5));
      let current = today - yesterday;
      current = current / yesterday;
      max = Math.max(current, max);
      min = Math.min(current, min);
    }
  }
  console.log(min);
  console.log(max);
};

(function csvFetcher() {
  var csvFile = new XMLHttpRequest();
  csvFile.open("GET", "file:///Users/sfcontra/Documents/code/personel-projects/weight-change-rate-tracker/csv-files/Measurement-Summary-2011-02-20-to-2020-08-28.csv", true);
  csvFile.onreadystatechange = function() {
    if(csvFile.readyState === 4) {
      if(csvFile.status === 200 || csvFile.status == 0) {
        var allText = csvFile.responseText;
        var allTextLines = allText.split(/\r\n|\n/);
        setTimeout(function () {jumpNdrop(allTextLines)}, 500);
      }
    }
  }
  csvFile.send(null);
})();