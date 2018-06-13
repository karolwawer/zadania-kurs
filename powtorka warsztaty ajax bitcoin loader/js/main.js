$(document).ready(function () {
    
        function getBitcoinData(){
            var buyPrice = $('#buy-price').html();
            var sellPrice = $('#sell-price').html();
            $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            $('#buy-price').text(data.PLN.buy.toFixed(2) + data.PLN.symbol);
            $('#sell-price').text(data.PLN.sell.toFixed(2) + data.PLN.symbol);
                
                if(buyPrice > data.PLN.buy.toFixed(2) + data.PLN.symbol){
                    $('#buy-arrow').removeClass().addClass('fa fa-arrow-down');
                } else if(buyPrice < data.PLN.buy.toFixed(2) + data.PLN.symbol){
                    $('#buy-arrow').removeClass().addClass('fa fa-arrow-up');
                } else {
                   $('#buy-arrow').removeClass().addClass('fa fa-arrow-o'); 
                }
           
        })  
    };
    getBitcoinData();
    setInterval(getBitcoinData, 3000);
});
