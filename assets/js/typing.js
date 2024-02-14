// Typing effect for the text
var text = "Hi, my name is Andrew.";
var index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 200); // Adjust typing speed here (milliseconds)
    }
}

// Start typing animation when the page loads
window.onload = function() {
    type();
}
