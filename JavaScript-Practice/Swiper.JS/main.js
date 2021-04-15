document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider();
});

class HeroSlider {
  constructor() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      //direction: 'vertical',
      loop: true,
      //effect: 'fade',
      grabCursor: true,
      effect: 'coverflow',
      centerSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2
        }
      },
      autoplay: {
        deray: 4000,
        disableOnInteraction: false
      }
    })
  }
}
