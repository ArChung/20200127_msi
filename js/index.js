var pageNow = 'index';
var isSwitching = false;
var parallax_index;
var skipAni = false;


// temp
TweenMax.globalTimeScale(1);

var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute('content', "width=768 user-scalable=0");

$(function () {
    FastClick.attach(document.body);
});

$(document).ready(function () {



    initIndex();
    initPro1();
    initPro2();

    // initAniMation();


    // index_open.play();
    // $('#pro2_sp1').removeClass('hide');
    // initRulePop();
    // initLoading();

    godirect();

    // $('#pro1_sp0').removeClass('hide');
    // $('#index').removeClass('hide');
    // initRotatePop();
})

function godirect(page) {
    if (page) {
        $(page).removeClass('hide');
        $('.loadingPop').addClass('hide');
    } else {
        initAniMation();
        initLoading();
    }
}

// function initRotatePop() {
//     $(window).resize(function () {
//         if (document.documentElement.clientWidth < document.documentElement.clientHeight) {
//             $('.roPop').removeClass('hide');
//         } else {
//             $('.roPop').addClass('hide');
//         }
//         // var viewport = document.querySelector("meta[name=viewport]");
//         // if (viewport) {
//         //     viewport.setAttribute('content', "width=1360,user-scalable=yes");
//         // }


//     }).resize();
// }



function initLoading() {
    $('.loadingFirst').waitForImages({
        finished: function () {
            $('.loadingPop').addClass('hide');
            index_open.play();
        },
        each: function (loaded, count, success) {
            var r = Math.floor(loaded / count * 100);
        },
        waitForAll: true
    });
}


// function initRulePop() {
//     var p_pop = $('.privacy.popPage');
//     p_pop.find('.bg').click(function () {
//         simpleHide(p_pop)
//         ChungTool.unLockScroll();
//     })

//     p_pop.find('.clozBtn').click(function () {
//         simpleHide(p_pop)
//         ChungTool.unLockScroll();
//     })

//     $('.ruleBtn').click(function (e) {
//         e.preventDefault();
//         simpleShow(p_pop);
//         ChungTool.lockScroll();
//     });
// }



function initIndex() {
    if (!ChungTool.isPhone()) {
        parallax_index = new Parallax($('#index_scene')[0]);
    }
    // parallax_index.disable();
    $('#index').on('mousemove', onIndexMouseMove);
    $('#index .btns .lBtn').on('click', function () {
        pro1_channel = 0;
        var nextId = pro1PagesIndex[pro1_channel];
        switchPageNext('pro1_sp' + nextId, window['ani_pro1_' + nextId], '10% 60%');
        simpleShow($('.proPageHeader1'));
        $('#header .logo').addClass('gs66');
    });


    $('#index .btns .rBtn').on('click', function () {
        pro2_channel = 0;
        var nextId = pro2PagesIndex[pro2_channel];
        switchPageNext('pro2_sp' + nextId, window['ani_pro2_' + nextId], '90% 60%');
        simpleShow($('.proPageHeader2'));
        $('#header .logo').addClass('ge66');

    });
}




function onIndexMouseMove(e) {
    var windowWidth = document.documentElement.clientWidth / 2;
    var posX = (getCursorPosition(e)[0] - windowWidth) / windowWidth;

    var light = (posX > 0) ? $('#index .lights .lr') : $('#index .lights .ll');
    posX = (posX > 0) ? posX : -posX;

    light.css('opacity', posX);
}



function switchPagePrev(pageNext, nextAni) {
    if (isSwitching) {
        return;
    }
    isSwitching = true;

    var tl = new TimelineMax();


    $('#' + pageNow).addClass('hide');
    $('#' + pageNext).removeClass('hide');

    if (nextAni) {
        if (skipAni) {
            nextAni.seek(nextAni.duration());
        } else {
            nextAni.restart();
        }
    }

    pageNow = pageNext;
    isSwitching = false;
}

function switchPageNext(pageNext, nextAni, orin) {
    if (isSwitching) {
        return;
    }
    orin = orin || '50% 50%';

    isSwitching = true;

    var tl = new TimelineMax();

    // tl.to($('#' + pageNow), .8, {
    //         scale: 3,
    //         autoAlpha: 0,
    //         ease: Power3.easeIn,
    //         transformOrigin: orin
    //     })
    //     .call(function () {
    //         // pagenext in start
    //         $('#' + pageNext).removeClass('hide');
    //         if (skipAni) {
    //             nextAni.seek(nextAni.duration());
    //         } else {
    //             nextAni.restart();
    //         }
    //     }, this, '-=.3')
    //     .call(function () {
    //         // pagenow out done
    //         TweenMax.set($('#' + pageNow), {
    //             scale: 1,
    //             autoAlpha: 1
    //         })
    //         $('#' + pageNow).addClass('hide');
    //         pageNow = pageNext;
    //         console.log('pageNow:' + pageNow);

    //         isSwitching = false;
    //     });

    $('#' + pageNow).addClass('hide');

    $('#' + pageNext).removeClass('hide');
    if (skipAni) {
        nextAni.seek(nextAni.duration());
    } else {
        nextAni.restart();
    }

    pageNow = pageNext;
    isSwitching = false;

}







function getCursorPosition(e) {
    var posx = 0;
    var posy = 0;
    if (!e) var e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX - document.documentElement.scrollLeft - document.body.scrollLeft;
        posy = e.pageY - document.documentElement.scrollTop - document.body.scrollTop;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX;
        posy = e.clientY;
    }

    return [posx, posy];
}