// import Swiper JS
import Swiper, { Navigation }from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 300,
    autoplay: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  }); 