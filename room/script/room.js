const roomA = {
  room: document.querySelector('.room_a'),
  button: document.getElementById('a_info')
};
const roomB = {
  room: document.querySelector('.room_b'),
  button: document.getElementById('b_info')
}

const activeHandler = (room1, room2) => {
  room1.button.classList.add('active');
  room2.button.classList.remove('active');
  room1.room.classList.add('active');
  room2.room.classList.remove('active');
}

roomA.button.addEventListener('click', () => {
  activeHandler(roomA, roomB);
})
roomB.button.addEventListener('click', () => {
  activeHandler(roomB, roomA);
});

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
    clickable: true,
  },

  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});
