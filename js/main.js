$(document).ready(function () {
    let home = $(".home");
    let card = $('.card');
    
    home.animate({
        width: "100%",

    }, 2000, function () {
        home.animate({
            height: "100vh"
        }, 2000, function () {
            $('h1').slideDown(2000, function () {
                card.eq(0).slideDown(2000, function () {
                    card.eq(1).slideDown(2000, function () {
                        card.slideDown(2000)
                    })
                })
            })
        })
    })
})