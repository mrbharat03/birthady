const images = [];
const birthdayWishes = [
    "🎉 Happy Birthday, Bro! Wishing you an amazing year ahead! 🎂",
    "🎁 May all your dreams come true! Enjoy your special day! 🎈",
    "🎊 You’re the best brother ever! Stay awesome & keep smiling! 😊",
    "🔥 May your year be filled with happiness, success, and laughter! 🎇",
    "🍰 Let's eat cake and celebrate! Have the best birthday ever! 🎂",
    "🚀 Another year older, wiser, and cooler! Keep shining, bro! 😎",
    "💖 You are my greatest gift, bro! Love you always! ❤️",
    "🎸 Rock on, bro! Wishing you an unforgettable birthday! 🤘"
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
function showBirthdayWish() {
    const giftBox = document.querySelector(".gift-box");
    const wishContainer = document.querySelector(".wish-container");
    const wishText = document.getElementById("birthday-wish");

    // Animate the gift box opening
    giftBox.classList.add("open");

    // Show a random birthday wish
    let randomWish = birthdayWishes[Math.floor(Math.random() * birthdayWishes.length)];
    wishText.innerText = randomWish;

    // Make the wish visible with animation
    wishContainer.classList.add("show");

    // Close the gift box and hide the wish after 5 seconds
    setTimeout(() => {
        giftBox.classList.remove("open");
        wishContainer.classList.remove("show");
        wishText.innerText = "Click the gift box to reveal your wish! 🎁";
    }, 5000);
}const images = [];
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
    images.push(`a${i}.jpg`);
}

let currentIndex = 0;
const imageElement = document.getElementById("slideshow");

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex]; // Change image instantly without fading out
}

// Change image every **1 second**
setInterval(showNextImage, 1000);
