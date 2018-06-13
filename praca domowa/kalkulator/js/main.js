  function pobierz (x) {
  document.getElementById("ekran").value += x ;

}

function oblicz () {
  let ekran = document.getElementById("ekran").value;
  document.getElementById("ekran").value = eval(ekran);
    
}

function czysc() {
document.getElementById("ekran").value = "";
}