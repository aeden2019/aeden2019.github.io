// Typing effect for the text
var text = "Hi, my name is Andrew.";
var index = 0;
var cursor = '|'; // Cursor character

function type() {
    if (index <= text.length) { 
        document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
        index++;
        setTimeout(type, 100); // Adjust typing speed here (milliseconds)
    }
}

// Start typing animation with delay when the page loads
window.onload = function() {
    setTimeout(function() {
        type();
    }, 500); // Adjust delay here (milliseconds)
}


