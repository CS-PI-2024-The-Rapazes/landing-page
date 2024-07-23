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


function modificaCard() {
  document.getElementById('btn-plano').addEventListener('click', function () {
    var cardNormal = document.getElementById('plano-normal');
    var cardPremium = document.getElementById('plano-premium');
    var btnText = document.getElementById('btn-plano');

    if (cardNormal.style.display === 'none') {
      cardNormal.style.display = 'block';
      cardPremium.style.display = 'none';
      btnText.textContent = 'Selecionar Plano Premium';
    } else {
      cardNormal.style.display = 'none';
      cardPremium.style.display = 'block';
      btnText.textContent = 'Selecionar Plano Padrão';
    }
    window.addEventListener('resize', function () {
      // Pega o tamanho da tela
      var largura = window.innerWidth;
      var altura = window.innerHeight;

      if (largura >= 770) {
        cardNormal.style.display = 'block';
        cardPremium.style.display = 'block';
      }

    });
  });
}

modificaCard();

