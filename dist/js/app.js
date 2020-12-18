const showMenu = (toggleId, navId, iconId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        menuIcon = document.getElementById(iconId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            menuIcon.classList.toggle('fa-times')
        })
    }
}

showMenu('header-toggle', 'nav__menu', 'menu__icon')


$('.owl-carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    }
})



function showSearch() {
    const searchBox = document.getElementById('search-boxs');
    if (searchBox.style.display === "block") {
        searchBox.style.display = "none";
    } else {
        searchBox.style.display = "block";
    }
}



function reference() {
    const referenceBody = document.getElementById('reference-body');
    if (referenceBody.style.display === "block") {
        referenceBody.style.display = "none";
    } else {
        referenceBody.style.display = "block";
    }
}