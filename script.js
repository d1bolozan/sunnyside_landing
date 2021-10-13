$('.header__button').on('click', function(e){
    $('.menu').toggleClass("active");
    $('.icon-hamburger').toggleClass("btn__active");
    e.preventDefault();
})