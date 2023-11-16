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

  const swiper2 = new Swiper('.itemSwiper', {
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 40,
      slideShadows: true,
    },
    loop: true,
    slidesPerView: 1.9,
    navigation: {
      nextEl: '.item-swiper-button-next',
      prevEl: '.item-swiper-button-prev',
    },

    breakpoints: {
      500: {
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 48,
        },
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

  if (catalogueTabsContainer) {
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


  const panels = document.querySelectorAll(".panel");

  panels.forEach(panel => {
      const panelContainer = panel.querySelector(".panel-container");
  
      panel.addEventListener('mousemove', (e) => transformPanel(e, panel, panelContainer));
      panel.addEventListener('mouseenter', () => handleMouseEnter(panelContainer));
      panel.addEventListener('mouseleave', () => handleMouseLeave(panelContainer));
  });
  
  function transformPanel(mouseEvent, panel, panelContainer) {
      if (panel.closest('.swiper-slide').classList.contains('swiper-slide-active')) {
          const rect = panel.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const mouseX = mouseEvent.clientX;
          const mouseY = mouseEvent.clientY;
          const percentX = (mouseX - centerX) / (rect.width / 2);
          const percentY = -((mouseY - centerY) / (rect.height / 2));
          const transformAmount = 10;
  
          panelContainer.style.transform = `perspective(40rem) rotateY(${percentX * transformAmount}deg) rotateX(${percentY * transformAmount}deg)`;
      }
  }
  
  function handleMouseEnter(panelContainer) {
      if (panelContainer.closest('.swiper-slide').classList.contains('swiper-slide-active')) {
          panelContainer.style.transition = '';
      }
  }
  
  function handleMouseLeave(panelContainer) {
      if (panelContainer.closest('.swiper-slide').classList.contains('swiper-slide-active')) {
          panelContainer.style.transition = 'transform 0.5s ease-out';
          panelContainer.style.transform = 'perspective(40rem) rotateY(0deg) rotateX(0deg)';
      }
  }



  

})