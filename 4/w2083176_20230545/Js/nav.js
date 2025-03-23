// Get the necessary elements
const dropdown_head = document.getElementById("dropdown-head");
const dropdown = document.getElementById("dropdown");

const burger = document.getElementById("burger");
const nav_link = document.getElementById("nav-link");

// Toggle dropdown menu visibility on click
dropdown_head.addEventListener("click", () => {
    dropdown.classList.toggle("nav-hide");
});

// Toggle navigation links visibility on burger menu click
burger.addEventListener("click", () => { 
    nav_link.classList.toggle("nav-show");
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-head')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('nav-hide')) {
                openDropdown.classList.add('nav-hide');
            }
        }
    }
}