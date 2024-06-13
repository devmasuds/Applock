var swiper = new Swiper(".myclients-menu", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
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

  var swiper = new Swiper(".myBwiper", {
    direction: "vertical",
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

  });
  var swiper = new Swiper(".myBwiper2", {
    direction: "vertical",
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });
  var swiper = new Swiper(".myBwiper3", {
    direction: "vertical",
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

  });

  var swiper = new Swiper(".myBwiper4", {
    direction: "vertical",
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

  });

  var swiper = new Swiper(".myBwiper5", {
    direction: "vertical",
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },

  });

  var swiper = new Swiper(".myBwiper6", {
    direction: "vertical",
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

  });
