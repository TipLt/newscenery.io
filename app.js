/* 
 * Interactive Photo Gallery JavaScript
 * Created by: TipLt
 * Last Updated: 2025-02-17 14:22:29 UTC
 */

function upDate(previewPic) {
    // Log to check the event is triggering (for mouse over or focus)
    console.log("Mouse over or focus event triggered on image with alt: " + previewPic.alt);
    
    // Get the image div once
    const imageDiv = document.getElementById("image");
    
    // Fade out current content
    imageDiv.style.opacity = "0";
    
    // After short delay, update content and fade back in
    setTimeout(() => {
        // Update the text content and background
        imageDiv.textContent = previewPic.alt;
        imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
        
        // Fade back in
        imageDiv.style.opacity = "1";
    }, 200);
}

function undo() {
    // Log to check the event is triggering (for mouse out or blur)
    console.log("Mouse out or blur event triggered");
    
    // Get the image div once
    const imageDiv = document.getElementById("image");
    
    // Fade out current content
    imageDiv.style.opacity = "0";
    
    // After short delay, reset content and fade back in
    setTimeout(() => {
        // Reset the content
        imageDiv.textContent = "Hover over an image below to display here.";
        imageDiv.style.backgroundImage = "none";
        
        // Fade back in
        imageDiv.style.opacity = "1";
    }, 200);
}

// Function to add a custom 'tabfocus' attribute
function addTabFocusAttribute(element) {
    element.setAttribute("data-tabfocus", "true");
    console.log("Tab focus attribute added to image with alt: " + element.alt);
}

// Initialize page function
function initializePage() {
    console.log("Page loaded at: 2025-02-17 14:22:29 UTC by user: TipLt");
    console.log("Initializing tab focus and tabindex on images.");

    // Select all gallery images
    const images = document.querySelectorAll("#gallery img");

    // Add transition style to main image div
    document.getElementById("image").style.transition = "opacity 0.2s ease-in-out";

    // Loop through each image
    images.forEach((img, index) => {
        // Add tabindex
        img.setAttribute("tabindex", "0");
        
        // Add tabfocus attribute
        addTabFocusAttribute(img);
        
        // Add loading optimization
        img.loading = "lazy";
        
        console.log(`Initialized image ${index + 1}: ${img.alt}`);
    });
}

// Attach the initializePage function to the window load event
window.addEventListener("load", initializePage);
