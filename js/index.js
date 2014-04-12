var resize_section = function(){
  $('#intro').css('height',$(window).height() + 'px');
  $('#latest').css('height',$(window).height() + 'px');
  $('#team').css('height',$(window).height() + 'px');
}

jQuery(function($){
  resize_section();
  $($('.to_page')[0]).click(function(){
    $('html, body').animate({scrollTop: $('#latest').offset().top},800);
  });
  $($('.to_page')[1]).click(function(){
    $('html,body').animate({scrollTop: $('#thought').offset().top},800);
  });
});

