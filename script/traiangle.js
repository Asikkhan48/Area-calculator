function calculateTraiangleArea() {
    const traingleBaseInput = document.getElementById("traingle-base");
    const traingleBaseText = traingleBaseInput.value;
    const base = parseFloat(traingleBaseText);
    console.log(base);

    // get traiangle height value
    const traingleHeightInput = document.getElementById("traingle-height");
    const traingleHeightText = traingleHeightInput.value;
    const height = parseFloat(traingleHeightText);
    console.log(height);

    // calculate traiangle area
    const area = 0.5 * base * height;

    // Display Traiangle area
    const traiangleAreaSpan = document.getElementById("traiangle-area");
    traiangleAreaSpan.innerText = area;
}