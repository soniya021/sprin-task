document.addEventListener('DOMContentLoaded', function () {
    const swingWrapper = document.querySelector('.swing-container');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    startButton.addEventListener('click', function () {
        swingWrapper.style.animation = 'swing 2s ease-in-out infinite';
    });

    stopButton.addEventListener('click', function () {
        swingWrapper.style.animation = 'none';
        swingWrapper.style.transform = 'rotate(0deg)'; 
    });
});