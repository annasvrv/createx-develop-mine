export const youtube = () => {
  const element = document.querySelector(".video");

  document.querySelector(".play").addEventListener("click", (event) => {
    event.preventDefault();
    loadVideo(element);
  });

  let loadVideo = (element) => {
    let iframe = document.createElement("iframe");
    iframe.classList.add("iframe");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" +
        element.getAttribute("data-id") +
        "?autoplay=1"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    element.insertBefore(iframe, element.querySelector(".play"));
  };
};
