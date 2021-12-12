const body = document.body;
const container = document.getElementById("container")


body.append(container);




function createGrid(numOfSquares) {
    //the square sizes calculated minus 2 because of the gap between squares.
     sizeOfSquares = (502/numOfSquares)-2;
     
    for(let i = 0; i<(numOfSquares**2); i++) {
        let squareItem = document.createElement("div");
        squareItem.className = "square";  
        squareItem.style.cssText = 
        `
        width:${sizeOfSquares}px;
        height:${sizeOfSquares}px;
        `;  
     
        squareItem.addEventListener("mouseover", () => {
            squareItem.style.backgroundColor = "black";
        });    
        
        container.append(squareItem);
    }
}

   
    



createGrid(16);