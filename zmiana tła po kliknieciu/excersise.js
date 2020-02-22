let font = 50;
$('.interface').click(function () {
    console.log(this);
    if ($(this).hasClass('orange')) {
        $('body').css("backgroundColor", "yellow"); //jquery
    }
    if (this.classList.contains("green")) {

        $('body').css("backgroundColor", "green");
    }
    if (this.classList.contains("plus")) {

        $('span').css("font-size", font++);
    }
    if (this.classList.contains("arrow")) {

        $('span').animate({
            "letter-spacing": "+=2"
        }, 500)
    }
})