#### MILESTONE 2 
##### Traccia
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.  
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.  
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.  

##### Svolgimento
1. creo array che contiene i nomi delle immagini che devo inserire
2. creo ciclo che conta da 0 a lunghezza dell'array-1
3. per ogni ciclo devo creare la seguente stringa (dove i sta per l'indice del ciclo): 
    ```
    <div class="slide">
        <img src="./img/0${elemento con indice i-1}.webp" alt="picture 0${elemento con indice i-1}">
    </div>
    ``` 
4.  per ogni ciclo devo aggiungere questa stringa alle altre precedentemente create
5. dopo la fine del ciclo devo stampare la stringa completa nell'html del wrapper

#### MILESTONE 3 & BONUS 1
##### Traccia

Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.  
Aggiungere il ciclo infinito del carosello.  
Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all'immagine precedente, dovrà comparire l'ultima immagine dell'array e viceversa

#### Svolgimento

a. prendo tutte le slides
b. al click del bottone next
c. prendo la slide con indice slideFocus e tolgo la classe d-block
d. incremento slideFocus
e. prendo la slide con indice nuovo slideFocus e aggiungo la classe d-block
f. se slideFocus è >= alla lunghezza di slides 
f1. slideFocus diventa 0
g. faccio lo stesso per prev button


#### BONUS 2
#### Traccia
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell'immagine grande attiva, come nello screenshot proposto.  
Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all'immagine attiva, che invece avrà un bordo colorato.  
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva. 

#### Svolgimento
aa. nel ciclo che crea le immagini creo altra stringa (dove i sta per l'indice del ciclo): 
    ```

    <div class="thumbnail">
        <img src="./img/0${elemento con indice i-1}.webp" alt="picture 0${elemento con indice i-1}">
    </div>
    ``` 
ab. per ogni ciclo devo aggiungere questa stringa alle altre precedentemente create
ac. dopo la fine del ciclo devo stampare la stringa completa nell'html del wrapper

ad. al click della freccia next
ae. prendo il thumbnail con indice SlideFocus: tolgo la classe active
af. dopo l'incremento prendo il thumbnail con indice nuovo e aggiungo la classe active

ag. faccio lo stesso per la freccia prev
