import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    description: 'Sevimli Kedi',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/21/15/53/dog-1846037__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/21/15/53/dog-1846037_1280.jpg',
    description: 'Mutlu Köpek',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    description: 'Güzel Ağaç',
  },
];

const galleryContainer = document.querySelector('.gallery');

const markup = images.map(({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
    </a>
  </li>
`).join('');

galleryContainer.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
