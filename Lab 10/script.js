document.addEventListener("DOMContentLoaded", function () {
    // Change the text of the paragraph when the button is clicked
    document.getElementById("changeTextBtn").addEventListener("click", function () {
        document.getElementById("message").innerText = "Text changed successfully!";
    });

    // Change the background color of the body when the page is loaded
    document.body.style.backgroundColor = getRandomColor();

    // Append a new paragraph to the container div when the page is loaded
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added dynamically!";
    document.getElementById("container").appendChild(newParagraph);
});

// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
