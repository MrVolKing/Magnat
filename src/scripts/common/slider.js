{
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      // el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-nex',
        prevEl: '.swiper-button-pre',
    },
    breakpoints: {
      768: {
          slidesPerView: 2
      },
      580: {
          slidesPerView: 1
      }
    }
  });
}


{
  const mySwiper = new Swiper('.swiper-contain', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboardControl: true,	
    paginationType: 'fraction',
    
  });


  // const caption = document.getElementById('caption');
  // const caption2 = document.getElementById('caption2');

  // caption.innerHTML = mySwiper.slides[0].childNodes[1].getAttribute('data-caption');
  // caption2.innerHTML = mySwiper.slides[0].childNodes[1].getAttribute('data-caption2');

  // mySwiper.on('slideChangeStart', function(){
  //   caption.innerHTML = mySwiper.slides[mySwiper.activeIndex].childNodes[1].getAttribute('data-caption');
  //   caption2.innerHTML = mySwiper.slides[mySwiper.activeIndex].childNodes[1].getAttribute('data-caption2');
    
  // });


}



       

// {
//   $('.fade').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.nav'
//     });
//     $('.nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.fade',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//     });
// }