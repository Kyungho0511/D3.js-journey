const ROW = 10;
const COLUMN = 15;
const DIST = 50;
const RADIUS = 10;

const svg = document.querySelector('svg');
const width = svg.clientWidth;
const height = svg.clientHeight;
const nodes = new Array(ROW * COLUMN).fill({});

const circles = d3.select('svg')
  .selectAll('circle')
  .data(nodes)
  .join('circle')
  .attr('r', RADIUS)
  .attr('cx', (d, i) => (i % COLUMN) * DIST)
  .attr('cy', (d, i) => Math.floor(i / COLUMN) * DIST)
  .style('fill', 'orange');

const simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody())
  // .force('center', d3.forceCenter(width / 2, height / 2))
  .on('tick', ticked);

function ticked() {
  circles
    .attr('cx', d => {console.log(d); return d.x;})
    .attr('cy', d => d.y);
  }
ticked();