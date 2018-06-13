'use strict';
//definicja funkcji ajax
function ajax(method, url){
    
//    utworzenie obiektu XMLhttpReques - bez niego nie mozemy uzywac ajax
    let httpReq = new XMLHttpRequest();
    
//    otwieramy połączenie z serwerem
    httpReq.open(method, url);
    
//    onreadystagechange uruchamiana jest za kazdym razem, kiedy zmienia sie readyState 
    /*0:polącznie nie nawiazane
    1:połączenia nawiazane
    2:żadanie połączneia
    3:przetwarzanie żądania
    4:dane zwrócone i gotowe do uzycia*/
    
    httpReq.onreadystatechange = function(){
        if(httpReq.readyState == 4){
            if(httpReq.status == 200){
//                odkladamy dane do szufladki
                let returnData = httpReq.responseText;
                
//                    wywołujemy metode ktora obrabia nasze dane
                httpReq.onsuccess(returnData);
                
//                zeruje obiekt, aby nie utrzymywac połączenia 
                httpReq = null;
            }
        }
    }
    
//    definicja onsuccess
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
        console.log(jsonObj);
        
        let paragraf1 = document.createElement('p');
        paragraf1.innerHTML = jsonObj.userId;
        document.body.appendChild(paragraf1);
        let paragraf2 = document.createElement('p');
        paragraf2.innerHTML = jsonObj.userName;
        document.body.appendChild(paragraf2);
        let paragraf3 = document.createElement('p');
        paragraf3.innerHTML = jsonObj.userURL;
        document.body.appendChild(paragraf3);
    }
//    wysylamy żądanie
    httpReq.send();
}
function pobierzDane(){
    ajax('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl');
}

document.getElementById('pobierz').addEventListener('click', pobierzDane);
