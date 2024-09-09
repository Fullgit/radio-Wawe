const headerSearchBtn = document.querySelector('[data-search]');
const headerSearchBar = document.querySelector('[data-search-bar]');
const headerSearchClose = document.querySelector('[data-search-close]');
const headerLoginBtn = document.querySelectorAll('.header__login');
const headerLoginMenu = document.querySelector('.header__login-menu');
const loginMenuClose = document.querySelector('.login-menu__close-btn');
const showMore  = document.querySelector('.podcasts__more');
const podcastsLength = document.querySelectorAll('.podcasts__item').length;
const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');
const burgerBtnClose = document.querySelector('.burger-nav-btn');
const burgerLink = document.querySelectorAll('.nav-top__link, .nav-bottom__link');
const accordionBtn  = document.querySelectorAll('.accordion__top');
const accordionContent  = document.querySelector('ac-content');
const accordionActive   = document.querySelectorAll('ac-active');
const playMenu  = document.querySelector('.header__bottom-right');
const onAirButton = document.querySelector('.header__on-air');
const onAirCircle = document.querySelector('.on-air__circle');

onAirButton.addEventListener('click', () => {
    playMenu.classList.toggle('play-menu--visible');
    onAirCircle.classList.toggle('on-air__circle--active');
})

let itemsMore = 4;
const body = document.body;

showMore.addEventListener('click', () =>{
    itemsMore += 3;
    const array = Array.from(document.querySelector('.podcasts__list').children);
    const visibleItemsMore  = array.slice(0, itemsMore);
    visibleItemsMore.forEach(el => el.classList.add('podcasts__more-visible'));

    if(visibleItemsMore.length === podcastsLength) {
        showMore.style.display = 'none';
    }
})

loginMenuClose?.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    headerLoginMenu?.classList.remove('login-menu--active');
});

headerLoginBtn?.forEach(function(el){el.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    headerLoginMenu?.classList.toggle('login-menu--active')});
});

headerSearchBtn?.addEventListener('click', () => {
    headerSearchBar?.classList.toggle('header__search--visible');
    headerSearchBar?.classList.toggle('header__search-closed');
});

headerSearchClose?.addEventListener('click', () => {
    headerSearchBar?.classList.remove('header__search--visible');
    headerSearchBar?.classList.add('header__search-closed');
});


const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
});

new Accordion('.accordion__list', {
    elementClass: "accordion__item",
    triggerClass: "ac-trigger",
    panelClass: "ac-content",
    activeClass: "ac-active"
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    keyboard: {
        enabled: true,
        onlyInViewprt: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitibity: 1,
        eventsTarget: '.about__list',
    },
    // simulateTouch: true,
    loop: true,
    rewind: true,
    type: 'fraction',
    breakpoints: {
        // when window width is >= 1000px
        1200: {
          slidesPerView: 4,
        },
        569:{
            slidesPerView: 2,
        },

        321:{
            slidesPerView: 2.31,
        },
        200: {
          spaceBetween: 20,
          slidesPerView: 2.31,
        }
    }
});

const tabsBtn = document.querySelectorAll('.accordion-tabs');
const tabsItem = document.querySelectorAll('.accordion-panel');
const tabsPlug = document.querySelectorAll('.biography__img-plug');
const tabsItemContent = document.querySelectorAll('.biography__content-wrap');


tabsBtn.forEach(function(el){
    el.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('accordion-tabs--active')});
        e.currentTarget.classList.add('accordion-tabs--active');

        tabsItem.forEach(function(el){el.classList.remove('accordion-panel--active')});
        tabsItemContent.forEach(function(el){el.classList.remove('accordion-panel--active')});
        const allTarget = document.querySelectorAll(`[data-target="${path}"]`);
        allTarget.forEach(function(target){
            target.classList.add('accordion-panel--active')
        });
        
        tabsItem.forEach(function(el){el.classList.remove('biography__img-plug--active')});
    })
})
        // document.querySelector(`[data-target="${path}"]`).classList.add('accordion-panel--active');

//burger
burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burgerNav?.classList.toggle('burger-nav--visible');
});    
burgerBtnClose?.addEventListener('click', () => {
    body?.classList.remove('stop-scroll')
    burgerNav?.classList.remove('burger-nav--visible');
});   

burgerLink?.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burgerNav?.classList.remove('burger-nav--visible');
    })
});

accordionActive?.forEach(el => {
     el.addEventListener('click', () => {
        accordionContent?.classList.remove('accordion__bottom--closed');
    })
});


//just-validate
const validate = new JustValidate('#form', {
    errorLabelStyle: {
        color: "#228B22"
    }
})

validate.addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'  
    },
    {
     rule: 'minLength',
     value: 3,
     errorMessage: 'Минимальное значение 3 знака'
    },
]);
validate.addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Введите пароль'  
    },
    {
      rule: 'password',
      errorMessage: 'Пароль должен состоять из 8 знаков и хотябы одного числа'
    }
]);

const validateFooter = new JustValidate('#footer-form', {
    errorLabelStyle: {
        color: "#ff0000"
    }
});  

validateFooter.addField('#about-name', [
        {
          rule: 'required',
          errorMessage: 'Введите имя'  
        },
        {
          rule: 'customRegexp',
          value: /^[a-zA-Z, а-яА-Я]*$/g,
          errorMessage: 'Разрешено вводить только буквы',
        },
]);

validateFooter.addField('#about-email', [
        {
            rule: 'required',
            errorMessage: 'Введите email'  
        },
        {
            rule: 'email',
            value: 3,
            errorMessage: 'Неправильный формат email',
        },
])