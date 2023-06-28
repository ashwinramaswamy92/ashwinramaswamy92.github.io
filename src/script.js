// Get all the images on the page
let images = document.getElementsByTagName("img");

// Loop through the images
for (let i = 0; i < images.length; i++) {
  
  // Add a click event listener to each image
  images[i].addEventListener("click", function() {
    
    // Get the source of the clicked image
    let src = this.src;
    
    // Create a new image element with the same source
    let newImage = document.createElement("img");
    newImage.src = src;
    
    // Create a new div element to hold the new image
    let newDiv = document.createElement("div");
    newDiv.className = "lightbox"; // Add a class name for styling
    newDiv.appendChild(newImage); // Append the new image to the new div
    
    // Append the new div to the body of the document
    document.body.appendChild(newDiv);
    
    // Add a click event listener to the new div
    newDiv.addEventListener("click", function() {
      
      // Remove the new div from the document
      this.remove();
      
    });
    
  });
  
}
