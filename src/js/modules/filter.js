const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');
    
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeOut');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };



    function setEvent(btn, nameMark) {
        const buttons = document.querySelector(btn),
              markers = document.querySelectorAll(nameMark);
        
        buttons.addEventListener('click', () => {
            if (!nameMark) {
                typeFilter();
            } else {
                typeFilter(markers);
            }
        });
    }

    setEvent('.lovers','.lovers');
    setEvent('.all', '.all');
    setEvent('.chef', '.chef');
    setEvent('.girl','.girl');
    setEvent('.guy', '.guy');
    setEvent('.granddad');
    setEvent('.grandmother');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName === 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });




};

export default filter;