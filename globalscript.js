const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-icon');
const rightOffset = sidebar.style.transform;


menuBtn.addEventListener("click", () => {
    document.body.style.overflow = 'hidden';
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.style.transform = 'translateX(0)';
        sidebar.style.opacity = '1';
    }, 10);
});

closeBtn.addEventListener("click", () => {
    sidebar.style.transform = rightOffset;
    sidebar.style.opacity = '0.1';
    setTimeout(() => {
        sidebar.style.display = 'none';
        document.body.style.overflow = '';
    }, 600);
});