const carouselImages = document.getElementById('carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');

        let currentIndex = 0;

        function updateCarousel() {
            const width = images[0].clientWidth;
            carouselImages.style.transform = `translateX(${-currentIndex * width}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        // Ajusta o carrossel no resize da janela
        window.addEventListener('resize', updateCarousel);