  
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

  $(".opner-menu,.header-close").click(function(){
    $(".header-text-btn").toggleClass("active")
  });




  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    pagination: {
      el: ".new-pagination",
      dynamicBullets: true,
    },
    loop:true,
    autoplay: {
      delay: 25000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".mSwiper", {

    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mSwiper2", {

    navigation: {

    },
    thumbs: {
      swiper: swiper,
    },
  });