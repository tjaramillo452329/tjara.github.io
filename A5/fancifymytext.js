// Thomas Jaramillo-Ochoa
// CSC 193A Assignment 5
// 12/03/2023

// Function to make text bigger
function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Function to apply styles based on radio button selection
function applyStyles() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        // Set styles for FancyShmancy
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else {
        // Reset styles for BoringBetty
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}

// Function to uppercase text and add "-Moo" to the last word of each sentence
function makeMoo() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;

    // Uppercase text
    textInput.value = text.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    var sentences = text.split('.');
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }

    // Join sentences and update text area
    textInput.value = sentences.join('. ');
}
