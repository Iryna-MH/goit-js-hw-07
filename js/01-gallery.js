import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryParentRef = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map( item => 

`<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>` 
).join('');

galleryParentRef.innerHTML = galleryMarkup;

galleryParentRef.addEventListener('click', openLightBoxHandler);


// galleryParentRef.addEventListener("keydown", closeLightBoxHandler);

let image;

function openLightBoxHandler(e) {
  e.preventDefault();

  if(e.target.nodeName !== 'IMG') return;

  image = basicLightbox.create(`
  <img width="400" height="400" src='${e.target.dataset.source}'>
`);
image.show( () => {galleryParentRef.addEventListener("keydown", closeLightBoxHandler)});


function closeLightBoxHandler (e){
  if(e.code !== 'Escape') {return}
  else {
    image.close();
  }
};

};
