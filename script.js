(function(){
    $('.pageToggle').hide();
    $('.homePage').show();
    $('.home').on('click', function(){
        $('.pageToggle').hide();
        $('.homePage').show();
    })
    $('.tvNews').on('click', function(){
        $('.pageToggle').hide();
        $('.tvNewsPage').show(); 
    })
}());