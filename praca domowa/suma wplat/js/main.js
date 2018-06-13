$(document).ready(function(){
 $('#count-sum').click(function(){
     let suma = 0;
     $('.salary').each(function(index, element) {
         suma += parseInt($(this).html());        
     });
     $('#sum').html(suma);
 });
});