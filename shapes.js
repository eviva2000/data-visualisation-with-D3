let dataArray = [
  { x: 5, y: 5 },
  { x: 9, y: 15 },
  { x: 13, y: 7 },
  { x: 20, y: 10 },
  { x: 24, y: 5 },
];
var dataArray2 = [5, 11, 18];
let dataDays = ["Mon", "Wed", "Fri"];

// Color scale
let rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);

let x = d3.scaleBand().domain(dataDays).range([0, 170]); // 170 is the width of the chart
let xAxis = d3.axisBottom(x);

// Defining our canvas
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

// Creating a bar chart
svg
  .selectAll("rect")
  .data(dataArray2)
  .enter()
  .append("rect")
  .attr("height", function (d, i) {
    return d * 15;
  })
  .attr("width", "50")
  .attr("fill", function (d, i) {
    return rainbow(i);
  })
  .attr("x", function (d, i) {
    return 60 * i;
  })
  .attr("y", function (d, i) {
    return 300 - d * 15;
  });

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0,300)")
  .call(xAxis);
