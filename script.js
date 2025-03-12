const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active"); // Animacja "X"
    navLinks.classList.toggle("active");  // Wysuwanie menu
});


let images = document.querySelectorAll(".slider img");
let dots = document.querySelectorAll(".dot");
let index = 0;
let interval;

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

function startSlideshow() {
    interval = setInterval(changeImage, 5000);
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        clearInterval(interval);
        changeImage(i);
        startSlideshow();
    });
});

images[0].classList.add("active");
dots[0].classList.add("active");
startSlideshow();


//MODAL
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

const menuImages = document.querySelectorAll(".menu-row img");

menuImages.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

const closeModal = document.querySelector(".close");

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});
