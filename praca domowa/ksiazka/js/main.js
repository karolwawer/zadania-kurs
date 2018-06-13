'use strict';

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        
        if (this.przeczytana === true) {
            return 'Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana.';
        } else {
            return 'Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana.';
        }
    }
}

let wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
let trylogiaCzarnegoMaga = new Ksiazka('Trylogia Czarnego Maga', 'Trudi Canavan', false);
let pierwszePrawoMagii = new Ksiazka('Pierwsze prawo magii', 'Terry Goodgind', false);

wiedzmin.opiszKsiazke();
trylogiaCzarnegoMaga.opiszKsiazke();
pierwszePrawoMagii.opiszKsiazke();

let ksiazki = [wiedzmin, trylogiaCzarnegoMaga, pierwszePrawoMagii];

function iloscPrzeczytanych(ksiazki) {
    let przeczytanych = 0;

    for (let i = 0; i < ksiazki.length; i++) {
        if (ksiazki[i].przeczytana === true) {
            przeczytanych += 1;
    
        }
        console.log(ksiazki[i].opiszKsiazke());
    }
    console.log("Ilosć książek przeczytanych to " + przeczytanych);
}

iloscPrzeczytanych(ksiazki);
