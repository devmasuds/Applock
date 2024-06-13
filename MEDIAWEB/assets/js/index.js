var swiper = new Swiper(".myquedicen", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    pagination: {
      el: ".faq-pag-nation",
      type: "progressbar",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".quedicen-next",
      prevEl: ".quedicen-prev",
    },
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".sumatevos-next",
      prevEl: ".sumatevos-prev",
    },
  });


  $(".menu-opner ,.header-close").click(function(){
    $(".openar-menu").toggleClass("active")
  });

  $(window).scroll(function(){
    var sticky = $('.header-section'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 300) sticky.addClass('menu-fixed');
    else sticky.removeClass('menu-fixed');
  });

  const toTop=document.querySelector(".top-bottom");
  window.addEventListener("scroll",()=>{
      if(window.pageYOffset >200){
          toTop.classList.add("active");
      }else{
          toTop.classList.remove("active");
      }
  });