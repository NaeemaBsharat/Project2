
// script.js

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.querySelector('.close');

galleryItems.forEach(item => {
    
    item.addEventListener('click', e => {
        e.preventDefault();
        const imageUrl = item.getAttribute('href');
        lightboxImage.setAttribute('src', imageUrl);
        lightbox.style.display = 'block';
    });    
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
