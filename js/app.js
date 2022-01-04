const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

const activeClass = 'is-show';

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menu.classList.add(activeClass);
  });
}
window.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !event.target.matches('.menu-toggle')) {
    menu.classList.remove(activeClass);
  }
});

$(document).ready(function () {
  $('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><img src="./images/prev.png" alt=""></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><img src="./images/next.png" alt=""></i></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
