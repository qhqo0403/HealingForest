
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

const toggleGnb = () => {
  const toggleBtn = document.querySelector('#toggle');
  const mobileGnb = document.querySelector('.m_gnb');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('on');
    mobileGnb.classList.toggle('active');
  })
}

toggleGnb();