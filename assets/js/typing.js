// // Typing effect for the text
// var text = "Hi, my name is Andrew.";
// var index = 0;
// var cursorVisible = true; // Initial cursor state
// var cursorInterval; // Store the interval ID

// function type() {
//     var cursor = cursorVisible ? '|' : ''; // Determine cursor visibility
//     if (index <= text.length) {
//         document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
//         index++;
//         cursorVisible = !cursorVisible; // Toggle cursor visibility
//         setTimeout(type, 100); // Adjust typing speed here (milliseconds)
//     } else {
//         cursorInterval = setInterval(toggleCursor, 500); // Start blinking cursor
//     }
// }

// function toggleCursor() {
//     cursorVisible = !cursorVisible; // Toggle cursor visibility
//     var cursor = cursorVisible ? '|' : ''; // Determine cursor visibility
//     document.getElementById("typing-text").innerHTML = text + cursor;
// }

// // Start typing animation with delay when the page loads
// window.onload = function() {
//     setTimeout(function() {
//         type();
//     }, 500); // Adjust delay here (milliseconds)
// }

// // Clear the cursor interval when the page unloads
// window.onunload = function() {
//     clearInterval(cursorInterval);
// }




// var text = "Hi, my name is Burger.";
// var newText = "Hi, my name is Andrew.";
// var index = 0;
// var cursorVisible = true;
// var cursorInterval;

// function type() {
//     var cursor = cursorVisible ? '|' : '';
//     if (index <= text.length) {
//         document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
//         index++;
//         cursorVisible = !cursorVisible;
//         setTimeout(type, 100);
//     } else {
//         replaceText(); 
//     }
// }

// function replaceText() {
//     var currentIndex = text.indexOf("Burger");
//     if (currentIndex >= 0) {
//         var removedText = text.substring(0, currentIndex) + text.substring(currentIndex + 1);
//         document.getElementById("typing-text").innerHTML = removedText;
//         text = removedText;
//         setTimeout(replaceText, 100); // Adjust typing speed here
//     } else if (text === "Hi, my name is ") {
//         index = 0; // Reset the index for typing "Andrew"
//         text = newText; // Set text to "Hi, my name is Andrew."
//         setTimeout(type, 500); // Start typing "Andrew" after a delay
//     } else {
//         text = "Hi, my name is "; // Start removing "Burger" from the end
//         setTimeout(replaceText, 500); // Wait before starting to remove "Burger"
//     }
// }

// function toggleCursor() {
//     cursorVisible = !cursorVisible;
//     var cursor = cursorVisible ? '|' : '';
//     document.getElementById("typing-text").innerHTML = text + cursor;
// }

// window.onload = function() {
//     setTimeout(function() {
//         type();
//     }, 500); // Adjust delay here
// }

// window.onunload = function() {
//     clearInterval(cursorInterval);
// }




var startText = "Hi, my name is Burger";
//var oldWord = "Burger";
//var replacedWord = "Andrew."
var endText = "Hi, my name is Andrew.";
var replacement = "Burger"
var index = 0;
var cursorVisible = true;
var cursorInterval;

function type() {
    var cursor = cursorVisible ? '|' : '';
    // Iterate through the full text
    if (index <= startText.length) {
        document.getElementById("typing-text").innerHTML = startText.substring(0, index) + cursor;
        index++;
        cursorVisible = !cursorVisible;
        setTimeout(type, 100);
    // Once the first text is written, run the replacement function
    } else {
        removeText(); 
    }
}

function removeText() {
    var targetIndex = startText.indexOf(replacement); // Get the location of the word to replace
    // Iterate backwards until the replacement index
    if (index > targetIndex) {
        document.getElementById("typing-text").innerHTML = startText.substring(0, index) + cursor;
        index--;
        cursorVisible = !cursorVisible;
        setTimeout(type, 100);
    } else {
        replaceText();
    }
}

function replaceText() {
    // Iterate forward through the new word    
    if (index <= endText.length) {
        document.getElementById("typing-text").innerHTML = endText.substring(0, index) + cursor;
        index++;
        cursorVisible = !cursorVisible;
        setTimeout(type, 100);
    // Blinking cursor 
    } else {
        cursorInterval = setInterval(toggleCursor, 500); // Start blinking cursor
    }
}

function toggleCursor() {
    cursorVisible = !cursorVisible;
    var cursor = cursorVisible ? '|' : '';
    document.getElementById("typing-text").innerHTML = endText + cursor;
}

window.onload = function() {
    setTimeout(function() {
        type();
    }, 500); // Adjust delay here
}

window.onunload = function() {
    clearInterval(cursorInterval);
}

