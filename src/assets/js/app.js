document.addEventListener("DOMContentLoaded", () => {

  //= components/

  Splitting();

  gsap.from('.char', {
    rotateY: 180,
    opacity: 0,
    stagger: {
      amount: 1,
    },
    duration: 1,
    ease: 'power3.Out',
  })

  let marquee = document.querySelector('.marquee');
  let marqueeText = document.querySelector('.marquee__text');
  if (marqueeText) {
    let textWidth = marqueeText.offsetWidth;

    let tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'linear' }
    });
  
  
    tl.to('.marquee', { x: -textWidth, duration: 20, repeat: -1 });
  }
  


  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    breakpoints: {

      500: {
        slidesPerView: 2,
      },

      1024: {
        slidesPerView: 3,
      },
    }
  });

  let ulElement = document.querySelector('.header__subtitle ul');
  let liCount = ulElement.querySelectorAll('li').length;

  ulElement.classList.remove('flip2', 'flip3', 'flip4', 'flip5');

  switch (liCount) {
    case 2: ulElement.classList.add('flip2'); break;
    case 3: ulElement.classList.add('flip3'); break;
    case 4: ulElement.classList.add('flip4'); break;
    default: ulElement.classList.add('flip5'); break;
  }


  let catalogueTabsContainer = document.querySelector('.catalogue-tabs__container')
  let catalogueTabsBtns = document.querySelectorAll('.catalogue-tabs button')

  if (catalogueTabsBtns) {
    catalogueTabsBtns.forEach(e => {
      e.addEventListener('click', () => {
        catalogueTabsBtns.forEach(el => el.classList.remove('--active'));
        e.classList.add('--active');
        catalogueTabsContainer.classList.add('fading-out');
    
        setTimeout(() => {
          catalogueTabsContainer.innerHTML = e.nextElementSibling.innerHTML;
          catalogueTabsContainer.classList.remove('fading-out');
          catalogueTabsContainer.classList.add('fading-in');
    
          setTimeout(() => {
            catalogueTabsContainer.classList.remove('fading-in');
          }, 300);
        }, 300);
      });
    });

    catalogueTabsBtns[0].click()
  }
  

})