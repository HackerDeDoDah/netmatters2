// ----accordion------------------
document.querySelector(".accordion").addEventListener("click", function() {
    // const panel = document.querySelector(".panel");
    // panel.style.display = panel.style.display === "block" ? "none" : "block";
    // panel.classList.toggle("active");

    document.querySelector(".panel").classList.toggle("active");
});