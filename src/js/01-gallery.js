import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryImgItems = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("afterbegin", galleryImgItems);

refs.gallery.addEventListener("click", openImgInModal);

function openImgInModal(e) {
  e.preventDefault();
  const isImage = e.target.classList.contains("gallery__image");
  if (!isImage) {
    modal.close();
  }
  const modal = basicLightbox.create(`
  <div class="modal">
  <img src=${e.target.dataset.source}>
  </div>
  `);
  modal.show();
}
