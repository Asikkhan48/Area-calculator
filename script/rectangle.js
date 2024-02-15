function CalculateRectangleArea(){
    const lengthInput = document.getElementById("rectangle-width");
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
// height
    const widthInput = document.getElementById("reactangle-height");
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    
    // calculate rectangle areas
    const area = length * width;

    // display Rectangle Area
    const reactangleAreaSpan = document.getElementById("rectangle-area");
    reactangleAreaSpan.innerText = area;
}
