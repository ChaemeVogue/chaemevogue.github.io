// on scroll fade content in
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches; // 760px
    if (!isMobile) {
        if (scroll >= 250) {
            $(".fade-in").addClass("appear");
        }
    }
    // if user is on mobile show content and skip the on scroll animation
    else {
        $(".fade-in").addClass("appear");
    }
});


// header background is on once the user has scrolled past the hero image
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    // if mobile, header background is always on
    if (isMobile) {
        $("header nav").addClass("background-on");
    }
    // else if not mobile, header background is on once the user has scrolled down past the hero image
    else {
        if (scroll >= 600) {
            $("header nav").addClass("background-on");
        } else {
            $("header nav").removeClass("background-on");
        }
    }
});


/*
const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});


document.querySelector("button").addEventListener
*/





