$(document).ready(function(){
    console.log("Icone display");

    const colori = ['blue','orange','purple'];

    // icone set da importare
    // ogni elemento dell' array 'icons' ha proprietà: na,e, prefix, type, family
    const icons = [
        {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        },
        {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        },
        {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        },
        {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        },
        {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        },
        {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        },
        {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        },
        {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        },
        {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        },
    ];

    
    // riferimento DOM .icone
    var boxContenitore = $('.icone');

    /*chiamata funzione */
    // stampaIcone(icons, boxContenitore);

    /*stampa con le icone colorate */
    const iconeColorate = iconeColor(icons, colori);
    console.log(iconeColorate);
    stampaIcone(iconeColorate, boxContenitore);

    /** barra  dei filtri */
    const select = $('#type');
    const tipi = prendiTipo(icons);

    // generazione di opzioni
    genOpt(tipi, select);

    // cambio dell' evento
    select.change( () => {
        const selected = select.val();
        console.log(selected);

        const filteredIcone = iconeFiltrate(iconeColorate, selected);
        stampaIcone(filteredIcone, boxContenitore);
    });



}) // fine documento ready




/** la funzione stampa a schermo le img delle icone contenenti all' array icona */ 
function stampaIcone(arrayIcone, box){

    // reset dell' output
    box.html("");

    // fa il loop a ciascun elemento dell' arrayIcone, stampa ogni singolo elemento icona
    arrayIcone.forEach((icona) => {
        const {family, prefix, name, color} = icona;

        /* gli apici `` sono quelli 
        * facendo alt + 96
        * si chiamano Backtick    */

        const html =                /* ${ } interpolazione*/   
        `<div class="icona">             
            <i class="${family} ${prefix}${name}" 
            style="color: ${color}"></i>     
            <div class="nome">${name}</div>     
        </div>`;

        box.append(html);
    });
}


/* funzione restituisce colore associato al tipo dell' icona*/
function iconeColor(arrayIcone, colori){

    // prendere il tipo delle icone
    const tipo = prendiTipo(arrayIcone);
    console.log(tipo);

    // assegnare un colore ad ogni tipo
    const iconeColorate = arrayIcone.map( (icona) =>{
        const indiceTipo = tipo.indexOf(icona.type);
        return {
            ...icona,
            color: colori[indiceTipo]
        };
    });
    return iconeColorate;

}

function prendiTipo(arrayIcone){
    const tipo = [];

    arrayIcone.forEach(icona => {
        if(! tipo.includes(icona.type) ){
            tipo.push(icona.type);
        }
    });
    return tipo;
}

/** funzione genera le opzioni della barra filtri */
function genOpt(tipi, select){
    tipi.forEach( (opt) => {
        select.append(`<option value="${opt}">${opt}</option>`);
    });
}

function iconeFiltrate(iconeColorate, selected){

    if(selected === "all"){
        return iconeColorate;
    }

    const filtered  = iconeColorate.filter( (icona) => {
        return icona.type === selected;
    });

    return filtered;
}