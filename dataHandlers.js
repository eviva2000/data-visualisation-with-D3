let parseDate = d3.timeParse("%m/%d/%Y");

// csv data handler
d3.csv("prices.csv")
  .row(function (d) {
    return {
      month: parseDate(d.month),
      price: Number(d.price.trim().slice(1)),
    };
  })
  .get(function (error, data) {});

// tsv data handler
d3.tsv("data.tsv")
  .row(function (d) {
    return {
      month: parseDate(d.month),
      price: Number(d.price.trim().slice(1)),
    };
  })
  .get(function (error, data) {
    console.log(data);
  });

// txt (dsv) data handler
const psv = d3.dsvFormat("|");

d3.text("data.txt").get(function (error, data) {
  const rows = psv.parse(data);
  const newRows = [];

  for (let p = 0; p < rows.length; p++) {
    newRows.push({
      month: parseDate(rows[p].month),
      price: Number(rows[p].price.trim().slice(1)),
    });
  }
  // console.log("rows", newRows);
});

// json data handler
d3.json("treeData.json").get((error, data) => {
  // console.log(data);
});

// xml data handler
d3.xml("data.xml").get((error, data) => {
  console.log(data);
});

// html data handler

d3.html("https://enable-cors.org").get((error, data) => {
  const frag = data.querySelector("div");
  console.log(frag);
});
