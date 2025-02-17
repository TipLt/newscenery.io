

function upDate(previewPic) {
  // Log to check the event is triggering (for mouse over or focus)
  console.log("Mouse over or focus event triggered on image with alt: " + previewPic.alt);
  
  // Update the text content to the alt text of the hovered/focused image
  var imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  
  // Update the background image based on the hovered/focused image's source
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  // Log to check the event is triggering (for mouse out or blur)
  console.log("Mouse out or blur event triggered");
  
  // Reset the text content and background image to their original states
  var imageDiv = document.getElementById("image");
  imageDiv.textContent = "Hover over an image below to display here.";
  imageDiv.style.backgroundImage = "url('')";
}

// New function to add a custom 'tabfocus' attribute
function addTabFocusAttribute(element) {
  // For demonstration, we set a data attribute "data-tabfocus"
  element.setAttribute("data-tabfocus", "true");
  console.log("Tab focus attribute added to image with alt: " + element.alt);
}

// onload event to initialize the page
function initializePage() {
  console.log("Page loaded at: 2025-02-17 14:05:19 UTC by user: TipLt");
  console.log("Initializing tab focus and tabindex on images.");

  // Select all images inside the gallery div
  var images = document.querySelectorAll("#gallery img");

  // Loop through each image and add tabindex and the tabfocus attribute
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    addTabFocusAttribute(images[i]);
    console.log("Added tabindex to image with alt: " + images[i].alt);
  }
}

// Attach the initializePage function to the window load event
window.addEventListener("load", initializePage);
