// // Typing effect for the text
// var text = "Let's keep it going.";
// var index = 0;
// var cursor = '|'; // Initial cursor

// function type() {
//     if (index <= text.length) {
//         document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
//         index++;
//         setTimeout(type, 100); // Adjust typing speed here (milliseconds)
//     } else {
//         setInterval(toggleCursor, 500); // Start blinking cursor
//     }
// }

// function toggleCursor() {
//     cursor = (cursor === '|') ? '' : '|'; // Toggle cursor
//     document.getElementById("typing-text").innerHTML = text + cursor;
// }

// // Start typing animation with delay when the page loads
// window.onload = function() {
//     setTimeout(function() {
//         type();
//     }, 500); // Adjust delay here (milliseconds)
// }

// Typing effect for the text
var text = "Now I want the cursor to always blink.";
var index = 0;
var cursorVisible = true; // Initial cursor state

function type() {
    var cursor = cursorVisible ? '|' : ''; // Determine cursor visibility
    if (index <= text.length) {
        document.getElementById("typing-text").innerHTML = text.substring(0, index) + cursor;
        index++;
        cursorVisible = !cursorVisible; // Toggle cursor visibility
        setTimeout(type, 100); // Adjust typing speed here (milliseconds)
    } else {
        setInterval(toggleCursor, 500); // Start blinking cursor
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

