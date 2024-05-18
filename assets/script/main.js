// ハンバーガーメニュー
var hamburger = $('.header__hamburgerMenu');

$('.header__menuBtn').on('click', function () {
  hamburger.toggleClass('header__hamburgerMenu--active');
});
