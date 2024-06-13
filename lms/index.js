var swiper = new Swiper(".myFaq", {
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
    nextEl: ".faq-icon-next",
    prevEl: ".faq-icon-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
AOS.init();

$(window).scroll(function(){
  var sticky = $('.header-section'),
      scroll = $(window).scrollTop();

  if (scroll >= 300) sticky.addClass('menu-fixed');
  else sticky.removeClass('menu-fixed');
});




$(".menu-opner").click(function(){
  $(".serc-menu-list").toggleClass("active")
});

const toTop=document.querySelector(".top-bottom");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset >200){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
});