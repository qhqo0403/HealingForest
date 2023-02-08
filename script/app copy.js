const imgWrap1 = document.querySelector('#wrapper1');
const imgWrap2 = document.querySelector('#wrapper2');
  /* const prevBtn = document.querySelector('#prev');
  const nextBtn = document.querySelector('#next'); */

// const initialPosition = (parent) =>{
// const slides = parent.querySelector('.imgbox');
// const slide = parent.querySelectorAll('img');

// const lastIndex = slide.length - 1;
// const first = slide[0]; 
// const last = slide[lastIndex];
// const imgW = first.clientWidth;
// let indexNum = 1;

// slides.appendChild(first.cloneNode(true));
// slides.insertBefore(last.cloneNode(true), first);
// slides.style.transition = 'none';
// slides.style.transform = `translateX(-${imgW*indexNum}px)`;
// }
// initialPosition(imgWrap1);
// initialPosition(imgWrap2);

const slideFunc = (parent) => {
  const slides = parent.querySelector('.imgbox');
  const slide = slides.querySelectorAll('img');
  const prevBtn = parent.querySelector('.prev');
  const nextBtn = parent.querySelector('.next');

  const lastIndex = slide.length - 1;
  const first = slide[0]; 
  const last = slide[lastIndex];
  const imgW = first.clientWidth;
  let indexNum = 1;

  slides.append(first.cloneNode(true));
  slides.insertBefore(last.cloneNode(true), first);
  slides.style.transition = 'none';
  slides.style.transform = `translateX(-${imgW*indexNum}px)`;


  slides.addEventListener('transitionend', ()=>{
    if( indexNum === (lastIndex + 2)){
      indexNum = 1;
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-${imgW*indexNum}px)`;
    }
    if( indexNum === 0){
      indexNum = lastIndex + 1;
      slides.style.transition = 'none';
      slides.style.transform = `translateX(-${imgW*indexNum}px)`;
    }
  });

  const transition = () => {
    slides.style.transition="transform 1s";
    slides.style.transform=`translateX(-${imgW*indexNum}px)`;
  }
  const next = () =>{
    indexNum++;
    transition();
  }
  const prev = () =>{
    indexNum--;
    transition();
  }

  let timer = setInterval(next, 4000);
  nextBtn.addEventListener('click', () =>{
    clearInterval(timer);
    next();
    timer = setInterval(next, 4000);
  });
  prevBtn.addEventListener('click', () =>{
    clearInterval(timer);
    prev();
    timer = setInterval(next, 4000);
  });
}
slideFunc(imgWrap1);
setTimeout(() => {slideFunc(imgWrap2)}, 2000);
/* const slideMoving = (parent) => {

} */