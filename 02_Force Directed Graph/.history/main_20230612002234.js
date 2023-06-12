const ROW = 10;
const COLUMN = 15;
const DIST = 50;
const RADIUS = 10;

const svg = document.querySelector('svg');
const width = svg.clientWidth;
const height = svg.clientHeight;
const nodes = new Array(ROW * COLUMN).fill({});

// const circles = d3.select('svg')
  // .selectAll('circle')
  // .data(nodes)
  // .join('circle')
  // .attr('r', RADIUS)
  // .attr('cx', (d, i) => (i % COLUMN) * DIST)
  // .attr('cy', (d, i) => Math.floor(i / COLUMN) * DIST)
  // .style('fill', 'orange');

const simulation = d3.forceSimulation(nodes)
  .force('collide', d3.forceCollide().radius(RADIUS))
  .force('center', d3.forceCenter(width / 2, height / 2).strength(0.0001))
  .on('tick', ticked);

function ticked() {
  const circles = d3.select('svg')
    .selectAll('circle')
    .data(nodes)
    .join('circle')
    .attr('r', RADIUS)
    .attr('cx', (d, i) => d.x)
    .attr('cy', (d, i) => d.y)
    .style('fill', 'orange');
}