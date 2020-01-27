$(function () {
    FastClick.attach(document.body);
});

(function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 0);
})();

var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute('content', "width=768 user-scalable=0");


function setAndroidDpi() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    if (bIsAndroid) {
        var uiWidth = 768,
            deviceWidth = screen.width,
            getTargetDensitydpi, targetDensitydpi;
        getTargetDensitydpi = uiWidth / deviceWidth * window.devicePixelRatio * 160;
        targetDensitydpi = 'target-densitydpi=' + getTargetDensitydpi + ', width=768, user-scalable=no';
        //alert("deviceWidth:" + deviceWidth + "width:" + screen.width + ",userAgent:" + sUserAgent + ",bIsAndroid:" +  bIsAndroid + ",getTargetDensitydpi:" + getTargetDensitydpi + ",targetDensitydpi:" + targetDensitydpi);
        document.getElementsByName('viewport')[0].setAttribute('content', targetDensitydpi);
    }
}

setAndroidDpi();

window.onresize = function () {
    setAndroidDpi();
}

$(document).ready(function () {



    initPic();
    initSubMenu();
    // initRotatePop();
    // initRulePop();

})

// function initRulePop(){
//     var p_pop = $('.privacy.popPage');
//     p_pop.find('.bg').click(function(){
//         simpleHide(p_pop)
//         ChungTool.unLockScroll();
//     })

//     p_pop.find('.clozBtn').click(function(){
//         simpleHide(p_pop)
//         ChungTool.unLockScroll();
//     })

//     $('.ruleBtn').click(function(e){
//         e.preventDefault();
//         simpleShow(p_pop);
//         ChungTool.lockScroll();
//     });
// }

function initRotatePop() {
    $(window).resize(function () {
        if (document.documentElement.clientWidth < document.documentElement.clientHeight) {
            $('.roPop').removeClass('hide');
        } else {
            $('.roPop').addClass('hide');
        }
        // var viewport = document.querySelector("meta[name=viewport]");
        // if (viewport) {
        //     viewport.setAttribute('content', "width=1360,user-scalable=yes");
        // }


    }).resize();
}

function initPic() {
    var image = document.getElementsByClassName('movePic');
    new simpleParallax(image);

    var image2 = document.getElementsByClassName('movePic2');
    new simpleParallax(image2, {
        orientation: 'left',
        scale: 1.15,
    });

    // var image3 = document.getElementsByClassName('proImg');
    // new simpleParallax(image3,{
    //     orientation: 'left',

    //     overflow: true
    // });
}

function initSubMenu() {
    $('#header .menuBtn').click(function () {
        $('.subMenuPop').addClass('active');
    });

    // $('.subMenuPop .clozBtn').click(function(){
    //     $('.subMenuPop').removeClass('active');
    // });

    $('.subMenuPop').click(function () {
        $('.subMenuPop').removeClass('active');
    });
}