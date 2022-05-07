//this file is an example. Create as many js files as you want in the utils folder, just remember to export them like this, and import them in app.js
export const quoteSliderExp = function quoteSliderExports() {
    jQuery(document).ready(function($){    
       
        $('.quote-slider').slick({
            dots: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
          });
      
    });
}