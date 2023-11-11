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

  var marquee = document.querySelector('.marquee');
  var marqueeText = document.querySelector('.marquee__text');
  var textWidth = marqueeText.offsetWidth;

  var tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: 'linear' }
  });

  tl.to('.marquee', { x: -textWidth, duration: 20, repeat: -1 });

  var swiper = new Swiper(".mySwiper", {
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

})