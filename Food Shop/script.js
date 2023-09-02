const icons = document.querySelectorAll('.section-1-icons i');

let counter = 1;

setInterval(() => {
    counter ++;        //   on every execution of this function means on each change, this counter will be increase by 1. when it is greater than the length of the icons, it will be set to 1 again. Then it will display the first icon.

    const icon = document.querySelector('.section-1-icons .change');
    //   this will select the icon which has the class change in it. 
    
    icon.classList.remove('change');

    if(counter > icons.length){
        icons[0].classList.add('change');
        counter = 1;

    }else{
        icon.nextElementSibling.classList.add('change');
        //  this will select the next element of the icon which has the class change in it.
    }

}, 1000)