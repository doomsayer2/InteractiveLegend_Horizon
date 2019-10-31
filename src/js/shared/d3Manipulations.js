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

  // Circle to y-axis
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

  d3.select(yAxisText)
    .select("text")
    .style("fill", "#C51B7D");

  d3.select(yAxis)
    .select("line")
    .style("stroke", "#C51B7D")
    .style("stroke-width", 2);

  const hint2Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_0_marks")
    .append("g")
    .classed("customD3Hints", true);

  const hint2Group2 = d3
    .select(".vegaViz1 > svg")
    .select(".layer_1_marks")
    .append("g")
    .classed("customD3Hints", true);

  /**light green area */
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

  /**Dark green area */
  hint2Group2
    .append("circle")
    .attr("r", 10)
    .attr("cx", layer0Box.width / 2 + 50)
    .attr("cy", layer0Box.height / 2 + 10)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");

  hint2Group2
    .append("text")
    .attr("x", layer0Box.width / 2 + 50)
    .attr("y", layer0Box.height / 2 + 15)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("2");

  return 2;
};

const createHintThree = () => {
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const layer1 = d3.select(paths.nodes()[3]);
  //const layer2 = d3.select(paths.nodes()[4]); // Areas below the 0 line
  const layer1Box = layer1.node().getBBox();

  const hint3Group = d3
    .select(".vegaViz1 > svg")
    .select(".layer_2_marks")
    .append("g")
    .classed("customD3Hints", true);

  hint3Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", layer1Box.width + 5)
    .attr("cy", layer1Box.height + 30)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint3Group
    .append("text")
    .attr("x", layer1Box.width + 5)
    .attr("y", layer1Box.height + 36)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("3");

  /**Left blue area */
  hint3Group
    .append("circle")
    .attr("r", 10)
    .attr("cx", 55 )
    .attr("cy", layer1Box.height + 30)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");
  hint3Group
    .append("text")
    .attr("x", 55)
    .attr("y", layer1Box.height + 36)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("3");

  //layer1.attr("stroke", "#C51B7D").attr("stroke-width", "2");
  //layer2.attr("stroke", "#C51B7D").attr("stroke-width", "2");

  /**Highlight y-Axis and text */
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

  d3.select(yAxisText)
    .select("text")
    .style("fill", "#C51B7D");

  d3.select(yAxis)
    .select("line")
    .style("stroke", "#C51B7D")
    .style("stroke-width", 2);

  return 3;
};

const createHintFour = () => {
  const paths = d3.select(".vegaViz1 > svg").selectAll("path");
  const xAxisText = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-label")
    .selectAll("text");

  const july = d3.select(xAxisText.nodes()[6]);

  const layer1 = d3.select(paths.nodes()[3]);
  const layer1Box = layer1.node().getBBox();

  july
    .style("fill", "#C51B7D")
    .attr("font-weight", "bold")
    .style("font-size", "15px")
    .attr("dy", "3");

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

  hint5aGroup
    .append("circle")
    .attr("r", 10)
    .attr("cx", sept2Box[0] + 23)
    .attr("cy", sept2Box[1] - 30)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");

  hint5aGroup
    .append("text")
    .attr("x", sept2Box[0] + 23)
    .attr("y", sept2Box[1] - 25)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("5");

  return 5;
};

const createHintSix = () => {
  const xAxisText = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-label")
    .selectAll("text");

  const feb = d3.select(xAxisText.nodes()[1]);

  feb
    .style("fill", "#C51B7D")
    .attr("font-weight", "bold")
    .style("font-size", "15px")
    .attr("dy", "3");

  const xAxisText2 = d3
    .select(".vegaViz2 > svg")
    .select(".role-axis-label")
    .selectAll("text");
  const feb2 = d3.select(xAxisText2.nodes()[1]);

  feb2
    .style("fill", "#C51B7D")
    .attr("font-weight", "bold")
    .style("font-size", "15px")
    .attr("dy", "3");

  const xAxisText3 = d3
    .select(".vegaViz3 > svg")
    .select(".role-axis-label")
    .selectAll("text");
  const feb3 = d3.select(xAxisText3.nodes()[1]);

  feb3
    .style("fill", "#C51B7D")
    .attr("font-weight", "bold")
    .style("font-size", "15px")
    .attr("dy", "3");

  const febTransform = feb.attr("transform");
  const feb2Transform = feb2.attr("transform");
  const feb3Transform = feb3.attr("transform");

  let febBox = febTransform
    .substring(febTransform.indexOf("(") + 1, febTransform.indexOf(")"))
    .split(",");
  febBox = febBox.map(e => parseInt(e, 0));

  let feb2Box = feb2Transform
    .substring(feb2Transform.indexOf("(") + 1, feb2Transform.indexOf(")"))
    .split(",");
  feb2Box = feb2Box.map(e => parseInt(e, 0));

  let feb3Box = feb3Transform
    .substring(feb3Transform.indexOf("(") + 1, feb3Transform.indexOf(")"))
    .split(",");
  feb3Box = feb3Box.map(e => parseInt(e, 0));

  const hint6aGroup = d3
    .select(".vegaViz1 > svg")
    .select(".role-axis-label")
    .append("g")
    .classed("customD3Hints", true);

  const hint6bGroup = d3
    .select(".vegaViz2 > svg")
    .select(".role-axis-label")
    .append("g")
    .classed("customD3Hints", true);

  const hint6cGroup = d3
    .select(".vegaViz3 > svg")
    .select(".role-axis-label")
    .append("g")
    .classed("customD3Hints", true);

  hint6aGroup
    .append("circle")
    .attr("r", 10)
    .attr("cx", febBox[0] + 17)
    .attr("cy", febBox[1] + 14)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");

  hint6aGroup
    .append("text")
    .attr("x", febBox[0] + 17)
    .attr("y", febBox[1] + 19)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("6");

  hint6bGroup
    .append("circle")
    .attr("r", 10)
    .attr("cx", feb2Box[0] + 17)
    .attr("cy", feb2Box[1] + 14)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");

  hint6bGroup
    .append("text")
    .attr("x", feb2Box[0] + 17)
    .attr("y", feb2Box[1] + 19)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("6");

  hint6cGroup
    .append("circle")
    .attr("r", 10)
    .attr("cx", feb3Box[0] + 17)
    .attr("cy", feb3Box[1] + 14)
    .style("stroke", "#C51B7D")
    .style("fill", "#C51B7D");

  hint6cGroup
    .append("text")
    .attr("x", feb3Box[0] + 17)
    .attr("y", feb3Box[1] + 19)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text("6");

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

  const xAxisText2 = d3
    .select(".vegaViz2 > svg")
    .select(".role-axis-label")
    .selectAll("text");
  const feb2 = d3.select(xAxisText2.nodes()[1]);

  feb2
    .style("fill", "rgb(0,0,0)")
    .attr("font-weight", "normal")
    .style("font-size", "10px");

  const xAxisText3 = d3
    .select(".vegaViz3 > svg")
    .select(".role-axis-label")
    .selectAll("text");

  const feb3 = d3.select(xAxisText3.nodes()[1]);

  feb3
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
