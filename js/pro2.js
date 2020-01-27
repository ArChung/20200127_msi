// var parallax_pro2_1;
// var pro2_channel = 0;


function initPro2() {


    initP2_1();
    initP2_2();


    // $('.proPageHeader2 .scrollBtn').click(pro2_goNext);


    $('.pro2Page').each(function () {
        ChungTool.addWheelEvent($(this), sub_goPrev, sub_goNext);
        ChungTool.addSwipeUpDownEvent($(this), sub_goPrev, sub_goNext);
    })

    // $('.pro2Page').each(function () {
    //     ChungTool.addWheelEvent($(this), function (e) {
    //         var tt = $(e.target);
    //         console.log(tt);
            
    //         pro2_goPrev();
    //     }, function (e) {
    //         if (!$('.proPageHeader2 .scrollBtn').hasClass('top')) {
    //             pro2_goNext();
    //         }
    //     }, );

    //     ChungTool.addSwipeUpDownEvent($(this), function () {
    //         pro2_goPrev();
    //     }, function () {
    //         if (!$('.proPageHeader2 .scrollBtn').hasClass('top')) {
    //             pro2_goNext();
    //         }
    //     }, );
    // })

    // $('.proPageHeader2 .smItem:not(".lock")').click(function(){
    //     var t = $(this);
    //     var index = t.index('.proPageHeader2 .smItem:not(".lock")');
    //     console.log(index);
    //     switchPagePrev('pro2_sp' + index, window['ani_pro2_' + index]);
    //     pro2_channel = index;
    //     updatePro2SideNav();
    // });


    // $('.proPageHeader2 .goPro1').click(jump2Pro1);


    // initSubMenu2();

}

// function initSubMenu2(){
//     $('.proPageHeader2 .menuBtn').click(function(){
//         $('.proPageHeader2 .subMenuPop').addClass('active');
//     });

//     $('.proPageHeader2 .subMenuPop .clozBtn').click(function(){
//         $('.proPageHeader2 .subMenuPop').removeClass('active');
//     });

//     $('.proPageHeader2 .subMenuPop ul li:not(.lock)').click(function(){
//         var t = $(this);
//         var index = t.index('.proPageHeader2 li:not(.lock)');
//         console.log(index);
        
//         switchPagePrev('pro2_sp' + index, window['ani_pro2_' + index]);
//         pro2_channel = index;
//         updatePro2SideNav();
//         $('.proPageHeader2 .subMenuPop').removeClass('active');

//     });
// }

// function jump2Pro1(){
//     switchPagePrev('pro1_sp0', window['ani_pro1_0']);
//     $('.proPageHeader2').addClass('hide');
//     $('#header .logo').removeClass('ge66');
//     $('#header .logo').addClass('gs66');
//     $('.proPageHeader1').removeClass('hide');
//     pro1_channel = 0;
//     updatePro1SideNav();

// }

// function leavePro2() {
//     switchPagePrev('index', index_open)
//     $('.proPageHeader2').addClass('hide');
//     $('.proPageHeader2 .scrollBtn').removeClass('top');
//     $('.proPageHeader2 .sideNav .smItem').eq(0).addClass('active').siblings().removeClass('active');
//     $('#header .logo').removeClass('ge66');

// }

// function pro2_goPrev() {
//     if (isSwitching) {
//         return;
//     }

//     if (pro2_channel == 0) {
//         leavePro2();
//         return;
//     }

//     var nextId = pro2PagesIndex[pro2_channel - 1];
//     switchPagePrev('pro2_sp' + nextId, window['ani_pro2_' + nextId]);


//     pro2_channel -= 1;


//     updatePro2SideNav()

// }



// function updatePro2SideNav() {
    
//     $('.proPageHeader2 .sideNav .smItem:not(".lock")').eq(pro2_channel).addClass('active').siblings().removeClass('active');

//     if (pro2_channel >= pro2PagesIndex.length - 1) {
//         $('.proPageHeader2 .scrollBtn').addClass('top');
//     } else {
//         $('.proPageHeader2 .scrollBtn').removeClass('top');
//     }
// }

// function pro2_goNext() {
//     if (isSwitching) {
//         return;
//     }

//     if ($('.proPageHeader2 .scrollBtn').hasClass('top')) {
//         leavePro2();
//         return;
//     }


//     if (pro2_channel < pro2PagesIndex.length - 1) {


//         var nextId = pro2PagesIndex[pro2_channel + 1];
//         switchPageNext('pro2_sp' + nextId, window['ani_pro2_' + nextId]);


//         pro2_channel += 1;



//         updatePro2SideNav();
//     }
// }

function initP2_1() {
    if(!ChungTool.isPhone()){
        parallax_pro2_1 = new Parallax($('#p2_1_scene')[0]);
    }
    var galleryTop = new Swiper('#pro2_sp0 .gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '#pro2_sp0 .swiper-button-next',
            prevEl: '#pro2_sp0 .swiper-button-prev',
        },
        effect: 'flip',
        flipEffect: {
            rotate: 30,
            slideShadows: false,
        },
    });

    $('#pro2_sp0 .tabItem').click(function () {

        galleryTop.slideToLoop($(this).index())
        
    })

    ani_pro2_0.add(function () {
        galleryTop.update();
        
    }, 'bg_in');
}

function initP2_2() {
    if(!ChungTool.isPhone()){
        var parallax_pro2_2 = new Parallax($('#pro2_sp1 .bg')[0]);
    }
}

