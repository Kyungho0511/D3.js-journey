let letters = 'ABCD';
letters = letters.split('');
d3.select('#content') // content div
  .selectAll('div') // [], empty selection
  .data(letters) // [A, B, C, D]
  .enter() // returning enterNode 3 - 0 = 3
  .append('div') // 
  .text(d => `${d} + 1`);