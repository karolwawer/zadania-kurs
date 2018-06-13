$(document).ready(function(){
    $('.title').click(function(){
        $(this).next().slideToggle();
        $(this).parent().siblings().find('p').slideUp();
    })
})