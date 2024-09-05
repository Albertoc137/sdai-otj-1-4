document.addEventListener("DOMContentLoaded", function () {
  const devFavoritesContent = document.querySelector(".dev-favorites-content");
  // Wait a brief moment, then fade in the image
  setTimeout(() => {
    devFavoritesContent.style.opacity = 1;
  }, 500); // 500 ms delay before starting fade-in
});
