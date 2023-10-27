const toggleButton = document.getElementById("toggleButton");
const textToToggle = document.getElementById("textToToggle");

const toggleButton1 = document.getElementById("toggleButton1");
const textToToggle1= document.getElementById("textToToggle1");

const toggleButton2 = document.getElementById("toggleButton2");
const textToToggle2= document.getElementById("textToToggle2");

const toggleButton3 = document.getElementById("view-more");
const container= document.getElementById("more");

// Add a click event listener to the button
toggleButton.addEventListener("click", function() {
    if (textToToggle.style.display === "none") {
        textToToggle.style.display = "block"; // Show the text
    } else {
        textToToggle.style.display = "none"; // Hide the text
    }
});

toggleButton1.addEventListener("click", function() {
    if (textToToggle1.style.display === "none") {
        textToToggle1.style.display = "block"; // Show the text
    } else {
        textToToggle1.style.display = "none"; // Hide the text
    }
});

toggleButton2.addEventListener("click", function() {
    if (textToToggle2.style.display === "none") {
        textToToggle2.style.display = "block"; // Show the text
    } else {
        textToToggle2.style.display = "none"; // Hide the text
    }
});

//code for view more button

toggleButton3.addEventListener("click", function() {
    if (container.style.display === "none") {
        container.style.display = "block"; // Show the text
    } else {
        container.style.display = "none"; // Hide the text
    }
});

