// prendo l'elemento html wrapper dove andrò ad inserire le slides
const slidesEl = document.querySelector('.slides');

// 1. creo array che contiene i nomi delle immagini che devo inserire
const pictures = ['1','2','3','4','5'];

// creo variabile che conterrà la stringa html da inserire in pagina
let slidesHtml = '';

// creo la variabile che determina la slide con focus
let slideFocus = pictures.length - 1;

// 2. creo ciclo che conta da 1 a lunghezza dell'array
for (i=0; i<pictures.length; i++) {

    // mi prendo il singolo elemento il cui indice corrisponda all'iterazione del ciclo
    let picture = pictures[i];

    // creo la variabile displayClass
    let displayClass = 'd-none';

    // displayClass è vuota solo per la slide con focus
    if (i == slideFocus) displayClass = '';

    // 3. per ogni ciclo devo creare la stringa
    let slideHtml = `
    <div class="slide ${displayClass}">
        <img src="./img/0${picture}.webp" alt="picture 0${picture}">
    </div>`;

    // 4.  per ogni ciclo devo aggiungere questa stringa alle altre precedentemente create
    slidesHtml += slideHtml;

}

// 5. dopo la fine del ciclo devo stampare la stringa completa nell'html del wrapper
slidesEl.innerHTML = slidesHtml;