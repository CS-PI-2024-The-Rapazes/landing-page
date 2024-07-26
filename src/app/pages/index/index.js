// MENU MOBILE DROPDOWN
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.classList.add("sombra");
  } else {
    nav.classList.remove("sombra");
  }

});

function modificaCard() {
  document.getElementById('btn-plano').addEventListener('click', function () {
    var cardNormal = document.getElementById('plano-normal');
    var cardPremium = document.getElementById('plano-premium');
    var btnText = document.getElementById('btn-plano');

    if (cardNormal.style.display === 'none') {
      cardNormal.style.display = 'flex';
      cardPremium.style.display = 'none';
      btnText.textContent = 'Plano: Premium';
    } else {
      cardNormal.style.display = 'none';
      cardPremium.style.display = 'flex';
      btnText.textContent = 'Plano: Padrão';
    }
    window.addEventListener('resize', function () {
      var largura = window.innerWidth;

      if (largura >= 770) {
        cardNormal.style.display = 'flex';
        cardPremium.style.display = 'flex';
      }

    });
  });
}

modificaCard();

