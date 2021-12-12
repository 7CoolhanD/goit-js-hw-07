import { galleryItems } from "./gallery-items.js";
const refs = {
  imgGalleryContainer: document.querySelector(".gallery"),
};
// console.log(galleryItems);
const imagesItems = galleryItems.map((option) => {
  const imageEl = document.createElement("img");
  imageEl.src = option.preview;
  imageEl.alt = option.description;
  imageEl.classList.add("gallery__image");
  return imageEl;
});

refs.imgGalleryContainer.append(...imagesItems);
