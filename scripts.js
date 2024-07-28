// Light/Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Light/Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '80px';
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
        background-color: #222;
        color: #fff;
    }

    .dark-mode nav, .dark-mode footer {
        background-color: #111;
    }

    .dark-mode .project, .dark-mode #about, .dark-mode #contact {
        background-color: #333;
        color: #fff;
    }

    .dark-mode input, .dark-mode textarea, .dark-mode button {
        background-color: #bdbbbb;
        color: #fff;
        border: 1px solid #555;
    }
`;
document.head.appendChild(darkModeStyles);
