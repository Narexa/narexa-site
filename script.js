let currentPage = 0;
const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');
const navLinks = document.querySelectorAll('.navbar a');
let isScrolling = false;



window.onload = () => {
    fadeInPage(currentPage);
    updateIndicators();
    updateNavLinks();
};

function transitionToPage(pageIndex) {
    if (isScrolling || pageIndex === currentPage) return;
    isScrolling = true;

    pages[currentPage].style.opacity = '0';

    setTimeout(() => {
        pages[pageIndex].style.opacity = '1';
        currentPage = pageIndex;
        updateIndicators();
        updateNavLinks();
        isScrolling = false;
    }, 500);
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        transitionToPage((currentPage + 1) % pages.length);
    } else {
        transitionToPage((currentPage - 1 + pages.length) % pages.length);
    }
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const targetPage = Array.from(dots).indexOf(e.target);
        transitionToPage(targetPage);
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = Array.from(navLinks).indexOf(link);
        transitionToPage(targetPage);
    });
});

function updateIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentPage].classList.add('active');
}

function updateNavLinks() {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[currentPage].classList.add('active');
}

function fadeInPage(pageIndex) {
    pages[pageIndex].style.opacity = '1';
}
