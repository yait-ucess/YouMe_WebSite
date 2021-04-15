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
      effect: 'coverflow',
      centerSlides: true,
    })
  }
}
