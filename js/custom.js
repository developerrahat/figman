// preloader============================
window.addEventListener("load", () => {
  const loader = document.getElementById("pre-loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1000);
});

// Nav=============================
var bars = document.getElementById("bars");
bars.addEventListener("click",function(){
    document.getElementById("main-nav").style.left= 0;
})
document.getElementById("close-bar").addEventListener("click",function(){
    document.getElementById("main-nav").style.left= "-320px";

})


// header up scroll to scroll down=======================
var scrollHeader = $(window);
var sticky = scrollHeader.scrollTop();

scrollHeader.scroll(function () {
  if(scrollHeader.scrollTop() > sticky){
    $('.header').addClass('scrollUp');
  }
  else{
    $('.header').removeClass('scrollUp');
  }
  
  sticky = scrollHeader.scrollTop();
})


// !===================jquery code start here========================!
$(document).ready(function() {

    //  mixitub filtering=================
    var mixer = mixitup('.filter');

       // slick slider
       $('.all').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        autoplaySpeed:2000,
        infinite: true,
        speed: 1000,
        slidesToShow:5,
        responsive: [
            {
              breakpoint:992,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow:3,
              }
            },
            {
              breakpoint:768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow:2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
              }
            }
          ]
      });


      // scroll top======================
    $('.totop').tottTop({
      scrollTop:1000,
      scrtollTopBtnDuration:500,
      duration:100,
  });

 
//Wow content animate=====================
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();



 




    
}); //end============

