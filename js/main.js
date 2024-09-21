$(function () {
  $(".header-slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img class="prev" src="/images/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img class="next" src="/images/next.svg" alt="" /></button>',
    vertical: true,
  });
});
