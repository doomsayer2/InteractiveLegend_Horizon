import * as d3 from 'd3';

const createHintOne = () => {
  const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  const oneBar = d3.select(paths.nodes()[5]);
  const oneBarBox = oneBar.node().getBBox();

  const hint1Group = d3
    .select('.vegaViz1 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  hint1Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox.x + 15)
    .attr('cy', oneBarBox.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint1Group
    .append('text')
    .attr('x', oneBarBox.x + 15)
    .attr('y', oneBarBox.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('1');
  hint1Group
    .append('rect')
    .attr('width', oneBarBox.width)
    .attr('height', oneBarBox.height)
    .attr('x', oneBarBox.x)
    .attr('y', oneBarBox.y)
    .attr('fill', '#C51B7D')  
    .attr('stroke-width', 2);

  return 1;
};

const createHintTwo = () => {
  const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  const oneBar = d3.select(paths.nodes()[10]);
  const oneBarBox = oneBar.node().getBBox();
  const yAxis = d3
    .select('.vegaViz1 > svg')
    .selectAll('.role-axis-domain')
    .nodes()[1];
  const yAxisText = d3
    .select('.vegaViz1 > svg')
    .selectAll('.role-axis-title')
    .nodes()[1];

  const hint2Group = d3
    .select('.vegaViz1 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  hint2Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox.x + 15)
    .attr('cy', oneBarBox.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint2Group
    .append('text')
    .attr('x', oneBarBox.x + 15)
    .attr('y', oneBarBox.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('2');

  hint2Group
    .append('line')
    .attr('x1', oneBarBox.x + oneBarBox.width / 2)
    .attr('y1', oneBarBox.y)
    .attr('x2', oneBarBox.x + oneBarBox.width / 2)
    .attr('y2', oneBarBox.y + oneBarBox.height)
    .attr('stroke', '#C51B7D')
    .attr('stroke-width', 2);

  hint2Group
    .append('line')
    .attr('x1', oneBarBox.x)
    .attr('y1', oneBarBox.y)
    .attr('x2', oneBarBox.x + oneBarBox.width)
    .attr('y2', oneBarBox.y)
    .attr('stroke', '#C51B7D')
    .attr('stroke-width', 2);

  hint2Group
    .append('line')
    .attr('x1', oneBarBox.x)
    .attr('y1', oneBarBox.y + oneBarBox.height)
    .attr('x2', oneBarBox.x + oneBarBox.width)
    .attr('y2', oneBarBox.y + oneBarBox.height)
    .attr('stroke', '#C51B7D')
    .attr('stroke-width', 2);

  d3.select(yAxisText)
    .select('text')
    .style('fill', '#C51B7D');
  d3.select(yAxis)
    .select('line')
    .style('stroke', '#C51B7D')
    .style('stroke-width', 2);

  return 2;
};

const createHintThree = () => {
  const xAxisText = d3.select('.vegaViz1 > svg').select('.role-axis-title');
  const text = xAxisText.node().getBBox();
  const xAxis = d3.select('.vegaViz1 > svg').select('.role-axis-domain');

  const hint3Group = d3
    .select('.vegaViz1 > svg')
    .select('.role-axis-title')
    .append('g')
    .classed('customD3Hints', true);

  hint3Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', text.x + 48)
    .attr('cy', text.y + 5)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint3Group
    .append('text')
    .attr('x', text.x + 48)
    .attr('y', text.y + 10)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('3');

  d3.select(xAxisText.node())
    .select('text')
    .style('fill', '#C51B7D');
  d3.select(xAxis.node())
    .select('line')
    .style('stroke', '#C51B7D')
    .style('stroke-width', 2);

  return 3;
};

const createHintFour = () => {
  const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  const oneBar = d3.select(paths.nodes()[3]);
  const oneBarBox = oneBar.node().getBBox();

  const hint4Group = d3
    .select('.vegaViz1 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  hint4Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox.x + 15)
    .attr('cy', oneBarBox.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint4Group
    .append('text')
    .attr('x', oneBarBox.x + 15)
    .attr('y', oneBarBox.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('4');
  hint4Group
    .append('rect')
    .attr('width', oneBarBox.width)
    .attr('height', oneBarBox.height)
    .attr('x', oneBarBox.x)
    .attr('y', oneBarBox.y)
    .attr('fill', '#C51B7D')  
    .attr('stroke-width', 2);

  return 4;
};

const createHintFive = () => {
  const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  const oneBar = d3.select(paths.nodes()[9]);
  const oneBarBox = oneBar.node().getBBox();

  const paths2 = d3.select('.vegaViz2 > svg').selectAll('path');
  const oneBar2 = d3.select(paths2.nodes()[9]);
  const oneBarBox2 = oneBar2.node().getBBox();

  const hint5Group = d3
    .select('.vegaViz1 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  const hint5Group2 = d3
    .select('.vegaViz2 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  hint5Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox.x + 15)
    .attr('cy', oneBarBox.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint5Group
    .append('text')
    .attr('x', oneBarBox.x + 15)
    .attr('y', oneBarBox.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('5');
  hint5Group
    .append('rect')
    .attr('width', oneBarBox.width)
    .attr('height', oneBarBox.height)
    .attr('x', oneBarBox.x)
    .attr('y', oneBarBox.y)
    .attr('fill', '#C51B7D')    
    .attr('stroke-width', 2);

  hint5Group2
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox2.x + 15)
    .attr('cy', oneBarBox2.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint5Group2
    .append('text')
    .attr('x', oneBarBox2.x + 15)
    .attr('y', oneBarBox2.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('5');
  hint5Group2
    .append('rect')
    .attr('width', oneBarBox2.width)
    .attr('height', oneBarBox2.height)
    .attr('x', oneBarBox2.x)
    .attr('y', oneBarBox2.y)
    .attr('fill', '#C51B7D')   
    .attr('stroke-width', 2);

  return 5;
};

const createHintSix = () => {
  const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  const oneBar = d3.select(paths.nodes()[3]);
  const oneBarBox = oneBar.node().getBBox();

  const paths2 = d3.select('.vegaViz2 > svg').selectAll('path');
  const oneBar2 = d3.select(paths2.nodes()[3]);
  const oneBarBox2 = oneBar2.node().getBBox();

  const paths3 = d3.select('.vegaViz3 > svg').selectAll('path');
  const oneBar3 = d3.select(paths3.nodes()[3]);
  const oneBarBox3 = oneBar3.node().getBBox();

  const hint5Group = d3
    .select('.vegaViz1 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  const hint5Group2 = d3
    .select('.vegaViz2 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  const hint5Group3 = d3
    .select('.vegaViz3 > svg')
    .select('.mark-rect')
    .append('g')
    .classed('customD3Hints', true);

  hint5Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox.x + 15)
    .attr('cy', oneBarBox.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint5Group
    .append('text')
    .attr('x', oneBarBox.x + 15)
    .attr('y', oneBarBox.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('6');
  hint5Group
    .append('rect')
    .attr('width', oneBarBox.width)
    .attr('height', oneBarBox.height)
    .attr('x', oneBarBox.x)
    .attr('y', oneBarBox.y)
    .attr('fill', '#C51B7D')   
    .attr('stroke-width', 2);

  hint5Group2
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox2.x + 15)
    .attr('cy', oneBarBox2.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint5Group2
    .append('text')
    .attr('x', oneBarBox2.x + 15)
    .attr('y', oneBarBox2.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('6');

  hint5Group2
    .append('rect')
    .attr('width', oneBarBox2.width)
    .attr('height', oneBarBox2.height)
    .attr('x', oneBarBox2.x)
    .attr('y', oneBarBox2.y)
    .attr('fill', '#C51B7D')   
    .attr('stroke-width', 2);

  hint5Group3
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneBarBox3.x + 15)
    .attr('cy', oneBarBox3.y - 12)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');

  hint5Group3
    .append('text')
    .attr('x', oneBarBox3.x + 15)
    .attr('y', oneBarBox3.y - 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('6');

  hint5Group3
    .append('rect')
    .attr('width', oneBarBox3.width)
    .attr('height', oneBarBox3.height)
    .attr('x', oneBarBox3.x)
    .attr('y', oneBarBox3.y)
    .attr('fill', '#C51B7D')   
    .attr('stroke-width', 2);

  return 6;
};

const removeAllHints = () => {
  d3.selectAll('.customD3Hints').remove();

  // Custom Changes to the elements itself and not additions
  const xAxisText = d3.select('.vegaViz1 > svg').select('.role-axis-title');
  const xAxis = d3.select('.vegaViz1 > svg').select('.role-axis-domain');
  const yAxis = d3
    .select('.vegaViz1 > svg')
    .selectAll('.role-axis-domain')
    .nodes()[1];
  const yAxisText = d3
    .select('.vegaViz1 > svg')
    .selectAll('.role-axis-title')
    .nodes()[1];

  d3.select(xAxisText.node())
    .select('text')
    .style('fill', 'rgb(0, 0, 0)');
  d3.select(xAxis.node())
    .select('line')
    .style('stroke', 'rgb(136, 136, 136)')
    .style('stroke-width', 1);

  d3.select(yAxisText)
    .select('text')
    .style('fill', 'rgb(0, 0, 0)');
  d3.select(yAxis)
    .select('line')
    .style('stroke', 'rgb(136, 136, 136)')
    .style('stroke-width', 1);
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
