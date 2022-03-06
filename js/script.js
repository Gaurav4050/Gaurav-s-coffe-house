$(document).ready(function(){

    $('.icon .fa-bars').click(function(){
        $('.navbar .menu').toggleClass('active')

        console.log('hello world');
        

    });
    $('.icon .fa-search').click(function(){
        $('header .search input').toggleClass('active')
        $('header .search i').toggleClass('active')

        console.log('hello world');
    });

    $(window).scroll(function(){
        $('.navbar .menu').removeClass('active')
    })
});


