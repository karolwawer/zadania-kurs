function odwrocStringa(str) {
    var podzielStringa = str.split(""); 
    var odwroconaTablica = podzielStringa.reverse(); 
    var polaczonyString = odwroconaTablica.join(""); 
    return polaczonyString; 
}
 
console.log(odwrocStringa("Akademia108"));