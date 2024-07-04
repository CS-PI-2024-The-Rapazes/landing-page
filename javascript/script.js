function modifierFont() {
    var body = document.querySelector("body");

    if(body.style.fontSize == 'x-large') {
        body.style.fontSize = 'medium';
        return;
    }
    
    body.style.fontSize = 'x-large';
    
 }