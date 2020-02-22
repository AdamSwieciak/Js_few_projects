$(document).scroll(function () {
    const scrollPosition = $(this).scrollTop();
    const windowhei = $(window).height();

    if (scrollPosition > $('.art2').offset().top + $('.art2').outerHeight() - windowhei) {
        $('article.art2').addClass('active');
    }
    if (scrollPosition > $('.art3').offset().top + $('.art3').outerHeight() - windowhei) {
        $('article.art3').addClass('active');
    }
    if (scrollPosition > $('.art4').offset().top + $('.art4').outerHeight() - windowhei) {
        $('article.art4').addClass('active');
    }
    if (scrollPosition > $('.op1').offset().top + $('.op1').height() / 2 - windowhei) {
        $('article.op1').addClass('active');
    }
    if (scrollPosition > $('.op2').offset().top + $('.op2').height() / 2 - windowhei) {
        $('article.op2').addClass('active');
    }


    if (scrollPosition < 100) {
        $('article').removeClass('active');
    }
})