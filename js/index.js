var resize_section = function(){
  $('section').css('height',$(window).height() + 'px');
}

jQuery(function($){
  resize_section();
  $('#to_page2').click(function(){
    $('html, body').animate({scrollTop: $('#latest').offset().top},800);
  });
});

