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
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const xAxisText = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-label")
    .selectAll("text");
  const feb = d3.select(xAxisText.nodes()[1]);
  const july = d3.select(xAxisText.nodes()[6]);

  const layer1 = d3.select(paths.nodes()[3]);
  const layer1Box = layer1.node().getBBox();

  feb
    .style("fill", "#C51B7D")
    .attr("font-weight", "bold")
    .style("font-size", "15px");
  july
    .style("fill", "#C51B7D")
    .attr("font-weight", "bold")
    .style("font-size", "15px");

  const hint4Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_1_marks")
    .append("g")
    .classed("customD3Hints", true);

  hint4Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", layer1Box.width / 2 + 20)
    .attr("cy", layer1Box.height / 2 + 60)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint4Group
    .append("text")
    .attr("x", layer1Box.width / 2 + 20)
    .attr("y", layer1Box.height / 2 + 67)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("4");

  return 4;
};

const createHintFive = () => {
  const xAxisText = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-label")
    .selectAll("text");

  const xAxisTextTallinn = d3
    .select(".vegaViz2 > svg")
    .select(".role-axis-label")
    .selectAll("text");

  const xAxisTextMunich = d3
    .select(".vegaViz3 > svg")
    .select(".role-axis-label")
    .selectAll("text");

  const april = d3.select(xAxisText.nodes()[3]).attr("transform");
  const sept = d3.select(xAxisText.nodes()[8]).attr("transform");
  let aprilBox = april
    .substring(april.indexOf("(") + 1, april.indexOf(")"))
    .split(",");
  aprilBox = aprilBox.map(e => parseInt(e, 0));
  let septBox = sept
    .substring(sept.indexOf("(") + 1, sept.indexOf(")"))
    .split(",");
  septBox = septBox.map(e => parseInt(e, 0));

  const june = d3.select(xAxisTextTallinn.nodes()[5]).attr("transform");
  const sept2 = d3.select(xAxisTextTallinn.nodes()[8]).attr("transform");
  let juneBox = june
    .substring(june.indexOf("(") + 1, june.indexOf(")"))
    .split(",");
  juneBox = juneBox.map(e => parseInt(e, 0));
  let sept2Box = sept2
    .substring(sept2.indexOf("(") + 1, sept2.indexOf(")"))
    .split(",");
  sept2Box = sept2Box.map(e => parseInt(e, 0));

  const april2 = d3.select(xAxisTextMunich.nodes()[3]).attr("transform");
  const oct = d3.select(xAxisTextMunich.nodes()[9]).attr("transform");
  let april2Box = april2
    .substring(april2.indexOf("(") + 1, april2.indexOf(")"))
    .split(",");
  april2Box = april2Box.map(e => parseInt(e, 0));
  let octBox = oct.substring(oct.indexOf("(") + 1, oct.indexOf(")")).split(",");
  octBox = octBox.map(e => parseInt(e, 0));

  const hint5Group = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-label")
    .append("g")
    .classed("customD3Hints", true);

  hint5Group
    .append("line")
    .attr("x1", aprilBox[0])
    .attr("y1", aprilBox[1] - 20)
    .attr("x2", septBox[0])
    .attr("y2", septBox[1] - 20)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5Group
    .append("line")
    .attr("x1", aprilBox[0])
    .attr("y1", aprilBox[1] - 10)
    .attr("x2", aprilBox[0])
    .attr("y2", aprilBox[1] - 30)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5Group
    .append("line")
    .attr("x1", septBox[0])
    .attr("y1", septBox[1] - 10)
    .attr("x2", septBox[0])
    .attr("y2", septBox[1] - 30)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  const hint5aGroup = d3
    .select(".vegaViz2 > svg")
    .select(".role-axis-label")
    .append("g")
    .classed("customD3Hints", true);

  hint5aGroup
    .append("line")
    .attr("x1", juneBox[0])
    .attr("y1", juneBox[1] - 20)
    .attr("x2", sept2Box[0])
    .attr("y2", sept2Box[1] - 20)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5aGroup
    .append("line")
    .attr("x1", juneBox[0])
    .attr("y1", juneBox[1] - 10)
    .attr("x2", juneBox[0])
    .attr("y2", juneBox[1] - 30)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5aGroup
    .append("line")
    .attr("x1", sept2Box[0])
    .attr("y1", sept2Box[1] - 10)
    .attr("x2", sept2Box[0])
    .attr("y2", sept2Box[1] - 30)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  const hint5bGroup = d3
    .select(".vegaViz3 > svg")
    .select(".role-axis-label")
    .append("g")
    .classed("customD3Hints", true);

  hint5bGroup
    .append("line")
    .attr("x1", april2Box[0])
    .attr("y1", april2Box[1] - 20)
    .attr("x2", octBox[0])
    .attr("y2", octBox[1] - 20)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5bGroup
    .append("line")
    .attr("x1", april2Box[0])
    .attr("y1", april2Box[1] - 10)
    .attr("x2", april2Box[0])
    .attr("y2", april2Box[1] - 30)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

  hint5bGroup
    .append("line")
    .attr("x1", octBox[0])
    .attr("y1", octBox[1] - 10)
    .attr("x2", octBox[0])
    .attr("y2", octBox[1] - 30)
    .attr("stroke", "#C51B7D")
    .attr("stroke-width", 2);

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

  const feb = d3.select(xAxisText.nodes()[1]);
  const july = d3.select(xAxisText.nodes()[6]);

  feb
    .style("fill", "rgb(0,0,0)")
    .attr("font-weight", "normal")
    .style("font-size", "10px");
  july
    .style("fill", "rgb(0,0,0)")
    .attr("font-weight", "normal")
    .style("font-size", "10px");
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
