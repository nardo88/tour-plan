
window.onload = () => {
    let mySwiper = new Swiper('.slider-hotel__container', {
        loop: true,
        slideClass: 'slider-hotel__slide',
        wrapperClass: 'slider-hotel__wrapper',
    
        navigation: {
            nextEl: '.slider-hotel__btn-next',
            prevEl: '.slider-hotel__btn-prev',
            
          },
        keyboard: {
            enabled: true,
        }
    })
    
    // слайдер с отзывами
    
    const sliderReview = new Swiper('.slider-reviews', {
        loop: true,
        autoHeight: true,
        centeredSlides: true,
        
        navigation: {
            nextEl: '.reviews__btn-next',
            prevEl: '.reviews__btn-prev',
            
          },
        
    
    })
    
    // паралакс эффект
    
    let rellax = new Rellax('.newsletter__bg');
    
    // мобиольное меню
    
    const menuButton = document.querySelector('.menu-button'),
        navbarBottom = document.querySelector('.navbar-bottom');
    
    
    menuButton.addEventListener('click', () => {
        navbarBottom.classList.toggle('navbar-bottom_mobile_visible')
    })


    // модальное окно

    const bookingButton = document.querySelector('.booking__button'),
        modalOverlay = document.querySelector('.modal__overlay'),
        modalClose = document.querySelector('.modal__close'),
        modalDialog = document.querySelector('.modal__dialog'),
        mainCardButton = document.querySelector('.main-card__button'),
        packageCardButton = document.querySelectorAll('.package-card__button'),
        cardButton = document.querySelectorAll('.card__button');

    const closeModal = () => {
        modalOverlay.classList.remove('modal__overlay--open')
        document.body.style.overflow = 'auto'
        modalDialog.classList.remove('modal__dialog--open')

    }

    const openModal = () => {
        document.body.style.overflow = 'hidden'
        modalOverlay.classList.add('modal__overlay--open')
        modalDialog.classList.add('modal__dialog--open')

    }

    mainCardButton.addEventListener('click', openModal)

    bookingButton.addEventListener('click', () => {
        openModal()
        
    })

    packageCardButton.forEach(item => {
        item.addEventListener('click', openModal)
    })
    cardButton.forEach(item => {
        item.addEventListener('click', openModal)
    })

    modalClose.addEventListener('click', (e) => {
        e.preventDefault()
        closeModal()
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape'){
            closeModal()
        }
    })
    


}


