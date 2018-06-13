$(document).ready(function () {
    let licznik_temp = 1;
    let ilosc_postow = $('.single-post').length;

    function loadData(licznik) {

        $.getJSON("https://jsonplaceholder.typicode.com/photos/" + licznik,
            function (data) {

                let figureHolder = document.createElement('figure');
                $(figureHolder).addClass('single-post');
                let imgHolder = document.createElement('img');
                $(imgHolder).attr('src', data.url);
                let figHolder = document.createElement('figcaption');
                $(figHolder).text(data.id + ' ' + data.title);
                console.log(figHolder);

                $(figureHolder).append(imgHolder);
                $(figureHolder).append(figHolder);
                $('#main').append(figureHolder);
                licznik_temp = licznik;

                if (licznik_temp < ilosc_postow + 10) {
                    loadData(++licznik_temp)
                }
            })
    }
    
    loadData(licznik_temp);
    
    $('#btn').click(function () {
        licznik_temp++;
        ilosc_postow = $('.single-post').length;
        loadData(licznik_temp);
    })

})
