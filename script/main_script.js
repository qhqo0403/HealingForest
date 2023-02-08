// const div=document.querySelector(".imgbox");

// window.onload=()=>{
//   document.getElementsByClassName("prev").item(0).onclick=()=>{
//     clearInterval(timer);
//     rolling(1);
//     timer=setInterval("rolling(0)", 3000);
//   }
//   document.getElementsByClassName("next").item(0).onclick=()=>{
//     clearInterval(timer);
//     rolling(0);
//     timer=setInterval("rolling(0)", 3000);
//   }
//   let timer=setInterval("rolling(0)", 3000);
// }

// const rolling=(direction)=>{
//   let first=div.getElementsByTagName("img").item(0);
//   let last=div.getElementsByTagName("img").item(2);
//   if(direction === 0){
//     div.appendChild(first);
//   } else if(direction === 1){
//     div.insertBefore(last, first);
//   }
// }
window.onload=()=>{
  const slideMoving=(parent,imgbox,image,leftbtn,rightbtn)=>{
    const wrap=document.querySelector(parent);
    const slide=wrap.querySelector(imgbox);
    const slides=slide.querySelectorAll(image);
    console.log( slide, slides);
    const lastIndex=slides.length-1; console.log(slides.length);
    const first=slides[0];
    const last=slides[lastIndex];
    const imgW=first.clientWidth; console.log(imgW);
    let indexNum=1;

    const pageNum=document.querySelector('.ra>span');
    console.log(pageNum);

    slide.appendChild(first.cloneNode(true));
    slide.insertBefore(last.cloneNode(true), first);
    slide.style.transition='none';
    slide.style.transform=`translateX(-${imgW*indexNum}px)`;

    const next=()=>{
      indexNum++;
      slide.style.transition="transform 0.4s";
      slide.style.transform=`translateX(-${imgW*indexNum}px)`;
    }
    const prev=()=>{
      indexNum--;
      slide.style.transition="transform 0.4s";
      slide.style.transform=`translateX(-${imgW*indexNum}px)`;
    }
    slide.addEventListener('transitionend', ()=>{
      if( indexNum === (lastIndex+2)){
        indexNum = 1;
        slide.style.transition='none';
        slide.style.transform=`translateX(-${imgW*indexNum}px)`;
      }
      if( indexNum === 0){
        indexNum = lastIndex+1; // 3으로 
        slide.style.transition='none';
        slide.style.transform=`translateX(-${imgW*indexNum}px)`;
      }
    });
    document.getElementById(leftbtn).onclick=()=>{
      clearInterval(timer);
      prev();
      timer=setInterval(next, 2000);
    }
    document.getElementById(rightbtn).onclick=()=>{
      clearInterval(timer);
      next();
      timer=setInterval(next, 2000);
    }
    let timer=setInterval(next, 2000);
  }
  slideMoving('#wrapper1','.imgbox','img','prev','next');
  slideMoving('#wrapper2','.imgbox','img','prev','next');
  /*
  const wrap=document.querySelector('.wrapper');
  const slide=wrap.querySelector('.imgbox');
  const slides=slide.querySelectorAll('img');
  console.log( slide, slides);
  const lastIndex=slides.length-1; console.log(slides.length);
  const first=slides[0];
  const last=slides[lastIndex];
  const imgW=first.clientWidth; console.log(imgW);
  let indexNum=1;

  const pageNum=document.querySelector('.ra>span');
  console.log(pageNum);

  slide.appendChild(first.cloneNode(true));
  slide.insertBefore(last.cloneNode(true), first);
  slide.style.transition='none';
  slide.style.transform=`translateX(-${imgW*indexNum}px)`;

  const next=()=>{
    indexNum++;
    slide.style.transition="transform 0.4s";
    slide.style.transform=`translateX(-${imgW*indexNum}px)`;
  }
  const prev=()=>{
    indexNum--;
    slide.style.transition="transform 0.4s";
    slide.style.transform=`translateX(-${imgW*indexNum}px)`;
  }
  slide.addEventListener('transitionend', ()=>{
    if( indexNum === (lastIndex+2)){
      indexNum = 1;
      slide.style.transition='none';
      slide.style.transform=`translateX(-${imgW*indexNum}px)`;
    }
    if( indexNum === 0){
      indexNum = lastIndex+1; // 3으로 
      slide.style.transition='none';
      slide.style.transform=`translateX(-${imgW*indexNum}px)`;
    }
  });
  document.getElementById('prev').onclick=()=>{
    clearInterval(timer);
    prev();
    timer=setInterval(next, 2000);
  }
  document.getElementById('next').onclick=()=>{
    clearInterval(timer);
    next();
    timer=setInterval(next, 2000);
  }
let timer=setInterval(next, 2000);
*/
}
// window.onload=()=>{
//   document.getElementsByClassName("prev").item(0).onclick=()=>{
//     clearInterval(timer);
//     rolling(1);
//     timer=setInterval("rolling(0)", 3000);
//   }
//   document.getElementsByClassName("next").item(0).onclick=()=>{
//     clearInterval(timer);
//     rolling(0);
//     timer=setInterval("rolling(0)", 3000);
//   }
//   let timer=setInterval("rolling(0)", 3000);
let observer = new IntersectionObserver((e)=>{
  e.forEach((element)=>{
    css transtion 대상에 opacity 0, transition으로
    if( element.isIntersecting){
      Element.target.style.opacity = 1;
    }else{
      사라질때 코드
      ex) element.target.style.opacity = 0;
    }
    element.intersectionRatio --> element가 몇 퍼센트가 보이면 출력
  });
});
obserber.observe( html 요소 )