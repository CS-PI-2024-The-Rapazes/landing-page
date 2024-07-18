// MENU MOBILE DROPDOWN
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

// BOTÃO TOGGLE
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownBotao");
  const dropdownContent = document.getElementById("dropdownConteudo");

  dropdownButton.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-botao")) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});

// BOX SHADOW NO MENU
window.addEventListener("scroll", function () {
  var topBar = document.querySelector(".top-bar");
  if (window.scrollY > 50) {
    topBar.classList.add("shadow");
  } else {
    topBar.classList.remove("shadow");
  }
});
