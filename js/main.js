$(".m-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  rtl: true,
  autoplay: true,
  navText: [
    "<i class='fa-solid fa-chevron-right'></i>",
    "<i class='fa-solid fa-chevron-left'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".product-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  rtl: true,
  autoplay: true,
  navText: [
    "<i class='fa-solid fa-chevron-right'></i>",
    "<i class='fa-solid fa-chevron-left'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 5,
    },
  },
});
