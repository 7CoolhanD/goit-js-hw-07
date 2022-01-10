import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryImgItems = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`
  )
  .join("");

refs.gallery.insertAdjacentHTML("afterbegin", galleryImgItems);
refs.gallery.addEventListener("click", openImgInModal);
document.addEventListener("keydown", modalCloseOnButton);

function openImgInModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const modal = basicLightbox.create(`
<div class="modal">
<img src=${e.target.dataset.source}>
</div>
`);
  modal.show();
}

function modalCloseOnButton(ev) {
  if (ev.key === "Escape") {
    console.log(openImgInModal);
  }
}
