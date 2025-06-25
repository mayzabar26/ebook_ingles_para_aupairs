//Store the selected elements that we are going to use. 
const hamburger = document.querySelector("#myButton");
const navLinks = document.querySelector("#navBar");

//Add a click event listener to the hamburger button
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.textContent = navLinks.classList.contains("open") ? "✖" : "☰";
});

//Function for the current year in the footer
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current_year").textContent = currentYear;
}

//Function for the last modified date
function getLastModified() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
}

// Calling functions
getCurrentYear();
getLastModified();