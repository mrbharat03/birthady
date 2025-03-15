const images = [];
const quotes = [
    "Brothers are what best friends can never be. Happy Birthday! 🎂",
    "To my amazing brother, may your day be filled with happiness and love! 🎉",
    "You're not just my brother, you're my best friend. Enjoy your special day! 🎁",
    "Wishing you all the success and joy in the world, my dear brother! 🚀",
    "Happy Birthday! May all your dreams come true. 🥳",
    "Brothers are like stars. You may not always see them, but you know they’re always there! ✨",
    "Growing up with you was the best adventure ever. Happy Birthday, bro! 🎈",
    "Life gave me a great gift—a brother like you! 🎊 Enjoy your special day!"
];

// Load 67 images dynamically
for (let i = 1; i <= 67; i++) {
    images.push(`images/a${i}.jpg`);
}

let currentIndex = 0;
const imageElement = document.getElementById("slideshow");

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex]; // Change image instantly without fading out
}

// Change image every **1 second**
setInterval(showNextImage, 1000);
