export const pageUp = () => {
  const scrollUpButton = document.querySelector(".scrollup-button");

  if (scrollUpButton) {
    scrollUpButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
      });
    });
  }
};
