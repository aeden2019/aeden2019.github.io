// Typing effect for the text
var text = "Hi, my name is Andrew.";
var index = 0;
var cursorVisible = true; // Initial cursor state
var cursorInterval; // Store the interval ID

function type() {
    var cursor = cursorVisible ? '|' : ''; // Determine cursor visibility
    if (index <= text.length) {
        document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
        index++;
        cursorVisible = !cursorVisible; // Toggle cursor visibility
        setTimeout(type, 100); // Adjust typing speed here (milliseconds)
    } else {
        cursorInterval = setInterval(toggleCursor, 500); // Start blinking cursor
    }
}

function toggleCursor() {
    cursorVisible = !cursorVisible; // Toggle cursor visibility
    var cursor = cursorVisible ? '|' : ''; // Determine cursor visibility
    document.getElementById("typing-text").innerHTML = text + cursor;
}

// Start typing animation with delay when the page loads
window.onload = function() {
    setTimeout(function() {
        type();
    }, 500); // Adjust delay here (milliseconds)
}

// Clear the cursor interval when the page unloads
window.onunload = function() {
    clearInterval(cursorInterval);
}
