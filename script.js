let images = document.querySelectorAll("#main img");
let dots = document.querySelectorAll(".dot");
let index = 0;
let interval;


images[index].classList.add("active");
dots[index].classList.add("active");

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


startSlideshow();
