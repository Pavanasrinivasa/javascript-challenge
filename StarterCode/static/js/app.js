// from data.js
var tableData = data;

// select tbody
var tbody = d3.select("tbody");

//display UFO sightings
data.forEach((ufoSightings) => {
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
// initial display of all UFO sightings
console.log(tableData);

// 'Filter Table' button
var button = d3.select("#filter-btn");

// filter the database and display
button.on("click",(event) => {
  d3.event.preventDefault();

// filter the data by date
  var dateInput = d3.select("#datetime").property("value").trim();
  var filteredData = tableData.filter(tableData => tableData.datetime === dateInput);
  console.log(filteredData)
  tbody.html("");

  filteredData.forEach(function(dateData){
    var row=tbody.append("tr");
    Object.entries(dateData).forEach(function([key,value]){
    var cell=tbody.append("td");
    cell.text(value);
        });
    });
});