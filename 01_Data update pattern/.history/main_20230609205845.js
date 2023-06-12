const btn = document.querySelector('button');
btn.addEventListener('click', makeNewData);

// makes new data
function makeNewData() {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letters = letters.slice(0, Math.floor(Math.random() * 26)).split('');
  redraw(letters);
}

// redraw entire board
function redraw(receivedData) {
  const divs =  d3
    .select('#content') // content div
    .selectAll('div') // [], empty selection
    .data(receivedData)
  
  divs
    .enter() // #enterNodes = receivedData.length - num of 'div'
    .append('div') 
    .text((data, index) => `${data}, ${index}`);
  
  divs
    .exit() //
    .remove(); 
}

makeNewData();

