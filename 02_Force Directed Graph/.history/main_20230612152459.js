'use strict'

const COUNT = 120;
const DIST = 40;
const RADIUS_MAX = 10;
const RADIUS_MIN = 5;

const svg = document.querySelector('svg');
let width = svg.clientWidth;
let height = svg.clientHeight;

const nodes = randomPtsGenerator();

const circles = d3.select('svg')
  .selectAll('circle')
  .data(nodes)
  .join('circle')
  .attr('r', d => d.r)
  .attr('cx', d => d.x)
  .attr('cy', d => d.y)
  .style('fill', 'orange');

function randomPtsGenerator() {
  const nodes = [];
  for (let i = 0; i < COUNT; i++) {
    const node = {
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * (RADIUS_MAX - RADIUS_MIN) + RADIUS_MIN
    }
    nodes.push(node);
  }
  return nodes;
}



// const simulation = d3.forceSimulation(nodes)
//   .force('charge', d3.forceManyBody())
//   .force('center', d3.forceCenter(width / 2, height / 2).strength(0.0001))
//   .force('collide', d3.forceCollide().radius(RADIUS));

// simulation.on('tick', () => {
//   circles = d3.select('svg')
//     .attr('cx', (d, i) => d.x)
//     .attr('cy', (d, i) => d.y)
// })
