let letters = 'ABCDE';
letters = letters.split('');
d3.select('#content')
  .selectAll('div')
  .data(letters)
  .enter()
  .append('div')
  .text(d => d);