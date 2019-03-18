const url = "https://eloquentjavascript.net/author";
const content_type = [ "text/plain",
"text/html",
"application/json",
"application/rainbows+unicorns"
];

async function showTypes() {
    for (let type of content_type) {
        let response = await fetch(url, {headers: {accept: type}});
        console.log('${type}: ${await response.text()}\n`);')
    }
}

showTypes();

//A Javascript Workbench

document.querySelector("#button").addEventListener("click", () => {
  let codeSnippet = document.querySelector("#code").value;
  let output = document.querySelector("output");
  try {
    let result = Function(codeSnippet)();
    output.innerText = String(result);
  } catch (e) {
    output.innerText = "Error: " + e;
  }
  });

  // Conway's game of life
  const width = 40, height = 20;

  let grid = document.querySelector("#grid");
  let checkboxes = [];
  for (let y = 0; y < height; y++){
    for (let x = 0; x < width; x++) {
      let box = document.createElement("input");
      box.type ="checkbox";
      grid.appendChild(box);
      checkboxes.push(box);
    }
    gridNode.appendChild(document.createElement("br"));
  }

  function gridFromCheckboxes() {
    return checkboxes.map(box => box.checked);
  }
  function checkboxesFromGrid(grid) {
    grid.forEach((value, i) => checkboxes[i].checked = value); 
  }
  function randomGrid() {
    let result =[];
    for (let i = 0; i < width * height; i++) {
      result.push(Math.random() < 0.3);
    }
    return result
  }

  checkboxesFromGrid(randomGrid());

  function countNeighbors(grid, x, y) {
    let count = 0;
    for (let y1 = Math.max(0, y-1); y1 <= Math.min(height-1, y+1); y1++) {
      for (let x1 = Math.max(0, x - 1); x1 <= Math.min(width - 1, x + 1);
      if((x1 != x || y1 != y) && grid[x1+y1*width]) {
        count++;
      }
    }
    return count;
  }

  function nextGeneration(grid) {
    let newGrid = new Array(width * height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let neighbors = countNeighbors(grid, x, y);
        let offset = x + y * width;
        if (neighbors < 2 || neighbors > 3) {
          newGrid[offset] = false;
        } else if (neighbors == 2) {
          newGrid[offset] = grid[offset];
        } else {
          newGrid[offset] = true;
        }
      }
    }
    return newGrid;
  }

  let running = null;
  document.querySelector("#run").addEventListener("click", () => {
    if (running) {
      clearInterval(running);
      running = null;
    } else {
      running = setInterval(turn, 400);
    }
  }); 
