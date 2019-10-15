import * as d3 from "d3";

const createHintOne = () => {
  const xAxisText = d3.select(".vegaViz1 > svg").select(".role-axis-title");
  const text = xAxisText.node().getBBox();
  const xAxis = d3.select(".vegaViz1 > svg").select(".role-axis-domain");

  const yAxis = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-domain")
    .nodes()[1];
  const yAxisText = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-title")
    .nodes()[1];
  const text2 = yAxisText.getBBox();

  d3.select(yAxisText)
    .select("text")
    .style("fill", "#C51B7D");

  d3.select(yAxis)
    .select("line")
    .style("stroke", "#C51B7D")
    .style("stroke-width", 2);

  d3.select(xAxisText.node())
    .select("text")
    .style("fill", "#C51B7D");
  d3.select(xAxis.node())
    .select("line")
    .style("stroke", "#C51B7D")
    .style("stroke-width", 2);

  const hint1Group = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-title")
    .append("g")
    .classed("customD3Hints", true);

  hint1Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", text.x + 48)
    .attr("cy", text.y + 5)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint1Group
    .append("text")
    .attr("x", text.x + 48)
    .attr("y", text.y + 10)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("1");

  /*Circle to y-axis*/
  hint1Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", text2.x + 10)
    .attr("cy", text2.y + 35)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint1Group
    .append("text")
    .attr("x", text2.x + 10)
    .attr("y", text2.y + 40)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("1");

  return 1;
};

const createHintTwo = () => {
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const layer0 = d3.select(paths.nodes()[2]);
  const layer0Box = layer0.node().getBBox();
  //console.log(paths, layer0, layer0Box);

  const hint2Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_0_marks")
    .append("g")
    .classed("customD3Hints", true);

  hint2Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", layer0Box.width / 2)
    .attr("cy", layer0Box.height / 2 - 40)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint2Group
    .append("text")
    .attr("x", layer0Box.width / 2)
    .attr("y", layer0Box.height / 2 - 35)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("2");

  layer0.attr("stroke", "#C51B7D").attr("stroke-width", "2");

  return 2;
};

const createHintThree = () => {
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const layer1 = d3.select(paths.nodes()[3]);
  const layer2 = d3.select(paths.nodes()[4]); //areas below the 0 line
  const layer1Box = layer1.node().getBBox();
  //console.log(paths, layer0, layer0Box);

  const hint3Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_1_marks")
    .append("g")
    .classed("customD3Hints", true);

  hint3Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", layer1Box.width / 2 + 40)
    .attr("cy", layer1Box.height / 2 + 50)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint3Group
    .append("text")
    .attr("x", layer1Box.width / 2 + 40)
    .attr("y", layer1Box.height / 2 + 56)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("3");

  layer1.attr("stroke", "#C51B7D").attr("stroke-width", "2");
  layer2.attr("stroke", "#C51B7D").attr("stroke-width", "2");

  return 3;
};

const createHintFour = () => {
  return 4;
};

const createHintFive = () => {
  return 5;
};

const createHintSix = () => {
  return 6;
};

const removeAllHints = () => {
  d3.selectAll(".customD3Hints").remove();

  // Custom Changes to the elements itself and not additions
  const xAxisText = d3.select(".vegaViz1 > svg").select(".role-axis-title");
  const xAxis = d3.select(".vegaViz1 > svg").select(".role-axis-domain");

  const yAxis = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-domain")
    .nodes()[1];
  const yAxisText = d3
    .select(".vegaViz1 > svg")
    .selectAll(".role-axis-title")
    .nodes()[1];

  d3.select(yAxisText)
    .select("text")
    .style("fill", "rgb(0,0,0)");

  d3.select(yAxis)
    .select("line")
    .style("stroke", "rgb(136,136,136)")
    .style("stroke-width", 1);

  d3.select(xAxisText.node())
    .select("text")
    .style("fill", "rgb(0,0,0)");
  d3.select(xAxis.node())
    .select("line")
    .style("stroke", "rgb(136,136,136)")
    .style("stroke-width", 1);

  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const layer0 = d3.select(paths.nodes()[2]);
  const layer1 = d3.select(paths.nodes()[3]);
  const layer2 = d3.select(paths.nodes()[4]); //areas below the 0 line

  layer0.attr("stroke", "none").attr("stroke-width", "0");

  layer1.attr("stroke", "none").attr("stroke-width", "0");
  layer2.attr("stroke", "none").attr("stroke-width", "0");
};

export {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix,
  removeAllHints
};
