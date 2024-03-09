
const swip = document.querySelectorAll('.swiper');
let mql = window.matchMedia("(max-width: 700px)");
  if (mql.matches) { 
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
  
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
        },
  });
  gsap.set('#h1', {
    opacity: 0,
    translateX: '0%',
  });
  gsap.to('#h1', {
    delay:5,
    duration: 2.5,
    translateX: '50',
    opacity: 1,  
    ease: "elastic.out(1,0.3)",
  });
  gsap.set('#h2', {
    opacity: 0,
    translateX: '0%',
  });
  gsap.to('#h2', {
    delay:6.5,
    duration: 5,
    translateX: '25',
    opacity: 1,  
  });

  } else {
    const swiper2 = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 5,
      spaceBetween: 0,
      loop: true,
  
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
        },
  });

  gsap.set('#h1', {
    opacity: 0,
    translateX: '0%',
  });
  gsap.to('#h1', {
    delay:5,
    duration: 2.5,
    translateX: '100',
    opacity: 1,  
    ease: "elastic.out(1,0.3)",
  });
  gsap.set('#h2', {
    opacity: 0,
    translateX: '0%',
  });
  gsap.to('#h2', {
    delay:6.5,
    duration: 5,
    translateX: '50',
    opacity: 1,  
  });

  }


  let buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click',addedCart);
    function addedCart(){
        button.innerHTML = "<div class='point1'></div><div class='point2'></div><div class='point3'></div>"
        function SucMsg(){
            button.classList.remove('loading')
            button.classList.add('Success')
            button.innerHTML='Added Successfully'
        };
        setTimeout(SucMsg,2000);
    };
    
  });


  let loaderContainer = document.querySelector('.loader-container');
  let body = document.querySelector('body');
  function loading(){
    setTimeout(removeLoading,4000)
  }
  function removeLoading() {
    loaderContainer.style.visibility= 'hidden'

    

  }
  loading()