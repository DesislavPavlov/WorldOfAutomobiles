const video = document.querySelector('video');
const parallaxContainer = document.querySelector('.video-container');
const content = document.querySelector('#history-section');
const scrollIndicator = document.querySelector('.scroll-indicator');

// Listen for scrolling
// Desktop
let readyForHiding = true;
hideInfo();
document.addEventListener('wheel', handleWheel);

function handleWheel(e) {
    const deltaY = e.deltaY;
  
    if (deltaY > 0) {
        revealInfo();
    } 
    else if (deltaY < 0 && content.scrollTop == 0) {
        hideInfo();
    }
}

// Touchscreen
let startY = 0;
document.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
});

document.addEventListener("touchmove", (e) => {
    let deltaY = e.touches[0].clientY;
    
    if (deltaY < startY) {
        revealInfo();
    } else if (deltaY > startY && content.scrollTop == 0) {
        hideInfo();
    }
});

scrollIndicator.addEventListener("touchstart", () => {
    revealInfo();
});

function revealInfo() {
    readyForHiding = false;

    scrollIndicator.style.display = 'none';
    content.style.display = 'grid'; 
    video.style.transform = `scale(1.20)`;
    video.style.filter = `blur(7px) brightness(0.1)`;
}

function hideInfo() {
    if (readyForHiding) {
        scrollIndicator.style.display = 'block';
        content.style.display = 'none';
        video.style.transform = `scale(1)`;
        video.style.filter = `blur(0px) brightness(1)`;
    }
    else {
        setTimeout(() => {
            readyForHiding = true;
        }, 300);
    }
}