const heading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const typingMessage = document.querySelector("#typingMessage");
const resultMessage = document.querySelector("#resultMessage");

const greetButton = document.querySelector("#greetButton");
const colorButton = document.querySelector("#colorButton");
const resetButton = document.querySelector("#resetButton");

function displayGreeting() {
    const userName = nameInput.value.trim();

    if (userName == "") {
        resultMessage.textContent =
            "Please enter your name.";
    } else {
        heading.textContent = "Hello, " + userName;
        resultMessage.textContent =
            "The greeting was displayed successfully."
    }
}

function showTypedText() {
    typingMessage.textContent =
        "You are typing: " + nameInput.value;
}

function changeBackground() {
	// same goes here, no error message but lightblue should be inside a double quotes
    document.body.style.backgroundColor = "lightblue";
    console.log("Background color changed.");
}

function resetPage() {
    heading.textContent = "Event-Driven Webpage";
    nameInput.value = "";
    typingMessage.textContent = "You are typing:";
    resultMessage.textContent =
        "Enter your name and select an action.";
    document.body.style.backgroundColor = "#f3f4f6";
}

greetButton.addEventListener("click", displayGreeting);
// Theres no error message but it should be click 
colorButton.addEventListener("click", changeBackground); 
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("change", showTypedText);

console.log("JavaScript file loaded successfully.");

