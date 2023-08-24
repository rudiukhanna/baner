var text = document.querySelector(".container_wrapper_text-container_text");
var animatedImage = document.querySelector(".container_wrapper_animated-image");
var currentIndex = 0;

var titles = ["Best Seller", "Super Sale"];
var subtitles = ["New style", "New arrivals"];
var backgrounds = ["url(assets/shoes.png)", "url(assets/woman.png)"];

var additionalBackgrounds = [
    "url(assets/yellowBcg.png)"
];

var additionalBackgroundsIndex = 0;

function changeTextAndBackground() {
    text.querySelector(".container_wrapper_text-container_text_title").textContent = titles[currentIndex];
    text.querySelector(".container_wrapper_text-container_text_subtitle").textContent = subtitles[currentIndex];
    
    animatedImage.style.backgroundImage = backgrounds[currentIndex] + ", " + additionalBackgrounds[additionalBackgroundsIndex];
    
    currentIndex = (currentIndex + 1) % titles.length;
}

function animate() {
    changeTextAndBackground();

    additionalBackgroundsIndex = (additionalBackgroundsIndex + 1) % additionalBackgrounds.length;

    setTimeout(animate, 4000);
}

animate();


