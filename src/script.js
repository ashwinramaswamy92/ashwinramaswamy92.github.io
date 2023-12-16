
document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById('main-container');
    // console.log(container);
    let appendToContainer = ``;
    appendToContainer += `<div id = 'header'> </div>`
    appendToContainer += `<div id = 'main-page' class = 'main'> </div>`
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
        name.textContent = "Ashwin Ramaswamy"; // Change this to your name
        name.className = "name"; // Add a class name for styling

        // Create a p element for your bio
        let bio = document.createElement("p");
        bio.innerHTML = `Hi! I am an interdisciplinary researcher and educator looking to build technological solutions to teaching and learning complex topics in STEM and the social sciences. <br><br> You can find some of my work here.`; // Change this to your bio text
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
        let container = document.getElementById('main-page');

        // Create a container with two columns
        let mainContent = document.createElement("div");
        mainContent.id = "main-content";

        //Create a left column
        let leftColumn = document.createElement("div");
        leftColumn.id = "left-column";

        // Add some headings to the left column as desired
        let leftHeadings = ["Skills"];

        // Add some headings to the left column as desired
        for (var i = 0; i < leftHeadings.length; i++) {

            //Creating a wrapping div for each heading
            let headingDiv = document.createElement("div");
            headingDiv.id = `work-div${i+1}`;
            headingDiv.className = `work-div`;

            // Create a h2 element for each heading
            let heading = document.createElement("h2");
            heading.textContent = leftHeadings[i];
            heading.className = "heading"; // Add a class name for styling


            // Create a ul element for each list of items under each heading
            let list = document.createElement("ul");
            list.className = "list"; // Add a class name for styling
            // Create an array of items for each list
            // Change these to your actual items
            let items = [];
            if (leftHeadings[i] == "Skills") {
                items = ["Quantitative Analysis", "Modelling and Simulation", "Cognitive Science Research", "Serious Games Development", "Educational Content Creation"];
            }
            // Loop through the items array
            for (var j = 0; j < items.length; j++) {
                // Create a li element for each item
                let item = document.createElement("li");
                item.innerHTML = items[j];
                item.className = "item"; // Add a class name for styling
                item.id = `leftItem${j}`
                // Append the item to the list
                list.appendChild(item);
            }

            //Append wrapping div to main content div
            leftColumn.appendChild(headingDiv);

            // Append the heading and the list to the wapping div
            headingDiv.appendChild(heading);
            headingDiv.appendChild(list);
            
        }



        // Create a row flex container for the main content
        let rightColumn = document.createElement("div");
        rightColumn.id = "right-column";        

        // Create an array of headings for the right column
        let rightHeadings = ["Lines of Work"];

        // Add some headings to the right column as desired
        for (var i = 0; i < rightHeadings.length; i++) {

            //Creating a wrapping div for each heading
            let headingDiv = document.createElement("div");
            headingDiv.id = `work-div${i+1}`;
            headingDiv.className = `work-div`;

            // Create a h2 element for each heading
            let heading = document.createElement("h2");
            heading.textContent = rightHeadings[i];
            heading.className = "heading"; // Add a class name for styling

            // Create a ul element for each list of items under each heading
            let list = document.createElement("ul");
            list.className = "list"; // Add a class name for styling
            // Create an array of items for each list
            // Change these to your actual items
            let items = [];
            if (rightHeadings[i] == "Lines of Work") {
                // items = ["Touchy Pinchy Integers", "Social Simulation and Political Polarization", "Electromagnetism Simulation", "Association Trainer Analysis", "Python Notebooks for Beginners", "Coordinate Geometry Game", "Sinusoid Interactive", "Teaching Videos"];
                items = ["<a href = 'Research.html'> Research </a>", "<a href = 'Interactive_Learning_Aids.html'>Interactive Learning Aids", "<a href = 'Teaching.html'>Teaching"]
            } 
        

            // Loop through the items array
            for (var j = 0; j < items.length; j++) {
                // Create a li element for each item
                let item = document.createElement("li");
                item.innerHTML = items[j];
                item.className = "item"; // Add a class name for styling
                item.id = `rightItem${j}`
                // Append the item to the list
                list.appendChild(item);
            }

            //Append wrapping div to main content div
            rightColumn.appendChild(headingDiv);
            // Append the heading and the list to the wapping div

            headingDiv.appendChild(heading);
            headingDiv.appendChild(list);
            
        }
        // Append the main content div to the container
        container.appendChild(mainContent);
        mainContent.appendChild(leftColumn);
        mainContent.appendChild(rightColumn);
    }
      


function buildFooter(){
    let container = document.getElementById('footer');
    let footerHeadings = ["Publications"];

        // Add some headings to the footer as desired
        for (var i = 0; i < footerHeadings.length; i++) {

            //Creating a wrapping div for heading
            let headingDiv = document.createElement("div");
            headingDiv.id = `footer-div${i+1}`;
            headingDiv.className = `footer-div`;

            // Create a h2 element for heading
            let heading = document.createElement("h2");
            heading.textContent = footerHeadings[i];
            heading.className = "heading"; // Add a class name for styling

            // Create a ul element for each list of items under each heading
            let list = document.createElement("ul");
            list.className = "list"; // Add a class name for styling
            // Create an array of items for each list
            // Change these to your actual items
            let items = [];
            if (footerHeadings[i] == "Publications") {
                items = [`Kalvas, F., Ramaswamy, A., Slater, M.D. (2023). <i>Identity Drives Polarization: Advancing the Hegselmann-Krause 
                Model by Identity Groups.</i> In: Squazzoni, F. (eds) Advances in Social Simulation. ESSA 2022. Springer 
                Proceedings in Complexity. Springer, Cham. https://doi.org/10.1007/978-3-031-34920-1_20
                `, 
                `Priyadharshni, E., Ramaswamy, A., Albuquerque, M., Chandrasekharan, S. (2023). <i>Touchy Pinchy Integers: 
                Exploring how students’ embodied interactions with a manipulative interface enhances conceptual 
                understanding of integer operations</i> [In Press, <a href = "https://etsociety.org/t4e2023/">IEEE Conference on Technology for Education (T4E 2023)</a>].`, 
                `Priyadharshni, E., Ramaswamy, A., Albuquerque, M., Chandrasekharan, S. (2023). <i>Embodied Learning of Integer 
                Operations Using a Multitouch Design: Touchy Pinchy Integers.</i> [In Press, <a href = "https://sites.google.com/view/la-reflect/embodiedicce2023"> Embodied@ICCE2023</a>]`];
            } 
            // Loop through the items array
            for (var j = 0; j < items.length; j++) {
                // Create a li element for each item
                let item = document.createElement("li");
                item.innerHTML = items[j];
                item.className = "item"; // Add a class name for styling
                item.id = `footerItem${j}`
                // Append the item to the list
                list.appendChild(item);
            }
    
            //Append wrapping div to main content div
            container.appendChild(headingDiv);
            // Append the heading and the list to the wapping div

            headingDiv.appendChild(heading);
            headingDiv.appendChild(list);
        }
}
