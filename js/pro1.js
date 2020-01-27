var parallax_pro1_1;
var pro1_channel = 0;
var pro1PagesIndex = [0, 1];

function initPro1() {


    initP1_1();
    initP1_2();


    $('.proPageHeader1 .scrollBtn').click(pro1_goNext);




    $('.pro1Page').each(function () {
        ChungTool.addWheelEvent($(this), function () {

            pro1_goPrev();
        }, function () {
            if (!$('.proPageHeader1 .scrollBtn').hasClass('top')) {
                pro1_goNext();
            }
        }, );

        ChungTool.addSwipeUpDownEvent($(this), function () {

            pro1_goPrev();
        }, function () {
            if (!$('.proPageHeader1 .scrollBtn').hasClass('top')) {
                pro1_goNext();
            }
        }, );
    })

    $('.proPageHeader1 .smItem:not(.lock)').click(function () {
        var t = $(this);
        var index = t.index('.proPageHeader1 .smItem:not(.lock)');
        switchPagePrev('pro1_sp' + index, window['ani_pro1_' + index]);
        pro1_channel = index;
        updatePro1SideNav();
    });

    $('.proPageHeader1 .goPro2').click(jump2Pro2);
    initSubMenu1();

}

function initSubMenu1() {
    $('.proPageHeader1 .menuBtn').click(function () {
        $('.proPageHeader1 .subMenuPop').addClass('active');
    });

    $('.proPageHeader1 .subMenuPop .clozBtn').click(function () {
        $('.proPageHeader1 .subMenuPop').removeClass('active');
    });

    $('.proPageHeader1 .subMenuPop ul li:not(.lock)').click(function () {
        var t = $(this);
        var index = t.index('.proPageHeader1 li:not(.lock)');
        switchPagePrev('pro1_sp' + index, window['ani_pro1_' + index]);
        pro1_channel = index;
        updatePro1SideNav();
        $('.proPageHeader1 .subMenuPop').removeClass('active');

    });
}

function jump2Pro2() {
    switchPagePrev('pro2_sp0', window['ani_pro2_0']);
    $('.proPageHeader1').addClass('hide');
    $('.proPageHeader2').removeClass('hide');
    $('#header .logo').removeClass('gs66');
    $('#header .logo').addClass('ge66');
    pro2_channel = 0;
    updatePro2SideNav();
}

function leavePro1() {
    switchPagePrev('index', index_open)
    $('.proPageHeader1').addClass('hide');
    $('.proPageHeader1 .scrollBtn').removeClass('top');
    $('.proPageHeader1 .sideNav .smItem').eq(0).addClass('active').siblings().removeClass('active');
    $('#header .logo').removeClass('gs66');
}

function pro1_goPrev() {
    if (isSwitching) {
        return;
    }

    if (pro1_channel == 0) {
        leavePro1();
        return;
    }

    var nextId = pro1PagesIndex[pro1_channel - 1];
    switchPagePrev('pro1_sp' + nextId, window['ani_pro1_' + nextId]);


    pro1_channel -= 1;


    updatePro1SideNav()

}



function updatePro1SideNav() {

    $('.proPageHeader1 .sideNav .smItem:not(".lock")').eq(pro1_channel).addClass('active').siblings().removeClass('active');

    if (pro1_channel >= pro1PagesIndex.length - 1) {
        $('.proPageHeader1 .scrollBtn').addClass('top');
    } else {
        $('.proPageHeader1 .scrollBtn').removeClass('top');
    }
}

function pro1_goNext() {
    if (isSwitching) {
        return;
    }

    if ($('.proPageHeader1 .scrollBtn').hasClass('top')) {
        leavePro1();
        return;
    }


    if (pro1_channel < pro1PagesIndex.length - 1) {


        var nextId = pro1PagesIndex[pro1_channel + 1];
        switchPageNext('pro1_sp' + nextId, window['ani_pro1_' + nextId]);


        pro1_channel += 1;



        updatePro1SideNav();
    }
}

function initP1_1() {
    if(!ChungTool.isPhone()){
        parallax_pro1_1 = new Parallax($('#p1_1_scene')[0]);
    }
    // parallax_pro1_1.disable();

    var galleryTop = new Swiper('#pro1_sp0 .gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '#pro1_sp0 .swiper-button-next',
            prevEl: '#pro1_sp0 .swiper-button-prev',
        },
        effect: 'flip',
        flipEffect: {
            rotate: 30,
            slideShadows: false,
        },
    });

    $('#pro1_sp0 .tabItem').click(function () {
        console.log(456);

        galleryTop.slideToLoop($(this).index())
    })

    ani_pro1_0.add(function () {
        galleryTop.update();
        // if(parallax_pro1_1){
        //     parallax_pro1_1.enable();
        // }
    }, 'bg_in');
}

function initP1_2() {
    if(!ChungTool.isPhone()){
        var parallax_pro1_2 = new Parallax($('#pro1_sp1 .bg')[0]);
    }
}