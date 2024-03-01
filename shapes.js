let dataArray = [
  { x: 5, y: 5 },
  { x: 9, y: 15 },
  { x: 13, y: 7 },
  { x: 20, y: 10 },
  { x: 24, y: 5 },
];

let svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");

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
  .attr("stroke", "blue");
