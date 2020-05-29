import 'owl.carousel';

$(document).ready(() => {
  var slider = $('#wedid-carousel')
  slider.owlCarousel({
    loop: true,
    //rewind: true,
    items: 1,
    dotsContainer: '#wedid-dots'
  })
})
