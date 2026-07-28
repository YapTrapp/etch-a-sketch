const container = document.getElementById("grid-container");
const sizeBtn = document.getElementById("size-btn");

sizeBtn.addEventListener("click", () => {
    let size = Number(prompt("Enter grid size (e.g. 16 for 16x16):"));
    if(!size || size<1 || size>100){
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
});


function createGrid(size){
    container.innerHTML = "";
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