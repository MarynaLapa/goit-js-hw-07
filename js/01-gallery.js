import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox'
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `  
        <li class="gallery__item">
            <a class="gallery__link js-gallery-item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`)
    .join('')
}

// console.log(createMarkup(galleryItems));

galleryList.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

galleryList.addEventListener('click', handlerZoom);
// const img = document.querySelector('.gallery__image');


function handlerZoom(evt) {
    evt.preventDefault();
   
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(evt.target)

    // if (evt.target === evt.currentTarget) {
    //     return;
    // }

    // const currentTarget = evt.target.closest('.js-gallery-item')
    
    const instance = basicLightbox.create(`
        <div class="modal">
        <img src="${evt.target.dataset.source}" width="800" height="600">
        </div>
    `, {
        onShow: (instance) => {
            document.addEventListener('keydown', handlerKey); 
             
        },

        onClose: (instance) => {
            document.removeEventListener('keydown', handlerKey);    
            
        }
    })
    
    instance.show()
    
    const closeClick = instance.element().querySelector('img');
    // console.log(closeClick);
    closeClick.addEventListener('click', handlerClose);

    function handlerClose() {
         instance.close() 
    }
    
    function handlerKey(e) {
        // console.log(e)
        if (e.code === 'Escape') {   
            instance.close()  
        }
    }
}