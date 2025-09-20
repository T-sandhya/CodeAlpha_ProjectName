const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

function filterGallery(category) {
  galleryImages.forEach(img => {
    if (category === 'all' || img.dataset.category === category) {
      img.classList.remove('hidden');
    } else {
      img.classList.add('hidden');
    }
  });
}
