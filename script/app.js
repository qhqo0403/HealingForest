
// room section swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  speed: 800,
  spaceBetween: 0,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: true,
  },

  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});
