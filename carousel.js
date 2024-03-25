const track= document.querySelector('.carousel_track');
const slides= Array.from(track.children);
const nextButton= document.querySelector('.button_right');
const prevButton= document.querySelector('.button_left');
const slideWidth= slides[0].getBoundingClientRect().width;
slides.forEach((slide,index)=>{
    slide.style.left=slideWidth*index+'px';
});
const setSlidePosition = (slide,index)=>{
    slide.style.left=slideWidth*index+'px';
}
slides.forEach(setSlidePosition);

const moveToSlide=(track,currentSlide,targetSlide) =>{
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}
prevButton.addEventListener('click',e=>{
    const  currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track,currentSlide,prevSlide);
});

nextButton.addEventListener('click',e=>{
    const  currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
   moveToSlide(track,currentSlide,nextSlide);
});

