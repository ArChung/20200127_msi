$(document).ready(function () {


    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        window.animate({
            scrollTop: 100
        }, 300);

})

// var attachMobileSafariAddressBarHelpTip = function (target) {
//     var $target = $(target);
//     $target.tooltip({
//         title: 'Scroll up to hide Safari address bar',
//         trigger: 'manual',
//         placement: 'bottom'
//     });
//     $(window).on('resize', function () {
//         var bodyHeight = document.body.offsetHeight;
//         var windowHeight = window.innerHeight;
//         var isLandscape = Math.abs(window.orientation) === 90;
//         var showTooltip = (windowHeight < bodyHeight);
//         if(!isLandscape) return;
//         $target.tooltip(showTooltip ? 'show' : 'hide');
//     });
// }
// var ua = window.navigator.userAgent;
// if(ua.indexOf('iPhone') !== -1 && ua.indexOf('Safari') !== -1) {
//     attachMobileSafariAddressBarHelpTip('#main-nav');
// }