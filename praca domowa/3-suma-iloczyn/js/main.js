function oblicz(tablica) {
    let suma = 0;
    for (let i = 0; i < tablica.length; i++) {
        suma = suma + tablica[i];
    }
    console.log('Suma elementów w tablicy równa: ' + suma);
    let iloczyn = 1;
    for (let x = 0; x < tablica.length; x++) {
        iloczyn = iloczyn * tablica[x];
    }
    console.log('Iloczyn elementów w tablicy równa się: ' + iloczyn);
}

oblicz([1, 2, 3, 4, 5, 6]);
