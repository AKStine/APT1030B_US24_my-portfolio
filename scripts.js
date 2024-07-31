// Light/Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌤 | 🌙';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark Mode Styles
document.body.classList.add('light-mode');
const darkModeStyles = document.createElement('style');
darkModeStyles.textContent = `
    .dark-mode {
        background-color: #000;
        color: #fff;
    }

    .dark-mode nav, .dark-mode footer {
        background-color: #2D2D2D;
    }

    .dark-mode .project, .dark-mode #about, .dark-mode #contact {
        background-color: #1C1C1C;
        color: #808080;
    }

    .dark-mode input, .dark-mode textarea, .dark-mode button {
        background-color: #242424;
        color: #fff;
        border: 1px solid #2d2d2d;
    }
`;
document.head.appendChild(darkModeStyles);

//Book a Discovery Call Widget
document.getElementById('toggle-discovery').addEventListener('click', function () {
    var widget = document.getElementById('discovery-widget');
    widget.classList.toggle('minimized');
    var content = widget.querySelector('.discovery-content');
    if (widget.classList.contains('minimized')) {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});

//Software Proficiencies Slider
const slider = document.querySelector('.slider-track');
let isHovered = false;

slider.addEventListener('mouseover', () => {
    isHovered = true;
    slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
    isHovered = false;
    slider.style.animationPlayState = 'running';
});

window.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.site-header');
    
    // Check if on the landing page and set full opacity
    if (window.location.pathname === '/index.html') {
        header.classList.add('full-opacity');
    }
    
    // Optionally, you can add scroll behavior to change opacity dynamically
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.remove('full-opacity');
        } else {
            header.classList.add('full-opacity');
        }
    });
});

// Get the button
var scrollToTopButton = document.getElementById("scrollToTop");

// Show the button when user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        navbarToggler.classList.toggle('active');
    });
});
