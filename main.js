// Center elements using CSS
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';

const noButton = document.getElementById('noButton');

// Function to get random position within viewport
function getRandomPosition() {
    const viewportWidth = window.innerWidth - noButton.offsetWidth;
    const viewportHeight = window.innerHeight - noButton.offsetHeight;
    
    const randomX = Math.floor(Math.random() * viewportWidth);
    const randomY = Math.floor(Math.random() * viewportHeight);
    
    return { x: randomX, y: randomY };
}

// Move the no button when hovered
noButton.addEventListener('mouseover', () => {
    const newPosition = getRandomPosition();
    noButton.style.position = 'fixed';
    noButton.style.left = newPosition.x + 'px';
    noButton.style.top = newPosition.y + 'px';
});

// Handle yes button click
document.getElementById('yesButton').addEventListener('click', () => {
    alert('awie i love you too! 😊');
});
