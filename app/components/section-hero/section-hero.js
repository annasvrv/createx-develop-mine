import Swiper from "swiper";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

export const hero = {
  init() {
    this.slider();
  },

  slider() {
    const swiper = new Swiper(".js_hero-swiper", {
      modules: [Navigation, Autoplay, Pagination],
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      watchOverflow: true,
      watchSlidesVisibility: true,
      // autoplay: {
      //   delay: 3000,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".js_hero-slider-next",
        prevEl: ".js_hero-slider-prev",
      },
      breakpoints: {
        // 1280: {
        // 	slidesPerView: 3,
        // 	spaceBetween: 0,
        // },
      },
      on: {
        // events
        // slideChange(instance) {
        //   let activeIndex = instance.activeIndex;
        //   const paginationArr = document.querySelectorAll(".swiper-pagination");
        //   paginationArr.forEach((el) => {
        //     // el.classList.remove("active");
        //   });
        //   paginationArr[activeIndex].classList.add("active");
        // },
      },
    });
    // setTimeout(() => {
    //   swiper.slideTo(3);
    // }, 3000);
  },
};
