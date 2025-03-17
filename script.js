// Pobieranie elementów związanych z menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Event listener dla przycisku menu
menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active"); // Animacja "X"
    navLinks.classList.toggle("active");  // Wysuwanie menu
});

// Pobieranie elementów związanych ze sliderem
let images = document.querySelectorAll(".slider img");
let dots = document.querySelectorAll(".dot");
let index = 0;
let interval;

// Funkcja zmieniająca obraz w sliderze
function changeImage(newIndex = null) {
    if (newIndex !== null) {
        index = newIndex;
    }

    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");

    index = (index + 1) % images.length;
}

// Funkcja uruchamiająca pokaz slajdów
function startSlideshow() {
    interval = setInterval(changeImage, 5000);
}

// Event listener dla kropek slidera
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        clearInterval(interval); // Zatrzymanie pokazu slajdów
        changeImage(i); // Zmiana obrazu na kliknięty
        startSlideshow(); // Ponowne uruchomienie pokazu slajdów
    });
});

// Ustawienie początkowego obrazu i kropki jako aktywne
images[0].classList.add("active");
dots[0].classList.add("active");
startSlideshow(); // Rozpoczęcie pokazu slajdów

// MODAL
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

// Pobieranie obrazów z menu
const menuImages = document.querySelectorAll(".menu-row img");

// Event listener dla obrazów w menu
menuImages.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block"; // Wyświetlenie modala
        modalImg.src = this.src; // Ustawienie źródła obrazu w modalu
        captionText.innerHTML = this.alt; // Ustawienie podpisu obrazu
    });
});

// Pobieranie elementu zamykającego modal
const closeModal = document.querySelector(".close");

// Event listener dla zamknięcia modala
closeModal.addEventListener("click", function() {
    modal.style.display = "none"; // Ukrycie modala
});