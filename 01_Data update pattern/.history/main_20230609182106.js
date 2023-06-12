const svg = d3.select('svg');

const rect = svg
  .append('rect')
  .attr('height', 10)
  .attr('width', 10)
  .style('fill', 'red');

rect.sylte('fill', 'purple');