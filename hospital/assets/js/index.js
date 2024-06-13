var swiper = new Swiper(".mySwiper", {
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
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  var swiper = new Swiper(".meet-doctor", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
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
  var swiper = new Swiper(".myhspital", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-paginatio",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  AOS.init();
  
  const toTop=document.querySelector(".top-bottom");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset >200){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});
$(window).scroll(function(){
  var sticky = $('.header-section'),
      scroll = $(window).scrollTop();

  if (scroll >= 300) sticky.addClass('menu-fixed');
  else sticky.removeClass('menu-fixed');
});
$(".menu-opner").click(function(){
  $(".header-taxt,.header-profile").toggleClass("active")
});