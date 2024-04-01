document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var nav = document.querySelector('.outside-nav');
    
    if (scrollPosition > 500) {
      nav.style.backgroundColor = '#6e6299';

    } else {
      nav.style.backgroundColor = '#c3b4ff';
    }
});

window.addEventListener('scroll', function() {
    var elementToShow = document.querySelector('.tt');
    var elementToHide = document.querySelector('.list');

    // Check if the user has scrolled down at least 100px
    if (window.scrollY > 500) {
        elementToShow.style.transform = 'translateY(0px)'; // Slide inside-nav down
        elementToHide.style.transform = 'translateY(-50px)';
        
    } else {
        elementToShow.style.transform = 'translateY(100px)'; // Slide inside-nav down
        elementToHide.style.transform = 'translateY(0)';
    }
});