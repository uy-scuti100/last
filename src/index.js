const menu = document.getElementById('menu');
const nav = document.getElementById('navigation');
const overLay = document.querySelector(".overlay");
const cancelToggle = document.getElementById("toggleoff");

menu.addEventListener('click', () => {
    if (nav.style.display === "none") {
        nav.style.display = "block";
        overLay.style.display = "block";

    } else {
        nav.style.display = "none";
    }
})

cancelToggle.addEventListener("click", () => {
    nav.style.display = "none";
    overLay.style.display = "none";
})