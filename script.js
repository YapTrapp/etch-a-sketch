const container = document.getElementById("grid-container");

createGrid();

function createGrid(){
    for(let i=1; i<=8; i++){
        for(let j=1; j<=8; j++){
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            container.appendChild(gridBox);
        }
    }
}