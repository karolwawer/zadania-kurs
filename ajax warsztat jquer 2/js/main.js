'use strict';

//definicja funkcji ajax
function ajax(method, url) {

// utworzenie obiektu XMLHttpRequest - bez niego nie mozemy uzywac AJAX
let httpReq = new XMLHttpRequest();

// otwieram polaczenie z serwerem
httpReq.open(method, url);

// onreadystatechange uruchamiana jest za kazdym razem, kiedy zmieni sie readyState (sprawdzajaca status polaczenia)
// 0: połączenie nienawiązane
// 1: połączenie nawiązane
// 2: żądanie odebrane
// 3: przetwarzanie żądania
// 4: dane zwrócone i gotowe do użytku

httpReq.onreadystatechange = function() {
if(httpReq.readyState == 4) {
if(httpReq.status == 200) {

// odkladamy dane do szuflady
let returnData = httpReq.responseText;

// wywylujemy metode, ktora obrabia nasze dane
httpReq.onsuccess(returnData);

// zeruj obiekt, aby nie utrzymywac polaczenia
httpReq = null;
}
}
}

httpReq.onsuccess = function (response) {
let jsonObj = JSON.parse(response);
console.log(jsonObj);

for(let i = 0; i < jsonObj.length; i++) {
let paragraf1 = document.createElement('p');
let paragraf2 = document.createElement('p');
let paragraf3 = document.createElement('p');

paragraf1.innerHTML = 'User Id: ' + jsonObj[i].id;
paragraf2.innerHTML = 'User Name: ' + jsonObj[i].name;
paragraf3.innerHTML = 'User URL: ' + jsonObj[i].website + '<br>-----------';

document.body.appendChild(paragraf1);
document.body.appendChild(paragraf2);
document.body.appendChild(paragraf3);
}
}

// wysylamy zadanie
httpReq.send();
}

window.addEventListener('scroll', function() {
let actualPos = Math.ceil(window.pageYOffset);
let windowHeight = window.innerHeight;
let documentHeight = document.documentElement.offsetHeight;

if(windowHeight + actualPos === documentHeight) {
ajax('GET', 'https://jsonplaceholder.typicode.com/users');

}
});