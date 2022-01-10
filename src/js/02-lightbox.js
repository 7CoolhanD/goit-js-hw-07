import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryImgItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" 
    href="${original}">
  <img class="gallery__image" src="${preview}" 
  alt="${description}" />
</a>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", galleryImgItems);

const lightbox = new SimpleLightbox(".gallery a", {});
lightbox.on("shown.simplelightbox", function () {
  captionData: "alt";
  captionPosition: "bottom";
  captionDelay: 250;
});
