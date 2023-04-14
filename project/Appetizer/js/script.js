
// preloader
$(window).on("load", function () {
    $('.preloader').fadeOut('slow');
});

// option color
function pratik1(asdf) {
    document.querySelector(':root').style.setProperty('--yellow', asdf);
}
// header

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200 ) {
        $('header').addClass('black');
    }
    else {
        $('header').removeClass('black');
    }
})

// wow
wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    }
)
wow.init();