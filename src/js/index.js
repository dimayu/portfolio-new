window.addEventListener('load', function () {
    //Menu button on click event
    // document.querySelector('.mobile-nav-button').addEventListener('click', function () {
    //     // Toggles a class on the menu button to transform the burger menu into a cross
    //     document.querySelector('.mobile-nav-button .mobile-nav-button__line:nth-of-type(1)').toggle('mobile-nav-button__line--1');
    //     document.querySelector('.mobile-nav-button .mobile-nav-button__line:nth-of-type(2)').toggle('mobile-nav-button__line--2');
    //     document.querySelector('.mobile-nav-button .mobile-nav-button__line:nth-of-type(3)').toggle('mobile-nav-button__line--3');
    //
    //     // Toggles a class that slides the menu into view on the screen
    //     document.querySelector('.mobile-menu').toggle('mobile-menu--open');
    //     return false;
    // });
});
window.addEventListener('load', function () {
    let menu = document.querySelector('.js-menu');
    let topLink = document.querySelector('.js-top');

    if (window.location.hash != '') {
        scrollToId(window.location.hash);
    }

    menu.addEventListener('click', function (e) {
        if (e.target.classList.contains('js-menu__link')) {
            e.preventDefault();

            let link = e.target;
            scrollToId(link.hash);

            menu.querySelector('.js-menu__link-active').classList.remove('js-menu__link-active');
            link.classList.add('js-menu__link-active');
        }
    });

    topLink.addEventListener('click', function (e) {
        e.preventDefault();

        let target = document.querySelector('.header');
        let clientHeight = document.querySelector('.js-menu').clientHeight;

        if (target !== null) {
            let pos = target.offsetTop - clientHeight - 20;

            window.scrollTo({
                top: pos,
                behavior: "smooth"
            });
        }
    });

    function hideLinkTop() {
        window.onscroll = function (e) {
            if(window.scrollY > 1000) {
                topLink.classList.add('visible');
            }
            if(window.scrollY < 1000) {
                topLink.classList.remove('visible');
            }
        };
    }

    hideLinkTop();
});

function scrollToId(id) {
    let target = document.querySelector(id);
    let clientHeight = document.querySelector('.js-menu').clientHeight;

    if (target !== null) {
        let pos = target.offsetTop - clientHeight - 20;

        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
}
