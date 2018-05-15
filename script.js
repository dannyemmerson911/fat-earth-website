(function(){
    $('.pageToggle').hide();
    $('.homePage').show();
    $('.home').on('click', function(){
        $('.pageToggle').hide();
        $('.homePage').show();
    })
    $('.tvNews').on('click', function(){
        $('.pageToggle').hide();
        $('.tvNewsPage').animate({
            height: 'toggle'
        }, 600); 
    })
    $('.film').on('click', function(){
        $('.pageToggle').hide();
        $('.filmPage').animate({
            height: 'toggle'
        }, 600);
    })
    $('.music').on('click', function(){
        $('.pageToggle').hide();
        $('.musicPage').animate({
            height: 'toggle'
        }, 600);
    })
    $('.team').on('click', function(){
        $('.pageToggle').hide();
        $('.teamPage').animate({
            height: 'toggle'
    }, 600);
    })
}());