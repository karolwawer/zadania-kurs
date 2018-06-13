$(document).ready(function () {
    animateStart();
});

function animateStart() {
    $('#animateOn').click(function () {
        $('#square').animate({
            left: '100px',
            height: '100px',
            width: '100px'
        }, 3000, animateColor);
    });

    function animateColor() {
        $('#square').animate({
            backgroundColor: 'blue'
        }, 5000, textShowing);
    }

    function textShowing() {
        $('#square').html('<h2>Animacja zakończona</h2>');
    }

}