import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const hero = {
  init() {
    this.slider();
  },

  slider() {
    const swiper = new Swiper(".js_hero-swiper", {
      modules: [Navigation],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      watchOverflow: true,
      watchSlidesVisibility: true,
      autoplay: false,
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   },
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
        slideChange(instance) {
          let activeIndex = instance.activeIndex;
          const paginationArr = document.querySelectorAll(
            ".slider__indicator-btn"
          );
          paginationArr.forEach((el) => {
            el.classList.remove("active");
          });
          paginationArr[activeIndex].classList.add("active");
        },
      },
    });
  },
};
