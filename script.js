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
    $('.film').on('click', function(){
        $('.pageToggle').hide();
        $('.filmPage').show();
    })
    $('.music').on('click', function(){
        $('.pageToggle').hide();
        $('.musicPage').show();
    })
    $('.team').on('click', function(){
        $('.pageToggle').hide();
        $('.teamPage').show();
    })
}());