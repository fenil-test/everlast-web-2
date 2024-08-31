$(document).ready(function(){
  $('.mycollection').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: '60px',
      prevArrow: '.slider-pre',
      nextArrow: '.slider-next',
      
    })
    $('.single-item').slick();
  
  $('.related-articles-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.article-slider-pre',
      nextArrow: '.article-slider-next',
      
    })
  
    });
  
  
      
    
  
  
    