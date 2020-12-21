let carousel = document.querySelector('.carousel');
let quantSlides = document.querySelectorAll('.carouselSlide').length;
let carouselFrame = document.querySelector('.carouselFrame');
let mobileQuery = window.matchMedia('(max-width: 1050px)');
let i = 1;
let xStart = 0;



function setHeight(query){
    if(query.matches && getDeviceType()=='mobile') {
        resize();
        window.addEventListener('resize', resize);
    } else {
        carousel.style.height = 'auto';
        window.removeEventListener('resize', resize);
    }
}

function resize() {
    carousel.style.height = carousel.offsetWidth + 'px';
    carouselFrame.scrollLeft = 0;
    i = 1;
}


setHeight(mobileQuery);
mobileQuery.addEventListener('change', setHeight);



function scrollNext() {
    if(i < quantSlides){
        i++;
        carouselFrame.scrollLeft = carousel.offsetWidth * (i-1);
    } else {
        carouselFrame.scrollLeft = 0;
        i = 1;
    }
}
function scrollPrev() {
    console.log('prev');
    if(i == 1) {
        carouselFrame.scrollLeft = carousel.offsetWidth * quantSlides;
        i = quantSlides;
    } else {
        i--;
        carouselFrame.scrollLeft = carousel.offsetWidth * (i-1);
        
    }
}

document.querySelector('.carouselPrev').addEventListener('click', scrollPrev);
document.querySelector('.carouselNext').addEventListener('click', scrollNext);


carouselFrame.addEventListener('mousedown', (event) => {
    xStart = event.offsetX;
});
carouselFrame.addEventListener('mouseup', (event) => {
    if(event.offsetX > xStart){
        scrollPrev();
    } else {
        scrollNext();
    }
});
carouselFrame.addEventListener('touchstart', (event) => {
    xStart = event.changedTouches[0].clientX;
});
carouselFrame.addEventListener('touchend', (event) => {
    if(event.changedTouches[0].clientX > xStart){
        scrollPrev();
    } else {
        scrollNext();
    }
});