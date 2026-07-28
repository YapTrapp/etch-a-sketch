const container = document.getElementById("grid-container");

createGrid();

function createGrid(size){
    const boxSize = 100 / size;

    for(let i=1; i<=size; i++){
        for(let j=1; j<=size; j++){
            const gridBox = document.createElement("div");
            
            gridBox.classList.add("grid-box");
            gridBox.style.width = `${boxSize}%`;
            gridBox.style.height = `${boxSize}%`;
            container.appendChild(gridBox);
        }
    }
}