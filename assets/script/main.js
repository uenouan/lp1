// ハンバーガーメニュー
var hamburger = $('.header__hamburgerMenu');

$('.header__menuBtn').on('click', function () {
  hamburger.toggleClass('header__hamburgerMenu--active');
});

// タブ
$('.course__tabListItem').on('click', function(){
  let index = $('.course__tabListItem').index(this);

  $('.course__tabListItem').removeClass('course__tabListItem--active');
  $(this).addClass('course__tabListItem--active');
  $('.course__tabContent').removeClass('course__tabContent--active');
  $('.course__tabContent').eq(index).addClass('course__tabContent--active');
});

// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});