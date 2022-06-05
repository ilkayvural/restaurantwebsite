$(document).ready(function() {
    let menuBtn = document.querySelector('#menuBtn');
    let navbar = document.querySelector('.header .navbar');


    menuBtn.onclick = () => {
        menuBtn.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }

    $('.control-buttons .buttons').click(function() {
        $(this).addClass('button-active').siblings().removeClass('button-active');
        let filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.menu .image').show(400);
        } else {
            $('.menu .image').not('.' + filter).hide(200);
            $('.menu .image').filter('.' + filter).show(400);
        }
    })



});