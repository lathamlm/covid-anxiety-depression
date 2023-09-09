const url = "https://data.cdc.gov/api/views/8pt5-q6wp/rows.json?accessType=DOWNLOAD";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});