// Toggle between outline and filled Bookmark
const containers = document.querySelectorAll(".bookmark");

containers.forEach((container) => {
  const outline = container.querySelector("#outline");
  const filled = container.querySelector("#filled");

  // Add click event to the outline icon
  outline.addEventListener("click", function () {
    outline.classList.add("hidden"); // Hide outline icon
    filled.classList.remove("hidden"); // Show filled icon
  });

  // Add click event to the filled icon
  filled.addEventListener("click", function () {
    filled.classList.add("hidden"); // Hide filled icon
    outline.classList.remove("hidden"); // Show outline icon
  });
});
