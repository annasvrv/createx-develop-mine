export const cards = () => {
  let cardData = [
    {
      image: "construction-card-image.jpg",
      icon: "#construction-service-icon",
      title: "Construction",
    },
    {
      image: "project-card-image.jpg",
      icon: "#development-service-icon",
      title: "Project Development",
    },
    {
      image: "design-card-image.jpg",
      icon: "#design-service-icon",
      title: "Interior Design",
    },
    {
      image: "repairs-card-image.jpg",
      icon: "#repairs-service-icon",
      title: "Rapairs",
    },
  ];

  const cardImage = document.querySelectorAll(".card-services__image");
  const cardIcon = document.querySelectorAll(".card-services__icon-use");
  const cardName = document.querySelectorAll(".card-services__name");
  if (cardImage && cardIcon && cardName) {
    cardData.forEach((card, index) => {
      cardImage[index].setAttribute(
        "src",
        `/images/card-services/${card.image}`
      );
      cardIcon[index].setAttribute(
        "xlink:href",
        `/images/sprite.svg${card.icon}`
      );
      cardName[index].innerHTML = card.title;
    });
  }
};
