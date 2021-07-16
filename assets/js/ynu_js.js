// 本项目采用Google 开源项目代码规范
// Toggle Animation by Class
$(window).scroll(function(){
    if($(document).scrollTop() > 100){
      $('nav').addClass('animate');
    }else{
      $('nav').removeClass('animate');
    }
  })