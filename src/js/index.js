window.addEventListener('load', function () {
    //Menu button on click event
    document.querySelector('.header-mobile__button').addEventListener('click', function () {
        document.querySelector('.header-mobile__button .header-mobile__button--line:nth-of-type(1)').classList.toggle('header-mobile__button--line--1');
        document.querySelector('.header-mobile__button .header-mobile__button--line:nth-of-type(2)').classList.toggle('header-mobile__button--line--2');
        document.querySelector('.header-mobile__button .header-mobile__button--line:nth-of-type(3)').classList.toggle('header-mobile__button--line--3');

        document.querySelector('.mobile-menu').classList.toggle('mobile-menu--open');

        document.querySelector('.js-menu__link').classList.remove('mobile-menu--open');
        return false;
    });

    document.querySelector('.mobile-menu__lists').addEventListener('click', function () {
        document.querySelector('.header-mobile__button .header-mobile__button--line:nth-of-type(1)').classList.remove('header-mobile__button--line--1');
        document.querySelector('.header-mobile__button .header-mobile__button--line:nth-of-type(2)').classList.remove('header-mobile__button--line--2');
        document.querySelector('.header-mobile__button .header-mobile__button--line:nth-of-type(3)').classList.remove('header-mobile__button--line--3');

        document.querySelector('.mobile-menu').classList.remove('mobile-menu--open');
        return false;
    });
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
