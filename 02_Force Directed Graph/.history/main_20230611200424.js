const width = height = 300;
const nodes = [{}, {}, {}, {}, {}];

const simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceMandyBody())
  .force('center', d3.forceCenter(width / 2, height / 2))
  .on('tick', ticked);

function ticked() {
  const u = d3.select('svg')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', 5)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);
}
