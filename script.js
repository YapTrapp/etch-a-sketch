const container = document.getElementById("grid-container");
const sizeBtn = document.getElementById("size-btn");
const colorBtns = document.querySelectorAll(".color-btn");
let currentColor = "#000000";
let isMouseDown = false;

window.addEventListener("mousedown", () => isMouseDown = true);
window.addEventListener("mouseup", () => isMouseDown = false);

colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentColor = btn.style.backgroundColor;
    });
});

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
    const containerSize = container.offsetWidth || 500;
    const boxSize = Math.floor(containerSize / size);

    container.style.width = `${boxSize * size}px`;
    container.style.height = `${boxSize * size}px`;

    for(let i=1; i<=size; i++){
        for(let j=1; j<=size; j++){
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.style.width = `${boxSize}px`;
            gridBox.style.height = `${boxSize}px`;
            container.appendChild(gridBox);
            gridBox.addEventListener("mouseenter", () => {
                if(isMouseDown){
                    gridBox.style.backgroundColor = currentColor;
                }
            });
        }
    }
}