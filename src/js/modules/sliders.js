const slider = (sliders, direction, prev, next) => {
    let slidesIndex = 1,
        paused = false;
    const items = document.querySelectorAll(sliders);
    
    function showSlides(n) {
        if (n > items.length) {
            slidesIndex = 1;
          }

        if (n < 1) {
            slidesIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slidesIndex - 1].style.display = 'block';
    }

    showSlides(slidesIndex);

    function plusSlides(n) {
        showSlides(slidesIndex += n);
    }

    try {
       const prevBtn = document.querySelector(prev),
             nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slidesIndex - 1].classList.remove('slideInLeft');
            items[slidesIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slidesIndex - 1].classList.remove('slideInRight');
            items[slidesIndex - 1].classList.add('slideInLeft');
        });
    } catch(e){}

    function activateAnimation() {
        if (direction === 'vertical') {
           paused = setInterval(function(){
                plusSlides(1);
                items[slidesIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
           paused = setInterval(function() {
                plusSlides(1);
                items[slidesIndex - 1].classList.remove('slideInRight');
                items[slidesIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default slider;