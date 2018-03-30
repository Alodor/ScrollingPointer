$(document).ready(() => {
    var sections = [];
    var scrolled_id = false;
    var id = false;
    var $navbar = $('.scrolling-pointer');
    var $navbar__links = $navbar.find('.navbar__link');

    $navbar__links.each(function(){
        sections.push($($(this).attr('href')));
    });

    $navbar__links.click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
    });

    $(window).scroll(function(e){
        e.preventDefault();
        var scrollTop = $(this).scrollTop() + ($(window).height() / 3);


        for(var i in sections){
            var section = sections[i];

            if(scrollTop > section.offset().top){
                scrolled_id = section.attr('id');   
            }

            if(scrolled_id !== id){
                id = scrolled_id;

                //$navbar__links.removeClass('navbar__link--current');

                $('a[href="#'+ id + '"]', $navbar).addClass('navbar__link--current');
            }
        }
    });

    $(window).trigger('scroll');


    // Media Query
    var mediaquery = window.matchMedia('(max-width: 767px)')

    if (mediaquery.matches) {
        // Fijar la barra de navegacion
        $(window).scroll(() => {
            //console.log($(this).scrollTop())                  

            if ($(this).scrollTop() > 2279) {                     
                $('.scrolling-pointer').css({
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                    'right': '0'
                })

                $('a[href="#'+ id + '"]', $navbar).addClass('navbar__link--current')

            } else {
                $('.scrolling-pointer').css({
                    'position': 'relative'
                })

                $navbar__links.removeClass('navbar__link--current')
            }
        })   

    } else {
        // Fijar la barra de navegacion
        $(window).scroll(() => {
            //console.log($(this).scrollTop())                  

            if ($(this).scrollTop() > 852) {                       
                $('.scrolling-pointer').css({
                    'position': 'fixed',
                    'top': '0',
                    'left': '0',
                    'right': '0'
                })

                $('a[href="#'+ id + '"]', $navbar).addClass('navbar__link--current')

            } else {
                $('.scrolling-pointer').css({
                    'position': 'relative'
                })

                $navbar__links.removeClass('navbar__link--current')
            }
        })                    
    }

})