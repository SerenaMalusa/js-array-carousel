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

#### MILESTONE 3
##### Traccia

Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.  

#### Svolgimento

a. prendo tutte le slides
b. al click del bottone next
c. prendo la slide con indice slideFocus e tolgo la classe d-block
d. incremento slideFocus
e. prendo la slide con indice nuovo slideFocus e aggiungo la classe d-block
f. se slideFocus è >= alla lunghezza di slides 
f1. slideFocus diventa 0
g. faccio lo stesso per prev button
