/*
    Custom script to animate the greeting text with a typewritter style.
    
    Author: Andrew Eden (github.com/aeden2019)
    
*/


var startText = "Hi, my name is Burger";
var endText = "Hi, my name is Andrew.";
var replacement = "Burger"
var index = 0;
var cursorVisible = true;
var cursorInterval;
var cursor = cursorVisible ? '|' : '';

function type() {
    // Iterate through the full text
    if (index <= startText.length) {
        document.getElementById("typing-text").innerHTML = startText.substring(0, index) + cursor;
        index++;
        setTimeout(type, 100);
        adjustContainerWidth();
    // Once the first text is written, run the replacement function
    } else {
        removeText();
    }
}

function removeText() {
    var targetIndex = startText.indexOf(replacement); // Get the location of the word to replace
    // Iterate backwards until the replacement index
    if (index >= targetIndex) {
        document.getElementById("typing-text").innerHTML = startText.substring(0, index) + cursor;
        index--;
        setTimeout(removeText, 100);
        adjustContainerWidth();
    } else {
        replaceText();
    }
}

function replaceText() {
    // Iterate forward through the new word    
    if (index <= endText.length) {
        document.getElementById("typing-text").innerHTML = endText.substring(0, index) + cursor;
        index++;
        setTimeout(replaceText, 100);
        adjustContainerWidth();
    // Blinking cursor 
    } else {
        cursorInterval = setInterval(toggleCursor, 500); // Start blinking cursor
        setTimeout(eraseText, 5000);
    }
}

function toggleCursor() {
    cursorVisible = !cursorVisible;
    var cursor = cursorVisible ? '|' : '';
    document.getElementById("typing-text").innerHTML = endText + cursor;
}

function eraseText() {
    clearInterval(cursorInterval);
    var cursorVisible = true;
    // Iterate backwards until the start
    if (index >= 0) {
        document.getElementById("typing-text").innerHTML = endText.substring(0, index) + cursor;
        index--;
        setTimeout(eraseText, 100);
        adjustContainerWidth();
    // Restart the whole process
    } else {
        type();
    }
}

// Function to dynamically adjust container width based on text width
function adjustContainerWidth() {
    var typingText = document.getElementById("typing-text");
    var container = document.getElementById("typing-container");
    container.style.width = typingText.offsetWidth + "px";
}

window.onload = function() {
    setTimeout(function() {
        type();
    }, 500); // Adjust delay here
}

window.onunload = function() {
    clearInterval(cursorInterval);
}

