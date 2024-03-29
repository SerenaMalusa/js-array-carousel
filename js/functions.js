/**
 * funzione per passare alla slide successiva
 */
function showNextSlide() {

    // c. prendo la slide con indice slideFocus e tolgo la classe d-block e aggiungo d-none
    const oldSlide = slides[slideFocus];
    oldSlide.classList.add('d-none');
    oldSlide.classList.remove('d-block');

    // ae. prendo il thumbnail con indice SlideFocus: tolgo la classe active
    const oldThumnail = thumbnails[slideFocus];
    oldThumnail.classList.remove('active');

    // se la direzione in cui vanno le slides è verso il basso
    if (goDown) {

        // d. incremento slideFocus
        slideFocus ++;
        
        // f. se slideFocus è >= alla lunghezza di slides 
        if (slideFocus >= slides.length) {
            
            // f1. slideFocus diventa 0
            slideFocus = 0;
            
        }

    // se la direzione in cui vanno le slide non è verso il basso
    } else {

        // decremento slideFocus
        slideFocus --;
        
        // se slideFocus è < 0
        if (slideFocus < 0) {
            
            // slideFocus diventa = lunghezza array -1
            slideFocus = slides.length - 1;
            
        }

    }

    // e. prendo la slide con indice nuovo slideFocus e aggiungo la classe d-block e rimuovo d-none
    const newSlide = slides[slideFocus];
    newSlide.classList.remove('d-none');
    newSlide.classList.add('d-block');

    // af. dopo l'incremento prendo il thumbnail con indice nuovo e aggiungo la classe active
    const newThumnail = thumbnails[slideFocus];
    newThumnail.classList.add('active');

}

/**
 * funzione che attiva il setInterval e avvia il carosello
 */
function activateCicle () {

    const cicle = setInterval (showNextSlide, 3000);

    return cicle;

}