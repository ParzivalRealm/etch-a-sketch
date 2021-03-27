

function changeColor () {
  let color = ["38, 70, 83", "42, 157, 143", "233, 196, 106", "244, 162, 97", "231, 111, 81"]
  let randomColor = Math.floor(Math.random() * 6);
  this.style.backgroundColor= "rgb(" + color[randomColor] + ")";
}

function createGrid () {
  let gridSize = prompt("Choose grid size 1-64")
  for (let i = 0; i < gridSize; i++) {
    let selectedClass = document.querySelector(".sketch_container");
    let createDiv = document.createElement("div");
    selectedClass.appendChild(createDiv);
    createDiv.classList = "Sketch-column";
    for(let j = 0; j < gridSize; j++){
      let createSquare = document.createElement("div");
      createDiv.appendChild(createSquare);
      createSquare.classList = "Sketch_square";
      createSquare.addEventListener("mouseover",changeColor)
    }
  }
}
 
function addButtonEventListeners (){
let changeGridSize = document.querySelector("#changeSize");
let clearButton = document.querySelector("#clearGrid")

changeGridSize.addEventListener("click",ChangeGrid)
clearButton.addEventListener("click",cleanColorGrid)
}

function ChangeGrid () {
  clearGrid()
  createGrid()
}

function clearGrid (){
  let gridSquare = document.querySelectorAll(".Sketch_square");
  let gridColumn = document.querySelectorAll(".Sketch-column");

  gridSquare.forEach(data => {
    data.parentNode.removeChild(data);
  })
  gridColumn.forEach(data => {
    data.parentNode.removeChild(data);
  })
}

function cleanColorGrid(){
  let gridSquare = document.querySelectorAll(".Sketch_square");
  gridSquare.forEach(data => {
    data.style.backgroundColor="yellow";
  })
}

createGrid()
addButtonEventListeners()