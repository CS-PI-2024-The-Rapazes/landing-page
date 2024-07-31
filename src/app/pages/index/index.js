window.onload = function () {
  var navCheck = document.getElementById('nav-check');
  var nav = document.querySelector('.nav');
  var icone = document.querySelector('.icone');
  var labelMenu = document.querySelector('.label-menu');

  navCheck.addEventListener('change', function () {
    if (this.checked) {
      nav.style.backgroundColor = 'var(--main-color)';
      icone.style.background = 'var(--background-light)';
    } else {
      nav.style.backgroundColor = '';
      icone.style.backgroundColor = '';
      labelMenu.style.backgroundColor = '';
    }
  });
};

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.classList.add("sombra");
  } else {
    nav.classList.remove("sombra");
  }
});

function modificaCard() {
  document.getElementById("btn-plano").addEventListener("click", function () {
    var cardNormal = document.getElementById("plano-normal");
    var cardPremium = document.getElementById("plano-premium");
    var btnText = document.getElementById("btn-plano");

    if (cardNormal.style.display === "none") {
      cardNormal.style.display = "flex";
      cardPremium.style.display = "none";
      btnText.textContent = "Plano: Premium";
    } else {
      cardNormal.style.display = "none";
      cardPremium.style.display = "flex";
      btnText.textContent = "Plano: Padrão";
    }
    window.addEventListener("resize", function () {
      var largura = window.innerWidth;

      if (largura >= 770) {
        cardNormal.style.display = "flex";
        cardPremium.style.display = "flex";
      }
    });
  });
}

modificaCard();
