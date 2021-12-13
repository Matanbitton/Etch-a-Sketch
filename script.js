const body = document.body;
const container = document.getElementById("container")
document.getElementById("reset").onclick = resetSquares;


body.append(container);


let squaresArray = [];

function createGrid(numOfSquares) {
    if (numOfSquares > 100) {
        alert("Numbers above 100 are not allowed.")
    }else {
    //the square sizes calculated minus 2 because of the gap between squares.
     sizeOfSquares = (502/numOfSquares)-2;
     
    for(let i = 0; i<(numOfSquares**2); i++) {
        let squareItem = document.createElement("div");
        squareItem.className = "square";  
        squareItem.style.cssText = 
        `
        width:${sizeOfSquares}px;
        height:${sizeOfSquares}px;
        background-color: rgb(177, 6, 6);
        `;  
         squaresArray.push(squareItem);
        squareItem.addEventListener("mouseover", () => {
            squareItem.style.backgroundColor = "yellow";
        });    
        
        container.append(squareItem);
    }
    }
}

function resetSquares() {
     
    for (let i = 0; i< squaresArray.length; i++) {
         squaresArray[i].style.backgroundColor= "rgb(177, 6, 6)";
    }

};


createGrid(64);