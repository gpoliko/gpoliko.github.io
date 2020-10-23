const car = {
    "make": "Subaru",
    "model": "Legacy",
    "year": 2012,
    "colour": "Blue"
}

console.log("Your car's colour is: " + car.colour)







































// jQuery(document).ready(function($) {
//     //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
//     var MQL = 336;

//     //primary navigation slide-in effect
//     if ($(window).width() > MQL) {
//         var headerHeight = $('.gio-header').height();
//         $(window).on('scroll', {
//                 previousTop: 0
//             },
//             function() {
//                 var currentTop = $(window).scrollTop();
//                 //check if user is scrolling up
//                 if (currentTop < this.previousTop) {
//                     //if scrolling up...
//                     if (currentTop > 0 && $('.gio-header').hasClass('is-fixed')) {
//                         $('.gio-header').addClass('is-visible');
//                     } else {
//                         $('.gio-header').removeClass('is-visible is-fixed');
//                     }
//                 } else {
//                     //if scrolling down...
//                     $('.gio-header').removeClass('is-visible');
//                     if (currentTop > headerHeight && !$('.gio-header').hasClass('is-fixed')) $('.gio-header').addClass('is-fixed');
//                 }
//                 this.previousTop = currentTop;
//             });
//     }

//     //open/close primary navigation
//     $('.gio-primary-nav-trigger').on('click', function() {
//         $('.gio-menu-icon').toggleClass('is-clicked');
//         $('.gio-header').toggleClass('menu-is-open');

//         //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
//         if ($('.gio-primary-nav').hasClass('is-visible')) {
//             $('.gio-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
//                 $('body').removeClass('overflow-hidden');
//             });
//         } else {
//             $('.gio-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
//                 $('body').addClass('overflow-hidden');
//             });
//         }
//     });
// });