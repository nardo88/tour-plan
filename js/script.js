let mySwiper = new Swiper('.swiper-container', {
    loop: true,

    navigation: {
        nextEl: '.slider-hotel__btn-next',
        prevEl: '.slider-hotel__btn-prev',
        
      },
    keyboard: {
        enabled: true,
    }
})


// Яндекс карты

// ymaps.ready(init);
// function init(){ 
//     // Создание карты.    
//     var myMap = new ymaps.Map("map", {
        
//         center: [7.838539, 98.298839],
       
//         zoom: 16
//     });

    
// }

// слайдер с отзывами

const sliderReview = new Swiper('.slider-reviews', {
    loop: true,
    slideClass: 'item-slder-review',
    wrapperClass: 'slider-reviews__wrapper',
    navigation: {
        nextEl: '.slider-reviews__btn-next',
        prevEl: '.slider-reviews__btn-prev',
        
      },
    autoHeight: true,

})

// паралакс эффект

let rellax = new Rellax('.newsletter__bg');