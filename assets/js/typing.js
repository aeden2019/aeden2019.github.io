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
        //cursorVisible = !cursorVisible;
        setTimeout(type, 100);
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
        //cursorVisible = !cursorVisible;
        setTimeout(removeText, 100);
    } else {
        replaceText();
    }
}

function replaceText() {
    // Iterate forward through the new word    
    if (index <= endText.length) {
        document.getElementById("typing-text").innerHTML = endText.substring(0, index) + cursor;
        index++;
        //cursorVisible = !cursorVisible;
        setTimeout(replaceText, 100);
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
    // Restart the whole process
    } else {
        type();
    }
}

window.onload = function() {
    setTimeout(function() {
        type();
    }, 500); // Adjust delay here
}

window.onunload = function() {
    clearInterval(cursorInterval);
}

