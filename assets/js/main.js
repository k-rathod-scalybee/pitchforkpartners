// AOS Animation
AOS.init({
	duration: 1000,
  once: true
});
// AOS Animation

// Header Fixed

// Header Fixed

// Search JS
$(document).ready(function(){
  $(".pp-header-search").click(function(){
    $(".pp-fullscreen-search").addClass("show");
  });
  $(".pp-fullscreen-search-close").click(function(){
    $(".pp-fullscreen-search").removeClass("show");
  });
});
// Search JS

// hero Slider
var swiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  fadeEffect: { crossFade: true },
  breakpoints: {
    0: {
      pagination: {
        el: ".swiper-pagination"
      }
    },
    1024: {
      pagination: false
    }
  }
});
// Testimonials Slider

// What We Do Slider
var weDoSwiper = new Swiper(".we-do-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 14,
      pagination: false
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});
// What We Do Slider

// Video Slider
var videoSliderSwiper = new Swiper(".pp-video-slider", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});
// Video Slider

// Testimonials Slider
var swiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
});
// Testimonials Slider

// Hero Slider Arrow Cursor
jQuery('body').append('<span class="hero-slider-cursor"><svg x="0px" y="0px" width="246px" height="220px" stroke="#fff" fill="transparent" viewBox="0 0 182.671 163.806" enable-background="new 0 0 182.671 163.806" xml:space="preserve"><g><path d="M100.987,163.806l-17.761-17.761l51.62-51.62H0l0-24.97h134.904L82.998,17.55L100.548,0l82.123,82.123L100.987,163.806zM84.641,146.045l16.347,16.347l80.27-80.269L100.548,1.414L84.412,17.55l52.907,52.905H1l0,22.97h136.26L84.641,146.045z"></path></g></svg></span>');

var heroSlider = jQuery('.hero-slider'),
cursor = jQuery('.hero-slider-cursor'),
sliderButtons = heroSlider.find('a');

heroSlider.on('mousemove', function(e){
  var thisSlider = jQuery(this),
  x = e.clientX - cursor.width() / 2,
  y = e.clientY - cursor.height() / 2,
  leftEdge = thisSlider.offset().left,
  sliderWidth = thisSlider.outerWidth();

  if( e.clientX > leftEdge + sliderWidth / 2 ){
    cursor.css({'transform': 'translate3d(' + x + 'px, ' + y + 'px, 0) scaleX(1)', 'visibility': 'visible'});
  } else{
    cursor.css({'transform': 'translate3d(' + x + 'px, ' + y + 'px, 0) scaleX(-1)', 'visibility': 'visible'}); 
  }
});

heroSlider.on('mouseleave', function(){
  cursor.css({'visibility': 'hidden'}); 
});

if(sliderButtons.length){
  sliderButtons.each(function(){
    jQuery(this).on('mouseenter', function(e){
      cursor.css({'opacity': '0'}); 
    })
    jQuery(this).on('mouseleave', function(e){
      cursor.css({'opacity': '1'});
    })
  })
}
// Hero Slider Arrow Cursor

// Menu Active Effect
$(function(){
	var menu = $(".navbar-menu");
  var indicator = $('<span class="indicator"></span>');
  menu.append(indicator);
  position_indicator(menu.find("li.active"));  
  setTimeout(function(){indicator.css("opacity", 1);}, 500);
  menu.find("li").mouseenter(function(){
  	position_indicator($(this));
  });
  menu.find("li").mouseleave(function(){
  	position_indicator(menu.find("li.active"));
  });
  
  function position_indicator(ele){
    var left = ele.offset().left - 440;
    var width = ele.width();
    indicator.stop().animate({
      left: left,
      width: width
    });
  }
});
// Menu Active Effect

// Back to Top
var backtoTop = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    backtoTop.addClass('show');
  } else {
    backtoTop.removeClass('show');
  }
});

backtoTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// Back to Top