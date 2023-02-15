// import Swiper JS
import Swiper, { Navigation, Autoplay } from 'swiper';

Swiper.use([Navigation, Autoplay]);

const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 400,
    spaceBetween: 50,
    autoplay: {
      delay: 1000
    },
    
    slidesPerView: 3,
    initialSlide: 2,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 50,
        initialSlide: 1,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 50,
        initialSlide: 1,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
        initialSlide: 1,
      },
    },
  
  }); 

// jQuery(document).ready( function($) {
  
//   $('.testimonials-slider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: false,
//       mobileFirst: false,
//       autoplaySpeed: 2000,
//       prevArrow: '<button type="button" class="slick-prev">⭠</button>',
//       nextArrow: '<button type="button" class="slick-next">⭢</button>',
//       responsive: [
//         {
//           breakpoint: 520,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1, 
//             centerMode: true
//           }
//         },
//         {
//           breakpoint: 1280,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             centerMode: false
//           }
//         },
//       ]
//   });

// });