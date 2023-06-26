const toggleGnb = () => {
  const toggleBtn = document.querySelector('#toggle');
  const mobileGnb = document.querySelector('.m_gnb');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('on');
    mobileGnb.classList.toggle('active');
  })
}

toggleGnb();