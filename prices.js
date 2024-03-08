let parseDate = d3.timeParse("%m/%d/%Y");
// Data handler
d3.csv("prices.csv")
  .row(function (d) {
    return {
      month: parseDate(d.month),
      price: Number(d.price.trim().slice(1)),
    };
  })
  .get(function (error, data) {
    console.log(data);

    const height = 300;
    const width = 600;

    // Declaring extremes
    const max = d3.max(data, function (d) {
      return d.price;
    });
    const maxDate = d3.max(data, function (d) {
      return d.month;
    });
    const minDate = d3.min(data, function (d) {
      return d.month;
    });

    // Declaring Scales
    const y = d3.scaleLinear().domain([0, max]).range([height, 0]);

    const x = d3.scaleTime().domain([minDate, maxDate]).range([0, width]);

    // Declaring Axis
    const yAxis = d3.axisLeft(y);
    const xAxis = d3.axisBottom(x);

    // Defining the Canvas
    const svg = d3
      .select("body")
      .append("svg")
      .attr("height", "100%")
      .attr("width", "100%");

    const margin = { left: 50, right: 50, top: 20, bottom: 50 };

    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Defing the Line generator
    const line = d3
      .line()
      .x(function (d) {
        return x(d.month);
      })
      .y(function (d) {
        return y(d.price);
      });
    chartGroup.append("path").attr("d", line(data)).attr("fill", "none");
    chartGroup
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);
  });
