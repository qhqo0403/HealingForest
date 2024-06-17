const swiper = new Swiper(".swiper", {
  autoplay: true,
  speed: 1000,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
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