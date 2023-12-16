
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById('main-container');
    // console.log(container);
    let appendToContainer = ``;
    appendToContainer += `<div id = 'header'> </div>`
    appendToContainer += `<div id = 'teaching-main-page' class = 'main'> </div>`
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
    name.textContent = "Teaching"; // Change this to your name
    name.className = "name"; // Add a class name for styling

    // Create a p element for your bio
    let bio = document.createElement("p");
    bio.innerHTML = `You can find some of my teaching samples <a href = 'https://www.youtube.com/@ashwinramaswamy4059/videos'>here</a>.`; // Change this to your bio text
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
    
}


function buildFooter(){
    
}