// Slideshow

const slideShow = () => {
    for(let i = 0; i <= 5; i++) {
        const div = document.createElement('div');

        div.style.backgroundImage = `url(slideshow/section-1-bg-${i}.jpg)`;

        document.querySelector('.slideshow').appendChild(div);
} 
}

slideShow();

// End of slideshow