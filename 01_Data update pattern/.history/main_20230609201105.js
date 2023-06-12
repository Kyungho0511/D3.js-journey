const svg = d3.select('#svgID');

const rect = svg
  .append('rect')
  .attr('height', 10)
  .attr('width', 10)
  .style('fill', 'red');

rect.style('fill', 'purple');

let letters = 'ABCDEFG';
letters = letters.split('');
console.log(letters);