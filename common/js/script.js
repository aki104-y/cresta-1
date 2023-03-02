$(function () {
//ハンバーガーメニュー
  //--------------------------------------------
  $('.hamburger').on('click', function () { //.hamburgerをクリックすると
    $('.hamburger').toggleClass('close'); //.hamburgerにcloseクラスを付与(ボタンのアニメーション)
    $('.header-nav').toggleClass('fade'); //.header-navにfadeクラスを付与
    $('body').toggleClass('noscroll'); //bodyにnoscrollクラスを付与(スクロールを固定)
  });
});