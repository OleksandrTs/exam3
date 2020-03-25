(function(){
    'use strict';

    // Serch bar
    let searchBtn = document.getElementById("search-btn"),
        searchInput = document.querySelector(".header__search-form");
    searchBtn.addEventListener("click", function() {
        searchInput.classList.toggle("active");
    })

    // Tabs
    let btns = document.querySelectorAll(".about__tab-btn");
    let tab  = document.querySelectorAll(".about__tab");
    for (let n = 0; n < btns.length; n++) {
        btns[n].addEventListener("click", function() {
            for(let i = 0;  i < tab.length; i++){
                tab[i].classList.remove("about__active");
            }
            tab[n].classList.add("about__active");
        });
    }

    // Products swiper
    var mySwiper1 = new Swiper ('.slider1', {
        autoplay: {
            delay: 4000,
          },
        loop: true,
        speed: 1500,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-products',
            prevEl: '.swiper-button-prev-products',
        },
    })

    // Collapse
    let coll = document.querySelectorAll(".faq__collapse-btn");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
           this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    // Feedback swiper
    var mySwiper2 = new Swiper ('.slider2', {
        fadeEffect: {
            crossFade: true
          },
        autoplay: {
            delay: 4000,
          },
        loop: true,
        speed: 1500,
        slidesPerView: 1,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next-feedback',
            prevEl: '.swiper-button-prev-feedback',
        },
    })

})()