$(function () {
  $(".header-slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img class="prev" src="/images/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img class="next" src="/images/next.svg" alt="" /></button>',
    vertical: true,
  });

  $(".product__name").slick({
    asNavFor: ".product__content",
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    prevArrow:
      '<button type="button" class="product-prev"><img class="prev" src="/images/top.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="product-next"><img class="next" src="/images/button.svg" alt="" /></button>',
  });
  $(".product__content").slick({
    asNavFor: ".product__name",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  });
});
