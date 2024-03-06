let dataArray = [
  { x: 5, y: 5 },
  { x: 9, y: 15 },
  { x: 13, y: 7 },
  { x: 20, y: 10 },
  { x: 24, y: 5 },
];

// Defining our canvas
let svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

// Line generator function
let line = d3
  .line()
  .x(function (d, i) {
    return d.x * 15;
  })
  .y(function (d, i) {
    return d.y * 15;
  });
svg
  .append("path")
  .attr("d", line(dataArray))
  .attr("fill", "none")
  .attr("stroke", "red");

// Area generator
let dataArray2 = [
  25, 26, 28, 32, 37, 45, 55, 70, 90, 120, 135, 150, 160, 168, 172, 177, 180,
];

let height = 200;
let width = 500;

// Area generator function
let area = d3
  .area()
  .x(function (d, i) {
    return i * 20;
  })
  .y0(height)
  .y1(function (d) {
    return height - d;
  });

svg.append("path").attr("d", area(dataArray2)).attr("fill", "lightblue");
