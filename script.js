const body = document.body;
let defultGridSize = 24;
const squaresContainer = document.getElementById("container")
const sketchBoardContainer = document.getElementById("sketch-board-container");
squareItemColor = "yellow";
let rainbowClicked = false;
let squaresArray;
document.getElementById("rainbow").onclick = function () {
    if (rainbowClicked) {
        rainbowClicked = false;
        squareItemColor = "yellow";
    }else {
        rainbowClicked = true;
    }
}



function squareColor() {
    if (rainbowClicked){
        let colorsArr = ["#F90093","#06d6a0","#ffb600","#BAA5FF","#5DB7DE","#118ab2"];
        squareItemColor = Math.floor(Math.random() * colorsArr.length);
        console.log(colorsArr[squareItemColor]);
        return colorsArr[squareItemColor];

    } else {
        console.log(rainbowClicked);

        return squareItemColor;
    }  
}


document.getElementById("reset").onclick = resetSquares;

document.getElementById("grid-size").onclick = function() {
    defultGridSize = askGridSize();
    while (squaresContainer.firstChild) {
        squaresContainer.removeChild(squaresContainer.firstChild);
    }
    createGrid();
    resetSquares();
};
sketchBoardContainer.append(squaresContainer);
body.append(sketchBoardContainer);


function createGrid() {
  
    if (defultGridSize > 100) {
        alert("Numbers above 100 are not allowed.")
        defultGridSize = askGridSize();
    }else{
    //the square sizes calculated minus 2 because of the gap between squares.
     sizeOfSquares = (502/defultGridSize)-2;
     
    for(let i = 0; i<(defultGridSize**2); i++) {
        let squareItem = document.createElement("div");
        squareItem.className = "square";  
        squareItem.style.cssText = `
        width:${sizeOfSquares}px;
        height:${sizeOfSquares}px;
        background-color: rgb(177, 6, 6);
        `;  
        squareItem.addEventListener("mouseover", () => {
            
            squareItem.style.backgroundColor = squareColor();
        });    
        
        squaresContainer.append(squareItem);
        squaresArray = Array.from(squaresContainer.children);
        }
    }
}

function resetSquares() {  
    for (let i = 0; i< squaresArray.length; i++) {
         squaresArray[i].style.backgroundColor= "rgb(177, 6, 6)";
        
    }
};

function askGridSize() {
  let num = prompt("Please insert the size of grid you would like\n ragne from 1-100");
  defultGridSize = 24;

  return num;
};
createGrid();