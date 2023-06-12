// makes new data
function makeNewData() {
  let letters = 'ABC';
  letters = letters.split('');
  redraw();
}

// redraw entire board
function redraw() {
  d3.select('#content') // content div
  .selectAll('div') // [], empty selection
  .data(letters) // [A, B, C]
  .enter() // returning enterNode 3 - 0 = 3
  .append('div') // 
  .text((data, index) => `${data}, ${index}`);
}


