// Typing effect for the text
var text = "Hi, my name is Andrew.";
var index = 0;
var cursorVisible = true;

function type() {
    if (index <= text.length) { 
        var cursor = cursorVisible ? '|' : '';
        document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
        cursorVisible = !cursorVisible;
        index++;
        setTimeout(type, 100); // Adjust typing speed here (milliseconds)
    }
}

// Start typing animation with delay when the page loads
window.onload = function() {
    setTimeout(function() {
        type();
    }, 1500); // Adjust delay here (milliseconds)
}

