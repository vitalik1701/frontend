// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {

  console.log('click!!!')

  burger.classList.toggle('burger_active');

  menu.classList.toggle('header__nav_active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(element) {
  element.addEventListener('click', function() {

    burger.classList.remove('burger_active');

    menu.classList.remove('header__nav_active')

    document.body.classList.remove('stop-scroll')

  })
})

// search-form

document.querySelector(".header__btn--open").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("header__form--active");
  this.classList.add("active");
})
document.querySelector(".search-form__close").addEventListener("click", function() {
  let form = document.querySelector(".header__form");
  form.classList.remove("header__form--active");
    form.querySelector("input").value = "";
    document.querySelector(".header__btn--open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__search-box")) {
  form.classList.remove("header__form--active");
    form.querySelector("input").value = "";
    document.querySelector(".header__btn--open").classList.remove("active")
  }
})


// swiper

let swiper = new Swiper('.swiper', {
  speed: 300,
  allowTouchMove: true,
  pagination: {
    el: '.article__pagination',
    type: 'bullets',
    clickable: true
  },
});



// tabs

let tabsBtn = document.querySelectorAll('.steps__btn');
let tabsContent = document.querySelectorAll('.our-work__inner');
// let tabsTitle = document.querySelectorAll('.item-left__inner');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(elem) {
    console.log("clickkk")
    const path = elem.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('steps__btn--active');
    });
    elem.currentTarget.classList.add('steps__btn--active');

    tabsContent.forEach(function(element) {
      element.classList.remove('tabs-content--active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content--active');
  })
});

// accordion

new Accordion('.accordion');
