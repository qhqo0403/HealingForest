const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  speed: 900,
  spaceBetween: 0,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});

const roomA = {
  room: document.querySelector('.room_a'),
  button: document.getElementById('a_info'),
};
const roomB = {
  room: document.querySelector('.room_b'),
  button: document.getElementById('b_info'),
};
const activeHandler = (room1, room2) => {
  room1.button.classList.add('active');
  room2.button.classList.remove('active');
  room1.room.classList.add('active');
  room2.room.classList.remove('active');
};

roomA.button.addEventListener('click', () => {
  activeHandler(roomA, roomB);
});
roomB.button.addEventListener('click', () => {
  activeHandler(roomB, roomA);
});

const toggleGnb = () => {
  const toggleBtn = document.querySelector('#toggle');
  const mobileGnb = document.querySelector('.m_gnb');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('on');
    mobileGnb.classList.toggle('active');
  });
};

toggleGnb();