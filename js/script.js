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

ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        
        center: [7.838539, 98.298839],
       
        zoom: 16
    });

    
}

