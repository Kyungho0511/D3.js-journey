// makes new data
function makeNewData() {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letters = letters.slice(0, Math.floor(Math.random() * 26)).split('');
  redraw(letters);
}

// redraw entire board
function redraw(receivedData) {
  d3.select('#content') // content div
  .selectAll('div') // [], empty selection
  .data(receivedData) // [A, B, C]
  .enter() // returning enterNode 3 - 0 = 3
  .append('div') // 
  .text((data, index) => `${data}, ${index}`);
}


