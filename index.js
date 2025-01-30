const video = document.querySelector('video');
const parallaxContainer = document.querySelector('.video-container');
const content = document.querySelector('#history-section');
const scrollIndicator = document.querySelector('.scroll-indicator');


console.log(video);
console.log(parallaxContainer);
console.log(content);
setInterval(() => {
    console.log(window.scrollY);
    
}, 500);


function handleScroll(e) {
  const nigga = e.deltaY;

    if (nigga > 0) {
        scrollIndicator.style.display = 'none';
        content.style.display = 'grid'; 
        video.style.transform = `scale(1.20)`;
        video.style.filter = `blur(7px) brightness(0.1)`;
    } 
    else if (nigga < 0 && window.scrollY == 0) {
        scrollIndicator.style.display = 'block';
        content.style.display = 'none';
        video.style.transform = `scale(1)`;
        video.style.filter = `blur(0px) brightness(1)`;
    }
}

// Listen for the 'wheel' event (scrolling)
window.addEventListener('wheel', handleScroll);
window.addEventListener('touchstart', console.log("akkkakakaka"));
