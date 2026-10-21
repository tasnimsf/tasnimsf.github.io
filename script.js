// Menu for mobile
const tel = document.getElementById("menuTel");
const nav = document.getElementById("nav");
tel.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// Année dynamique dans le pied de page
document.getElementById("year").textContent = new Date().getFullYear();
