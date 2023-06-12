'use strict'

const COUNT = 100;
const DIST = 40;
const RADIUS_MAX = 10;
const RADIUS_MIN = 5;

const svg = document.querySelector('svg');
let width = svg.clientWidth;
let height = svg.clientHeight;

console.log(randomPtsGenerator());

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

// const circles = d3.select('svg')
//   .selectAll('circle')
//   .data(nodes)
//   .join('circle')
//   .attr('r', RADIUS)
//   .attr('cx', (d, i) => (i % COLUMN) * DIST)
//   .attr('cy', (d, i) => Math.floor(i / COLUMN) * DIST)
//   .style('fill', 'orange');

// simulation.on('tick', () => {
//   circles = d3.select('svg')
//     .attr('cx', (d, i) => d.x)
//     .attr('cy', (d, i) => d.y)
// })
