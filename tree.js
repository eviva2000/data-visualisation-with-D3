const height = 200;
const width = 500;
const margin = { left: 10, right: 10, top: 10, bottom: 10 };

// Layout in D3
const tree = d3.tree().size([width, height]);

const svg = d3
  .select("body")
  .append("svg")
  .attr("height", "100%")
  .attr("width", "100%");
const chartgroup = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

d3.json("treeData.json").get((error, data) => {
  if (error) {
    console.log("error", error);
  }
  const root = d3.hierarchy(data[0]); // @Note you can only use d3.hierarchy on data that is already hierarchical like json. If we have tabular data the conceopt of the root wouldnt make sence and we have to manipulate the data to make it hierarchical. We can do that with a funcrtion called d3.stratify.
  tree(root);
  console.log(root.descendants());
  chartgroup
    .selectAll("circle")
    .data(root.descendants())
    .enter()
    .append("circle")
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .attr("r", 5)
    .attr("fill", "green");

  chartgroup
    .selectAll("path")
    .data(root.descendants().slice(1))
    .enter()
    .append("path")
    .attr("d", (d) => {
      return `M${d.x},${d.y} L${d.parent.x},${d.parent.y}`;
    });
});
