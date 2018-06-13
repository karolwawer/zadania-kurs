function oblicz(tablica = [0, 1, 2, 3, 4, 5]) {
    let suma = 0;
    for (let i = 0; i < tablica.length; i++) {
        suma += suma + Math.pow(tablica[i],2);
    }
    return suma;
}
    console.log('suma kwadratów wynosi : '+ oblicz());