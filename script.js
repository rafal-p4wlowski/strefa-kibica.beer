// Pobieranie elementów związanych z menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Event listener dla przycisku menu
menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active"); // Animacja "X"
    navLinks.classList.toggle("active");  // Wysuwanie menu
});

// Pobieranie elementów związanych ze sliderem
const images = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");
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

// MODAL - Usprawniona implementacja
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Pobieranie wszystkich elementów figure z galerii menu
const galleryItems = document.querySelectorAll(".gallery-item figure");

// Event listener dla elementów galerii
galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        const img = this.querySelector("img");
        const caption = this.querySelector(".gallery-text").textContent;
        
        modal.style.display = "block"; // Wyświetlenie modala
        modalImg.src = img.src; // Ustawienie źródła obrazu w modalu
        modalImg.alt = caption; // Ustawienie alternatywnego tekstu
        
        // Dodanie tytułu modalu jeśli istnieje element #modalCaption
        const modalCaption = document.getElementById("modalCaption");
        if (modalCaption) {
            modalCaption.textContent = caption;
        }
        
        // Zatrzymaj przewijanie strony gdy modal jest otwarty
        document.body.style.overflow = "hidden";
    });
});

// Event listener dla zamknięcia modala (X)
closeModal.addEventListener("click", function() {
    closeModalFunction();
});

// Zamknięcie modalu po kliknięciu poza obrazem
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModalFunction();
    }
});

// Obsługa klawisza ESC do zamykania modalu
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        closeModalFunction();
    }
});

// Funkcja zamykająca modal (unikam duplikacji kodu)
function closeModalFunction() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}