document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-latest-work");
    const latestWorkSection = document.getElementById("latest-work");

    toggleButton.addEventListener("click", () => {
        if (latestWorkSection.style.display === "none") {
            latestWorkSection.style.display = "block";
            toggleButton.textContent = "Hide Latest Work";
        } else {
            latestWorkSection.style.display = "none";
            toggleButton.textContent = "Show Latest Work";
        }
    });
});
