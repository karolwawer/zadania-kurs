
    function posortujStringa(str) {
    var podzielStringa = str.split(""); 
    var posortowanaTablica = podzielStringa.sort(); 
    var polaczonyString = posortowanaTablica.join(""); 
    return polaczonyString; 
}
 
console.log(posortujStringa("Akademia108"));