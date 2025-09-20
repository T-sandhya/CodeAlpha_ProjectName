const displayText = document.getElementById("display-text");

function appendValue(value) {
    if(displayText.innerText === "0" || displayText.innerText === "Error") {
        displayText.innerText = value;
    } else {
        displayText.innerText += value;
    }
}

function clearDisplay() {
    displayText.innerText = "0";
}

function deleteLast() {
    if(displayText.innerText.length <= 1 || displayText.innerText === "Error") {
        displayText.innerText = "0";
    } else {
        displayText.innerText = displayText.innerText.slice(0, -1);
    }
}

function calculateResult() {
    try {
        displayText.innerText = eval(displayText.innerText);
    } catch {
        displayText.innerText = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
    if ((event.key >= 0 && event.key <= 9) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculateResult();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});
