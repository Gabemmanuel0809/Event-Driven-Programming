let pageContainer = document.querySelector("#pageContainer");
let mainHeading = document.querySelector("#mainHeading");
let nameInput = document.querySelector("#nameInput");
let greetingButton = document.querySelector("#greetingButton");
let backgroundButton = document.querySelector("#backgroundButton");
let resetButton = document.querySelector("#resetButton");
let messageArea = document.querySelector("#messageArea");

let originalHeading = "Semester: Prelims 1st Semester of Year: 2026-2027";
let originalBackgroundColor = "lightgray";

function handleGreetingClick() {
    let name = nameInput.value.trim();
    if (name === "") {
        mainHeading.textContent = originalHeading;
        messageArea.textContent = "enter your name first.";
        return; // just to make sure na hindi na po nya i co-continue yung mga actions below
    }

    mainHeading.textContent = `Hello, ${name}!`;
    messageArea.textContent = `Welcome, ${name}!`;
    console.log(`Greeting displayed for ${name}.`);
}

function handleBackgroundClick() {
    document.body.style.backgroundColor = "skyblue";
    messageArea.textContent = "The background color has been changed.";
    console.log("Background color changed.");
}

function handleResetClick() {
    mainHeading.textContent = originalHeading;
    nameInput.value = "";
    document.body.style.backgroundColor = originalBackgroundColor;
    messageArea.textContent = "";

    console.log("Page has been reset.");
}

function handleInput() {
    const currentText = nameInput.value;

    if (currentText === "") {
        messageArea.textContent = "";
    } else {
        messageArea.textContent = `You are typing: ${currentText}`;
    }

    console.log(`Input event: ${currentText}`);
}

function handleMouseOver(event) {
    console.log(`The mouse is over the ${event.target.textContent} button.`);
}

// click events 
greetingButton.addEventListener("click", handleGreetingClick);
backgroundButton.addEventListener("click", handleBackgroundClick);
resetButton.addEventListener("click", handleResetClick);

//-------------------------------------------------
// handling input events
nameInput.addEventListener("input", handleInput);
//-------------------------------------------------

// the mouse events
greetingButton.addEventListener("mouseover", handleMouseOver);
backgroundButton.addEventListener("mouseover", handleMouseOver);
resetButton.addEventListener("mouseover", handleMouseOver);