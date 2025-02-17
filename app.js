

function upDate(previewPic) {
    
    console.log("Mouse over or focus event triggered on image with alt: " + previewPic.alt);
    
    
    const imageDiv = document.getElementById("image");
    
    
    imageDiv.style.opacity = "0";
    

    setTimeout(() => {

        imageDiv.textContent = previewPic.alt;
        imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
        

        imageDiv.style.opacity = "1";
    }, 200);
}

function undo() {
 
    console.log("Mouse out or blur event triggered");
    
 
    const imageDiv = document.getElementById("image");
    
 
    imageDiv.style.opacity = "0";
    
  
    setTimeout(() => {
   
        imageDiv.textContent = "Hover over an image below to display here.";
        imageDiv.style.backgroundImage = "none";
        
   
        imageDiv.style.opacity = "1";
    }, 200);
}


function addTabFocusAttribute(element) {
    element.setAttribute("data-tabfocus", "true");
    console.log("Tab focus attribute added to image with alt: " + element.alt);
}


function initializePage() {
    console.log("Page loaded at: 2025-02-17 14:22:29 UTC by user: TipLt");
    console.log("Initializing tab focus and tabindex on images.");

   
    const images = document.querySelectorAll("#gallery img");

   
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
