var swiper = new Swiper('.swiper-container', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4,
  loopedSlides:4,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: '.swiper-pagination',
  paginationClickable: true, 
  
  breakpoints: {
    1200: {
      slidesPerView: 4,
      loopedSlides: 4,
      spaceBetween:15 },

    1024: {
      slidesPerView: 3,
      loopedSlides: 3,
      spaceBetween: 10 },

    768: {
      slidesPerView: 2,
      loopedSlides: 2,
      spaceBetween: 10 },

    675: {
      slidesPerView: 1,
      loopedSlides: 1,
      spaceBetween: 20 } } });