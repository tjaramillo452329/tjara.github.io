// Thomas Jaramillo-Ochoa
// CSC 193A
// A6





(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    // Add event listener for the "Encrypt-It!" button
    document.getElementById("encrypt-it").addEventListener("click", handleClick);

    // Add event listener for the "Reset" button
    document.getElementById("reset").addEventListener("click", handleReset);

    console.log("Window loaded!");
  }

  /**
   * Handles the click event for the "Encrypt-It!" button.
   */
  function handleClick() {



    // Get the text from the textarea
    var inputText = document.getElementById("input-text").value;

    // Encrypt the text using a basic shift cipher
    var encryptedText = shiftCipher(inputText);

    // Display the encrypted text in the result paragraph
    document.getElementById("result").textContent = encryptedText;
    console.log("Button clicked!");



  }

  /**
   * Handles the click event for the "Reset" button.
   * Clears the inner HTML of the input-text.
   */
  function handleReset() {
    document.getElementById("input-text").value = "";

    // Clear the result when resetting
    document.getElementById("result").textContent = ""; 
  }



// Shift cipher helper function
/**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}

// Helper function to check if a character is a letter
function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}



})();
