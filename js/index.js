var resize_section = function(){
  $('section').css('height',$(window).height() + 'px');
}

jQuery(function($){
  resize_section();
  $('#to_latest').click(function(){
    $('html, body').animate({scrollTop: $('#latest').offset().top},800);
  });
});

