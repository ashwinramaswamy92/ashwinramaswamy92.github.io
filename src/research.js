
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById('main-container');
    // console.log(container);
    let appendToContainer = ``;
    appendToContainer += `<div id = 'header'> </div>`
    appendToContainer += `<div id = 'research-main-page' class = 'main'> </div>`
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
    name.textContent = "Research"; // Change this to your name
    name.className = "name"; // Add a class name for styling

    // Create a p element for your bio
    let bio = document.createElement("p");
    bio.innerHTML = `My research interests lie at the intersection of cognition, learning, and technology. I also enjoy computational modelling of psychological phenomena. 
    <br>So far this has taken two distinct themes: (a) the study of how technology`; // Change this to your bio text
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

    let container = document.getElementById('research-main-page');

    // Create a container with two columns
    let mainContent = document.createElement("div");
    mainContent.id = "interactives-main-content";

    let headings = ["Social Simulation to study Political Polarization",  
    "Cognitive Characterization of Association Training Apps"];

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
            if (headings[i] == "Cognitive Characterization of Association Training Apps") {
                items.push(`<b>Description:</b> Independant project. Aimed at building and testing models of association learning via e-learning tools such as quizzing apps.  The goal is to help arrive at optimal design parameters for training apps similar to duolingo.<br> 
                 <a href = 'https://github.com/ashwinramaswamy92/Association-Trainer/blob/20b0092cb61e75ed5a69e005ac1307fb4c379991/Quiz%20Theory.ipynb'>Link</a></b>`)
            } else if(headings[i] == "Social Simulation to study Political Polarization"){
                items.push(`<b>Description:</b> In this modelling project we use Bounded-Confidence models of opinion dynamics to study the role of media, social media, and social identity on political polarization.<br>
                `)
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