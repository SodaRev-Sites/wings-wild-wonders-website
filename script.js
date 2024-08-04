window.onload = function() {
    alert("Welcome to the Wings - Wild Wonders Fan Website!");
};

function changeBackgroundColor() {
    const container = document.querySelector('.container');
    const colors = ['#00f', '#f00', '#0f0', '#0ff', '#f0f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundColor = randomColor;
}

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        link.style.color = '#ff4500'; // Change color on hover
    });
    link.addEventListener('mouseout', function() {
        link.style.color = ''; // Revert to original color
    });
});

const container = document.querySelector('.container');
const button = document.createElement('button');
button.textContent = 'Change Background Color';
button.onclick = changeBackgroundColor;
container.appendChild(button);
