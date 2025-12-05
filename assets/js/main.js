$(document).ready(function(){
  
    // Enhanced Truck Animation with Scroll Control
    function initTruckAnimation() {
        const truck = $('.ca-slider-img-3 img');
        const heroSection = $('.ca-slider-3');
        
        if (truck.length && heroSection.length) {
            // Set initial position (far right, off-screen)
            truck.css({
                'transform': 'translateX(90vw)',
                'transition': 'none'
            });
            
            // Animate truck on page load
            setTimeout(() => {
                truck.css({
                    'transition': 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    'transform': 'translateX(300px)'
                });
            }, 500);
        }
    }
    
    // Scroll-controlled truck movement
    function handleTruckScroll() {
        const truck = $('.ca-slider-img-3 img');
        const heroSection = $('.ca-slider-3');
        
        if (truck.length && heroSection.length) {
            const scrollTop = $(window).scrollTop();
            const heroHeight = heroSection.outerHeight();
            const scrollProgress = Math.min(scrollTop / heroHeight, 1);
            
            // Calculate truck movement - starts from 300px (initial position) and moves left
            const initialPosition = 100; // Initial position in pixels
            const maxMovement = 50; // Maximum movement in vw units
            const currentPosition = initialPosition - (scrollProgress * (initialPosition + (maxMovement * window.innerWidth / 100)));
            
            const opacity = 1 - (scrollProgress * 0.5); // Fade out slightly
            const scale = 1 - (scrollProgress * 0.2); // Scale down slightly
            
            truck.css({
                'transform': `translateX(${currentPosition}px) scale(${scale})`,
                'opacity': Math.max(opacity, 0.3), // Minimum opacity of 0.3
                'transition': 'none' // Remove transition during scroll for smooth animation
            });
        }
    }
    
    // Initialize truck animation
    initTruckAnimation();
    
    // Bind scroll event for truck animation with throttling for better performance
    let isScrolling = false;
    $(window).on('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                handleTruckScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });


    // Expand gallery
    const slides = document.querySelectorAll('.slide');
    let active = document.querySelector('.slide.active');
  
    slides.forEach((slide) => {
    slide.onmouseover = () => {
        active.classList.remove('active');
        active = slide;
        slide.classList.add('active');
    }
    });



  // off canvas 1
  var caMenuWrap = $('.ca-mobile-menu-active > ul').clone();
  var caSideMenu = $('.ca-offcanvas-menu-1 nav');
  caSideMenu.append(caMenuWrap);
  if ($(caSideMenu).find('.sub-menu, .ca-mega-menu').length != 0) {
    $(caSideMenu).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.ca-offcanvas-menu-1 nav > ul > li button.ca-menu-close, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
  $(sideMenuList).on('click', function (e) {
    console.log(e);
    e.preventDefault();F
    if (!($(this).parent().hasClass('active'))) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });


  $(".ca-offcanvas-toogle").on('click', function(){
    $(".ca-offcanvas").addClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

  $(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
    $(".ca-offcanvas").removeClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});


// mobile menu 2
  var caMenuWrap2 = $('.ca-mobile-menu-active-2 > ul').clone();
  var caSideMenu2 = $('.ca-offcanvas-menu-2 nav');
  caSideMenu2.append(caMenuWrap2);
  if ($(caSideMenu2).find('.sub-menu, .ca-mega-menu').length != 0) {
    $(caSideMenu2).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close2"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList2 = $('.ca-offcanvas-menu-2 nav > ul > li button.ca-menu-close2, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
  $(sideMenuList2).on('click', function (e) {
    console.log(e);
    e.preventDefault();
    if (!($(this).parent().hasClass('active'))) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });


  $(".ca-offcanvas-toogle").on('click', function(){
    $(".ca-offcanvas").addClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

  $(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
    $(".ca-offcanvas").removeClass("ca-offcanvas-open");
    $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});

// mobile menu 3
var caMenuWrap3 = $('.ca-mobile-menu-active-3 > ul').clone();
var caSideMenu3 = $('.ca-offcanvas-menu-3 nav');
caSideMenu3.append(caMenuWrap3);
if ($(caSideMenu3).find('.sub-menu, .ca-mega-menu').length != 0) {
  $(caSideMenu3).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close3"><i class="fas fa-chevron-right"></i></button>');
}

var sideMenuList3 = $('.ca-offcanvas-menu-3 nav > ul > li button.ca-menu-close3, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
$(sideMenuList3).on('click', function (e) {
  console.log(e);
  e.preventDefault();
  if (!($(this).parent().hasClass('active'))) {
    $(this).parent().addClass('active');
    $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
  } else {
    $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
    $(this).parent().removeClass('active');
  }
});


$(".ca-offcanvas-toogle").on('click', function(){
  $(".ca-offcanvas").addClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

$(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
  $(".ca-offcanvas").removeClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});

// mobile menu 4
var caMenuWrap4 = $('.ca-mobile-menu-active-4 > ul').clone();
var caSideMenu4 = $('.ca-offcanvas-menu-4 nav');
caSideMenu4.append(caMenuWrap4);
if ($(caSideMenu4).find('.sub-menu, .ca-mega-menu').length != 0) {
  $(caSideMenu4).find('.sub-menu, .ca-mega-menu').parent().append('<button class="ca-menu-close4"><i class="fas fa-chevron-right"></i></button>');
}

var sideMenuList4 = $('.ca-offcanvas-menu-4 nav > ul > li button.ca-menu-close4, .tp-offcanvas-menu-1 nav > ul li.has-dropdown > a');
$(sideMenuList4).on('click', function (e) {
  console.log(e);
  e.preventDefault();
  if (!($(this).parent().hasClass('active'))) {
    $(this).parent().addClass('active');
    $(this).siblings('.sub-menu, .ca-mega-menu').slideDown();
  } else {
    $(this).siblings('.sub-menu, .ca-mega-menu').slideUp();
    $(this).parent().removeClass('active');
  }
});


$(".ca-offcanvas-toogle").on('click', function(){
  $(".ca-offcanvas").addClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").addClass("ca-offcanvas-overlay-open");
});

$(".ca-offcanvas-close-toggle, .ca-offcanvas-overlay").on('click', function(){
  $(".ca-offcanvas").removeClass("ca-offcanvas-open");
  $(".ca-offcanvas-overlay").removeClass("ca-offcanvas-overlay-open");
});


    // stiky menu
    $(window).on('scroll',function(){
      var scroll = $ (window).scrollTop();
      if(scroll < 1){
        $(".stiky").removeClass("scroll-header");
      }else{
        $(".stiky").addClass("scroll-header");
      }
    });


  // scroll top 1
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 40) {
        $('#topBtn').fadeIn();
    } else {
        $('#topBtn').fadeOut();
    }
});

  $("#topBtn").on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 300);
});

// scroll top 2
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 40) {
      $('#topBtn2').fadeIn();
  } else {
      $('#topBtn2').fadeOut();
  }
});


