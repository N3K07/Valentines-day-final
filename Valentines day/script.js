const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gifContainer = document.querySelector('.gif-container').querySelector('img');

let noButtonTexts = [
    "Are you sure?",
    "Really sure?",
    "Are you positive?",
    "Sunshine please",
    "Just think about it",
    "If you say no, I'll be very sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "Ok fine, I'll stop asking....",
    "Just kidding, PLEASE SAY YES",
    "You're breaking my heart :c",
    "Don't make me beg",
    "You'll make me happy"
];
let currentNoButtonTextIndex = 0;

noBtn.addEventListener('click', () => {
    noBtn.textContent = noButtonTexts[currentNoButtonTextIndex];
    currentNoButtonTextIndex = (currentNoButtonTextIndex + 1) % noButtonTexts.length;

    // Expand the Yes button
    const yesBtnWidth = yesBtn.offsetWidth;
    const yesBtnHeight = yesBtn.offsetHeight;
    yesBtn.style.width = `${yesBtnWidth * 1.1}px`;
    yesBtn.style.height = `${yesBtnHeight * 1.1}px`;
});

yesBtn.addEventListener('click', () => {
    gifContainer.src = "images/bear hug.gif";
});
