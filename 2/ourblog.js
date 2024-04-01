window.addEventListener('scroll', function() {
    var s = document.querySelector('.s-nav');

    if (window.scrollY > 347) {        
        s.style.opacity = 1; 
        
    } else {     
        s.style.opacity = 0; 
    }
});