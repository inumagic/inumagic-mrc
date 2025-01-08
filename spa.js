  document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('#medicalCarousel');
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 5000, // 5 秒自動切換
      pause: 'hover'
    });
  });
