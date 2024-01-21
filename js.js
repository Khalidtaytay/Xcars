const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,

    // Navigation arrows
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
      },
  });

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
