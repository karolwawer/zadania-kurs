function bubbleSort(tablica) {
    for (let i = tablica.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (tablica[j - 1] > tablica[j]) {
                let tempTablica = tablica[j - 1];
                tablica[j - 1] = tablica[j];
                tablica[j] = tempTablica;
            }
        }
    }
//    return tablica;
}
console.log(bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]));
