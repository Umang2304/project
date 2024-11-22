const musicImage = document.getElementById("musicImage");
const music = document.getElementById("music");

musicImage.addEventListener("click", () => {
    music.paused ? music.play() : music.pause();
});
// Simulate loading and navigation
function navigateToPage2() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Show loader and hide content
    loader.style.display = "flex";
    content.style.display = "none";

    // Navigate to Page 2 after a delay
    setTimeout(() => {
        window.location.href = "card1.html"; // Redirect to Page 2
    }, 2000); // Adjust delay as needed
}

// Initial loader simulation for Page 1
window.onload = () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simulate loading delay
    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
    }, 1500);
};
// Get the search input and body elements
const searchInput = document.querySelector('.search-input-container input');
const body = document.querySelector('body');

searchInput.addEventListener('focus', () => {
    body.classList.add('dimmed');
});

searchInput.addEventListener('blur', () => {
    body.classList.remove('dimmed');
});
