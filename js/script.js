// prendo l'elemento html wrapper dove andrò ad inserire le slides e quello dei thumbnails
const slidesEl = document.querySelector('.slides');
const thumbnailsEl = document.querySelector('.thumbanils');
// creo variabile che conterrà le stringa html da inserire in pagina
let slidesHtml = '';
//let thumbnailsHtml = '';

// 1. creo array che contiene i nomi delle immagini che devo inserire
const pictures = ['1','2','3','4','5'];
// creo la variabile che determina la slide con focus
let slideFocus = 0;

// 2. creo ciclo che conta da 1 a lunghezza dell'array
for (i=0; i<pictures.length; i++) {

    // mi prendo il singolo elemento il cui indice corrisponda all'iterazione del ciclo
    let picture = pictures[i];

    // creo la variabile displayClass che è diverse solo per la slide con focus
    let displayClass = 'd-none';
    if (i == slideFocus) displayClass = 'd-block';

    // 3. per ogni ciclo devo creare la stringa per le slides 
    // 4. ed aggiungerla alle altre precedentemente create
    slidesHtml += `
    <div class="slide ${displayClass}">
        <img src="./img/0${picture}.webp" alt="picture 0${picture}">
    </div>`;

}

// 5. dopo la fine del ciclo devo stampare la stringa completa nell'html del wrapper
slidesEl.innerHTML = slidesHtml;
// thumbnailsEl.innerHTML = thumbnailsHtml;
const slides = document.querySelectorAll('.slide');

for (i=0; i<pictures.length; i++) {

    // mi prendo il singolo elemento il cui indice corrisponda all'iterazione del ciclo
    let picture = pictures[i];

    // aa per ogni ciclo devo creare la stringa per i thumbnails
    // ab ed aggiungerla alle altre precedentemente create
    const thumbnail = document.createElement('div');
    thumbnail.setAttribute('data-index',i);
    thumbnail.classList.add('thumbnail');
    if (i == slideFocus) thumbnail.classList.add('active');
    thumbnail.innerHTML = `<img src="./img/0${picture}.webp" alt="picture 0${picture}">`;
    thumbnailsEl.append(thumbnail);

    // prendo tutti i thumbnail creati
    const thumbnails = document.querySelectorAll('.thumbnail');

    // al click del thumbnail
    thumbnail.addEventListener('click', function () {
          
        // prendo slide attiva e cambio il display
        const oldSlide = slides[slideFocus];
        oldSlide.classList.remove('d-block');
        oldSlide.classList.add('d-none');

        // prendo thumbnail attivo e levo classe active
        const oldThumnail = thumbnails[slideFocus];
        oldThumnail.classList.remove('active');

        // assegno a slidefocus il valore dell'attributo data index che identifica il thumbnail
        slideFocus = this.getAttribute('data-index'); 

        // prendo la slide con indice =  nuovo slidefocus e cambio il display
        const newSlide = slides[slideFocus];
        newSlide.classList.add('d-block');
        newSlide.classList.remove('d-none');

        // prendo il thumbnail con indice = nuovoslidefocus e aggiungo classe active
        const newThumnail = thumbnails[slideFocus];
        newThumnail.classList.add('active');

    })
}


/********* MILESTONE 3 **********/

// a. prendo tutte le slides e gli altri elementi che mi servono dal dom
const thumbnails = document.querySelectorAll('.thumbnail');
const nextBtnEL = document.querySelector('#arrow-next');
const prevBtnEl = document.querySelector('#arrow-prev');

// b. al click del bottone next
nextBtnEL.addEventListener('click', function () {

    // c. prendo la slide con indice slideFocus e tolgo la classe d-block e aggiungo d-none
    const oldSlide = slides[slideFocus];
    oldSlide.classList.add('d-none');
    oldSlide.classList.remove('d-block');

    // ae. prendo il thumbnail con indice SlideFocus: tolgo la classe active
    const oldThumnail = thumbnails[slideFocus];
    oldThumnail.classList.remove('active');

    // d. incremento slideFocus
    slideFocus ++;
    
    // f. se slideFocus è >= alla lunghezza di slides 
    if (slideFocus >= slides.length) {
        
        // f1. slideFocus diventa 0
        slideFocus = 0;
        
    }

    // e. prendo la slide con indice nuovo slideFocus e aggiungo la classe d-block e rimuovo d-none
    const newSlide = slides[slideFocus];
    newSlide.classList.remove('d-none');
    newSlide.classList.add('d-block');

    // af. dopo l'incremento prendo il thumbnail con indice nuovo e aggiungo la classe active
    const newThumnail = thumbnails[slideFocus];
    newThumnail.classList.add('active');

})

// g. faccio lo stesso per prev button
prevBtnEl.addEventListener('click', function () {

    // prendo la slide con indice slideFocus e tolgo la classe d-block e aggiungo d-none
    const oldSlide = slides[slideFocus];
    oldSlide.classList.add('d-none');
    oldSlide.classList.remove('d-block');

    // ae. prendo il thumbnail con indice SlideFocus: tolgo la classe active
    const oldThumnail = thumbnails[slideFocus];
    oldThumnail.classList.remove('active');

    // decremento slideFocus
    slideFocus --;
    
    // se slideFocus è < 0
    if (slideFocus < 0) {
        
        // slideFocus diventa = lunghezza array -1
        slideFocus = slides.length - 1;
        
    }

    // prendo la slide con indice nuovo slideFocus e aggiungo la classe d-block e rimuovo d-none
    const newSlide = slides[slideFocus];
    newSlide.classList.remove('d-none');
    newSlide.classList.add('d-block');

    // af. dopo il decremento prendo il thumbnail con indice nuovo e aggiungo la classe active
    const newThumnail = thumbnails[slideFocus];
    newThumnail.classList.add('active');

})