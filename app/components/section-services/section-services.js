export const cards = () => {
  let cardData = [
    {
      icon: "#construction-service-icon",
      title: "Construction",
    },
    {
      icon: "#development-service-icon",
      title: "Project Development",
    },
    {
      icon: "#design-service-icon",
      title: "Interior Design",
    },
    {
      icon: "#repairs-service-icon",
      title: "Rapairs",
    },
  ];

  const cardIcon = document.querySelectorAll(".card-services__icon-use");
  const cardName = document.querySelectorAll(".card-services__name");
  if (cardIcon && cardName) {
    cardData.forEach((card, index) => {
      cardIcon[index].setAttribute(
        "xlink:href",
        `/images/sprite.svg${card.icon}`
      );
      cardName[index].innerHTML = card.title;
    });
  }
};
