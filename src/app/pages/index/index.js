window.onload = function () {
  var navCheck = document.getElementById('nav-check');
  var nav = document.querySelector('.nav');

  navCheck.addEventListener('change', function () {
    if (this.checked) {
      nav.style.backgroundColor = 'var(--main-color)';
    } else {
      nav.style.backgroundColor = '';
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
      btnText.textContent = "Plano: Gratis";
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

//BOTAO FONTE 
function modifierFont() {
  var body = document.querySelector("body");


  if (body.style.fontSize == 'x-large') {
    body.style.fontSize = 'large';
    
    return
  }

  body.style.fontSize = 'x-large';
}

//BOTAO DARK MODE/LIGHT

function modifierTheme() {
  const theme = document.body.getAttribute("data-theme");
  const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
  document.body.setAttribute("data-theme", newTheme);
  changeIconTheme(newTheme);
}

function changeIconTheme(theme) {
  const image = document.getElementById('icon-moon') || document.getElementById('icon-moon-light');
  if (theme === 'dark-mode') {
    image.setAttribute("src", "src/assets/img/icons/icon-moon-light.svg");
    image.setAttribute("id", "icon-moon-light");
  } else {
    image.setAttribute("src", "src/assets/img/icons/icon-moon.svg");
    image.setAttribute("id", "icon-moon");
  }
}

// Função para abrir o modal
function openModal(element) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "flex"; // Garante que o modal use flexbox para centralização
  modalImg.src = element.src;
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Adiciona evento para fechar o modal ao clicar fora da imagem
window.onclick = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
