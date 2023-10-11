import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
                <img class="gallery__image"
                src="${preview}" 
                alt="${description}" />
            </a>
        </li>
        `)
    .join('');
}

galleryList.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

const options = {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: 'alt',
};

let gallery = new SimpleLightbox('.gallery a', options);
