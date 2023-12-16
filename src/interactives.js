
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById('main-container');
    // console.log(container);
    let appendToContainer = ``;
    appendToContainer += `<div id = 'header'> </div>`
    appendToContainer += `<div id = 'interactives-main-page' class = 'main'> </div>`
    appendToContainer += `<div id = 'footer'> </div>`
    container.innerHTML = appendToContainer;

    buildHeader();
    buildMain();
    buildFooter();
});

function buildHeader(){

    let container = document.getElementById('header');
    // Create a flex container for the header content
    let headerContent = document.createElement("div");
    headerContent.className = "header-content"; // Add a class name for styling

    //Wapping div for photo
    
    let photoDiv = document.createElement("div");
    photoDiv.className = "photo-div"; // Add a class name for styling


    // Create an image element for your photo
    let photo = document.createElement("img");
    photo.src = "images/photo.jpg"; // Change this to your photo source
    photo.alt = "Ashwin"; // Change this to your photo alt text
    photo.className = "photo"; // Add a class name for styling

    // Create a div element for your name and bio
    let nameBio = document.createElement("div");
    nameBio.className = "name-bio"; // Add a class name for styling

    // Create a h1 element for your name
    let name = document.createElement("h1");
    name.textContent = "Interactives for Learning"; // Change this to your name
    name.className = "name"; // Add a class name for styling

    // Create a p element for your bio
    let bio = document.createElement("p");
    bio.innerHTML = `I began developing virtual manipulatives and learning aids for fun during the 2020 lockdown. <a href = "https://www.youtube.com/@TheCodingTrain">Daniel Schiffman's amazing p5js tutorials</a> were a huge inspiration.`; // Change this to your bio text
    bio.className = "bio"; // Add a class name for styling

    // Append the elements to the header content div
    headerContent.appendChild(photoDiv);
    photoDiv.appendChild(photo);
    headerContent.appendChild(nameBio);
    nameBio.appendChild(name);
    nameBio.appendChild(bio);

    // Append the header content div to the container
    container.appendChild(headerContent);

}


function buildMain(){
    
    let container = document.getElementById('interactives-main-page');

    // Create a container with two columns
    let mainContent = document.createElement("div");
    mainContent.id = "interactives-main-content";

    let headings = ["Touchy-Pinchy Integers",  
    "Electromagnetism Simulation (In Development)",
     "Python Notebooks for Beginners", 
    "Coordinate Geometry Game (on hold)", 
    "Sine Interactive (on hold)"];

        // Add some headings to the footer as desired
        for (var i = 0; i < headings.length; i++) {

            //Creating a wrapping div for heading
            let headingDiv = document.createElement("div");
            headingDiv.id = `main-div${i+1}`;
            headingDiv.className = `main-div`;

            // Create a h2 element for heading
            let heading = document.createElement("h2");
            heading.textContent = headings[i];
            heading.className = "heading"; // Add a class name for styling

            // Create a ul element for each list of items under each heading
            let list = document.createElement("ul");
            list.className = "list"; // Add a class name for styling
            // Create an array of items for each list
            // Change these to your actual items
            let items = [];
            if (headings[i] == "Touchy-Pinchy Integers") {
                items.push(`<b>Description:</b> Children and adults find concepts related to integers challenging because they must re-interpret arithmetic operations in new light.
                Touchy Pinchy Integers is a touchscreen-based application for a learning intervention for 6th and 7th standard students.
                The design is based on the theory of embodied cognition. Developed for Learning Sciences Research Group, HBCSE Mumbai.<br>
                <b><a href = 'https://www.youtube.com/shorts/mqJByJgrwgY'>Tutorial Video (watch this first)</a> | <a href = 'https://lsr.hbcse.tifr.res.in/touchy-pinchy-integers/'>Link</a></b>`)
            } else if(headings[i] == "Electromagnetism Simulation (In Development)"){
                items.push(`<b>Description:</b> A virtual manipulative to help aid learning of a complex high-school topic in physics. My first time programming a 3D learning design.<br>
                Link Unavailable Currently</b>`)
            } else if(headings[i] == "Python Notebooks for Beginners"){
                items.push(`<b>Description:</b> An interactive set of notebooks to aid absolute beginners to programming learn some Python. Inspired by <a href = 'https://academy.neuromatch.io/'>Neuromatch Academy</a>.<br>
                <a href = 'https://github.com/ashwinramaswamy92/Python-Tutorials'>Link</a></b>`);
            } else if(headings[i] == "Coordinate Geometry Game (on hold)"){
                items.push(`<b>Description:</b> A virtual coordinate system with levels to guide learning. I made this in p5js before I realized that Geogebra exists.<br>
                <a href = 'https://ashwinramaswamy92.github.io/linesInterventionDemo/'>Link</a></b>`);
            } else if(headings[i] == "Sine Interactive (on hold)"){
                items.push(`<b>Description:</b> An interactive aid to help visualize the unit-circle interpretation of the sine function. This buggy prototype was envisioned as part of an interactive learning textbook for high-school mathematics. Someday it will be closer to finished. Some day.<br>
                <a href = 'https://ashwinramaswamy92.github.io/Sine-Interactive/'>Link</a></b>`);
            }



            // Loop through the items array
            for (var j = 0; j < items.length; j++) {
                // Create a li element for each item
                let item = document.createElement("p");
                item.innerHTML = items[j];
                item.className = "item"; // Add a class name for styling
                item.id = `Item${j}`
                // Append the item to the list
                list.appendChild(item);
            }
    
            //Append wrapping div to main content div
            container.appendChild(mainContent)
            mainContent.appendChild(headingDiv);
            // Append the heading and the list to the wapping div

            headingDiv.appendChild(heading);
            headingDiv.appendChild(list);
        }

}


function buildFooter(){
    
}