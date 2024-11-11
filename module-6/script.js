// Rollover effect on image
const interactiveImage = document.getElementById("interactive-image");
interactiveImage.addEventListener("mouseover", () => {
    interactiveImage.style.transform = "scale(1.1)";
});
interactiveImage.addEventListener("mouseout", () => {
    interactiveImage.style.transform = "scale(1)";
});

// Button color change
const colorButton = document.getElementById("color-button");
colorButton.addEventListener("click", () => {
    colorButton.style.backgroundColor =
        colorButton.style.backgroundColor === "blue" ? "green" : "blue";
});

// Text input alert with control flow and looping structure
const inputForm = document.getElementById("input-form");
inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission
    const inputText = document.getElementById("input-text").value;
    if (inputText.trim() === "") {
        alert("Please enter some text!");
    } else {
        alert(`You entered: ${inputText}`);
    }
});
