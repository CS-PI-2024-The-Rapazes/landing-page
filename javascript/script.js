function modifierFont() {
    var body = document.querySelector("body");

    if(body.style.fontSize == 'x-large') {
        body.style.fontSize = 'medium';
        return;
    }
    
    body.style.fontSize = 'x-large';
    
 }

function changeIconTheme(modifierTheme) {
    const id = modifierTheme.target.id; 
    document.getElementById(id).src = "img/icons/toggle_on_b.svg";
}

function modifierTheme() {

    const theme = document.body.getAttribute("data-tema");
    const newTheme = theme == 'dark-mode' ? 'light-mode' : 'dark-mode';
    document.body.setAttribute("data-tema", newTheme);
    console.log(newTheme);
}


