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

var text = "Hi, my name is Burger.";
var newText = "Hi, my name is Andrew.";
var index = 0;
var cursorVisible = true;
var cursorInterval;

function type() {
    var cursor = cursorVisible ? '|' : '';
    if (index <= text.length) {
        document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
        index++;
        cursorVisible = !cursorVisible;
        setTimeout(type, 100);
    } else {
        replaceText(); 
    }
}

function replaceText() {
    var currentIndex = text.indexOf("Burger");
    if (currentIndex >= 0) {
        text = text.substring(0, currentIndex) + text.substring(currentIndex + 1);
        document.getElementById("typing-text").innerHTML = text;
        setTimeout(replaceText, 100); // Adjust typing speed here
    } else {
        index = 0; // Reset the index for typing "Andrew"
        text = newText; // Set text to "Hi, my name is Andrew."
        setTimeout(type, 500); // Start typing "Andrew" after a delay
    }
}

function toggleCursor() {
    cursorVisible = !cursorVisible;
    var cursor = cursorVisible ? '|' : '';
    document.getElementById("typing-text").innerHTML = text + cursor;
}

window.onload = function() {
    setTimeout(function() {
        type();
    }, 500); // Adjust delay here
}

window.onunload = function() {
    clearInterval(cursorInterval);
}
