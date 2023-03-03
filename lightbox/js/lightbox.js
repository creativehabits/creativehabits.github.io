let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// let coffeeImage = document.getElementById("coffeeImage");
// coffeeImage.onclick = openLightbox;

let marchTen = document.getElementById("marchTen");
marchTen.onclick = openLightbox;

let marchThird = document.getElementById("marchThird");
marchThird.onclick = openLightbox;

let marchTwentyFour = document.getElementById("marchTwentyFour");
marchTwentyFour.onclick = openLightbox;

let marchThirtyFirst = document.getElementById("marchThirtyFirst");
marchThirtyFirst.onclick = openLightbox;


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;