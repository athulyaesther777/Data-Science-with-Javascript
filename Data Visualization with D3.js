// Bar chart with D3.js
const data = [30, 80, 45, 60, 20, 90, 100];

d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", d => d + "px")
  .text(d => d);
