import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const projectSlider = {
  init() {
    this.slider();
  },

  slider() {
    const swiper = new Swiper(".js_card-swiper", {
      modules: [Navigation],
      loop: false,
      slidesPerView: 3,
      spaceBetween: 10,
      watchOverflow: true,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: ".js_card-next",
        prevEl: ".js_card-prev",
      },
      // centeredSlides: true,
      // centeredSlidesBounds: true,
      // centerInsufficientSlides: true,
      breakpoints: {
        1280: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  },
};

export const projectCards = () => {
  let cardData = [
    {
      image: "projects-red-building",
      header: "Red Finger Building",
      text: "Business Centers",
    },
    {
      image: "projects-cubes-building",
      header: "Cubes Building",
      text: "Business Centers",
    },
    {
      image: "projects-pencil-building",
      header: "The Pencil Building",
      text: "Stores & Malls",
    },
    {
      image: "projects-cubes-building",
      header: "Cubes Building",
      text: "Business Centers",
    },
    {
      image: "projects-pencil-building",
      header: "The Pencil Building",
      text: "Stores & Malls",
    },
    {
      image: "projects-red-building",
      header: "Red Finger Building",
      text: "Business Centers",
    },
  ];

  const cardImage = document.querySelectorAll(".project-card__image");
  const cardHeader = document.querySelectorAll(".project-card__header");
  const cardText = document.querySelectorAll(".project-card__text");

  if (cardImage && cardHeader && cardText) {
    cardData.forEach((card, index) => {
      cardImage[index].setAttribute(
        "src",
        `/images/section-projects/${card.image}@1x.jpg`
      );
      cardImage[index].setAttribute(
        "srcset",
        `/images/section-projects/${card.image}@2x.jpg`
      );
      cardHeader[index].innerHTML = card.header;
      cardText[index].innerHTML = card.text;
    });
  }
};
