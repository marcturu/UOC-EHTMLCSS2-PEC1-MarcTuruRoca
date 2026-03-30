import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initSwiper() {
  new Swiper('.gallery__swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 16,
    touchRatio: 1,
    speed: 300,
    threshold: 5,
    resistanceRatio: 0.85,
    touchStartPreventDefault: false,
    passiveListeners: false,
    touchReleaseOnEdges: true,
    watchSlidesProgress: false,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1.8,
        spaceBetween: 24,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 32,
        centeredSlides: true,
      },
    },
  })
}
