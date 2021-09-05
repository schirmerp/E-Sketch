const container = document.getElementById("container"); 
const resetButton = document.getElementById("reset");
const body = document.querySelector("body");
const grid = document.getElementById("grid");


function changeColor(e) {
  let color = "black";
  Object.assign(e.target.style, {
    backgroundColor: color,
  });
}
function erase(f) {
  let color = "whitesmoke";
  Object.assign(f.target.style, {
    backgroundColor: color,
  });
}




function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.addEventListener('mouseover', changeColor)
    grid.appendChild(gridElement)
    gridElement.addEventListener('click', erase)
  }
}

body.onload = function(){
 var size= window.prompt("Select the size of your E Sketch board(i.e. 16 = 16 rows and 16 columns", 16);
 console.log(size);
 setupGrid(size);

};