  
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

  $(".menu-opne ,.header-close").click(function(){
    $(".donitaa-test").toggleClass("active")
  });
  $(".opne-menu").click(function(){
    $(".donitaa-test").toggleClass("active")
  });