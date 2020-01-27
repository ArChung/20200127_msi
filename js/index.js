var pageNow = 'index';
var isSwitching = false;
var parallax_index;
var skipAni = false;

var pageChannel = 0;
var subPageChannel = 0;
var pro1PagesIndex = [0, 1];
var pro2PagesIndex = [0, 1];

// temp
TweenMax.globalTimeScale(1);

var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute('content', "width=768 user-scalable=0");

$(function () {
    FastClick.attach(document.body);
});

$(document).ready(function () {



    initIndex();
    initSubMenu();
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



function initIndex() {

    if (!ChungTool.isPhone()) {
        parallax_index = new Parallax($('#index_scene')[0]);
    }

    $('#index').on('mousemove', onIndexMouseMove);


    $('#index .btns .lBtn').on('click', function () {
        switchPage(1, 0);
    });

    $('#index .btns .rBtn').on('click', function () {
        switchPage(2, 0);
    });
}


function initSubMenu() {
    // pop 
    var pp = $('.proPageHeader');
    pp.find('.menuBtn').click(function () {
        pp.find('.subMenuPop').addClass('active');
    });

    pp.find('.subMenuPop .clozBtn').click(function () {
        pp.find('.subMenuPop').removeClass('active');
    });

    pp.find('.subMenuPop ul li:not(.lock)').click(function () {
        var index = $(this).index('.proPageHeader li:not(.lock)');
        switchPage(pageChannel, index);
        pp.find('.subMenuPop').removeClass('active');
    });


    // submenu
    pp.find('.smItem:not(.lock)').click(function () {
        var index = $(this).index('.proPageHeader .smItem:not(.lock)');
        switchPage(pageChannel, index);
    });

    pp.find('.pageBtn ').click(function () {
        switchPage((pageChannel == 1) ? 2 : 1, 0);
    });

    // scroll btn
    pp.find('.scrollBtn').click(function () {
        var isEnd = $(this).hasClass('top');
        switchPage((isEnd) ? 0 : pageChannel, subPageChannel + 1);
    });

}


function onIndexMouseMove(e) {
    var windowWidth = document.documentElement.clientWidth / 2;
    var posX = (ChungTool.getCursorPosition(e)[0] - windowWidth) / windowWidth;
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

    isSwitching = true;

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

// ver2.0
function switchPage(pageNext, subPageNext) {
    if (pageNext == 0 || subPageNext < 0) {
        back2Index();
        return;
    }

    if (subPageNext >= window['pro' + pageNext + 'PagesIndex'].length) {
        console.log('channel error', pageNext, subPageNext);
        return
    }

    var subPageArr = window['pro' + pageNext + 'PagesIndex'];
    var subPageNextId = subPageArr[subPageNext];
    var subPageNextName = 'pro' + pageNext + '_sp' + subPageNextId;
    var aniNext = window['ani_pro' + pageNext + '_' + subPageNextId];

    // subMenu 
    ChungTool.removeClassWithFilter($('.proPageHeader'), 'proPageHeader_', 'proPageHeader_' + pageNext); //while sub menu
    ChungTool.removeClassWithFilter($('#header-msi .logo'), 'with_pro', 'with_pro' + pageNext); // logo
    simpleShow($('.proPageHeader')); // show menu

    // update side menu
    $('.proPageHeader .sideNav .smItem:not(".lock")').eq(subPageNext).addClass('active').siblings().removeClass('active');
    if (subPageNext >= subPageArr.length - 1) {
        $('.proPageHeader .scrollBtn').addClass('top');
    } else {
        $('.proPageHeader .scrollBtn').removeClass('top');
    }

    // page
    $('.page').addClass('hide');
    $('#' + subPageNextName).removeClass('hide');

    // page ani 
    if (skipAni) {
        aniNext.seek(aniNext.duration());
    } else {
        aniNext.restart();
    }

    // channel

    pageChannel = pageNext;
    subPageChannel = subPageNext;
}


function back2Index() {
    $('.page').addClass('hide');
    $('#index').removeClass('hide');
    index_open.restart();
    $('.proPageHeader').addClass('hide');

    // channel

    pageChannel = 0;
    subPageChannel = 0;
}

function sub_goPrev() {
    switchPage(pageChannel, subPageChannel - 1);
}

function sub_goNext() {
    switchPage(pageChannel, subPageChannel + 1)
}