$("#topBtn2").on('click', function() {
  $('html, body').animate({scrollTop: 0}, 300);
});


// scroll top 3

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 40) {
      $('#topBtn3').fadeIn();
  } else {
      $('#topBtn3').fadeOut();
  }
});


$("#topBtn3").on('click', function() {
  $('html, body').animate({scrollTop: 0}, 300);
});


  // scroll top 4

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 40) {
      $('#topBtn4').fadeIn();
  } else {
      $('#topBtn4').fadeOut();
  }
});


$("#topBtn4").on('click', function() {
  $('html, body').animate({scrollTop: 0}, 300);
});







  // select
  $('select').niceSelect();

  // popup
  $('.popup-image').magnificPopup({
    type: 'image'
  });

  $('.popup-video').magnificPopup({
  type: 'iframe'
  });


  // counter UP
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

  // Home 1 Slider 
$('.ca-hero1-active').slick({
  autoplay: true,
  draggable: true,
  arrows: false,
  dots: true,
  fade: true,
  speed: 3000,
  infinite: true,
  cssEase: 'ease',
  touchThreshold: 100,
  
});


// Home 1 testimonial
$('.slider-main').slick({
  slidesToShow: 1,
  arrows: false,
  asNavFor: '.sm-slider-nav',
  vertical: true,
  autoplay: true,
  verticalSwiping: true,
  dots:false
});

$('.sm-slider-nav').slick({
  slidesToShow: 3,
  asNavFor: '.slider-main',
  vertical: true,
  focusOnSelect: true,
  autoplay: true,
  arrows:false
});


// Home 2 slider 
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  autoplay:true,
  speed: 3000,
});

$('.slider-nav').slick({
  slidesToShow: 3,  
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true, 
  arrows: false, 
  verticalSwiping: true ,
  autoplay:true,
  speed: 3000,
});
    
// service2 slider
$('.ca-service-slier-2').slick({
  arrows: false,
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// testimonial 2 
$('.ca-testimonial-2').slick({
  arrows:true,
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<span class="priv_arrow"><i class="fa-regular fa-arrow-right"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa-regular fa-arrow-left"></i></span>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// Slider 3 Active
$('.ca-slider-active-3').slick({ 
  arrows: false,
  dots: true,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:'<span class="prev_arrow1"><i class="fa-regular fa-arrow-right"></i></span>',
  nextArrow:'<span class="next_arrow1"><i class="fa-regular fa-arrow-left"></i></span>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// testimonial 3 
$('.ca-testimonial-3').slick({
  arrows:false,
  dots: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// testimonial 4
$('.ca-testimonials-4').slick({
  arrows:false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// Services 4
$('.ca-services-4').slick({
  arrows:false,
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// Brand logo Slider
$('.ca-brand-slides').slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  swipe: false,
  slidesToShow: 6,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
$('.ca-brand-slides-2').slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  swipe: false,
  slidesToShow: 6,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});



  // aos
  AOS.init();
  AOS.init({disable: 'mobile'});



  	// preloader js
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);

			if ($('#ctn-preloader').hasClass('loaded')) {
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();


  
});


