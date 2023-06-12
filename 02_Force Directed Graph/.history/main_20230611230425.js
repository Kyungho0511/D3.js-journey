const svg = document.querySelector('svg');
const width = svg.clientWidth;
const height = svg.clientHeight;
const nodes = [{}, {}, {}, {}, {}];

const simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(1))
  .force('center', d3.forceCenter(width / 2, height / 2).strength(1))
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
