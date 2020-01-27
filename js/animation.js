var index_open= new TimelineMax();
var ani_pro1_0 = new TimelineMax();
var ani_pro1_1 = new TimelineMax();
var ani_pro2_0 = new TimelineMax();
var ani_pro2_1 = new TimelineMax();

function initAniMation(){

   
    // index open
    index_open
    .set('#index .bg >*> .pic',{alpha:0})
    .set('#index .bg .light .pic',{scale:1.1})
    .set('#index .bg .txt .pic',{scale:0.7})
    .set('#index .bg .pc_r .pic',{x:300})
    .set('#index .bg .pc_l .pic',{x:-300})
    .set('#index .lights',{alpha:0})
    .call(function(){
        $('#index').removeClass('hide')
        // TweenMax.killTweensOf('#index .btn_l1 .pic');
        // TweenMax.killTweensOf('#index .btn_lr .pic');
    })
    .set('#index .btn_l1 .pic',{alpha:0})
    .set('#index .btn_r1 .pic',{alpha:0})
    .staggerTo('#index .bg .light .pic',2,{scale:1,alpha:1},0.2)
    .staggerTo('#index .bg .txt .pic',.8,{scale:1,alpha:1},0.15,'-=1.8')
    .to('#index .bg1 .pic',2,{alpha:1},'bg_in-=1.2')
    .to('#index .pc_r .pic',1.2,{x:0,alpha:1},'bg_in-=1.3')
    .to('#index .pc_r_bg .pic',1.2,{x:0,alpha:1,scale:1.05},'bg_in-=.6')
    .to('#index .pc_l .pic',1.2,{x:0,alpha:1},'bg_in-=1.3')
    .to('#index .btn_r1 .pic',.05,{alpha:1,yoyo:true,repeat:7},'lightup-=2.1')
    .to('#index .btn_r1 .pic',1,{alpha:1},'lightup-=1.6')
    .to('#index .btn_l1 .pic',.1,{alpha:1,yoyo:true,repeat:7},'lightup-=2.1')
    .to('#index .btn_l1 .pic',1,{alpha:1},'lightup-=1.6')
    .to('#index .lights',.6,{alpha:1},'bg_in-=.8')
    .to('#index .btn_l1 .pic',.6,{alpha:.7,yoyo:true,repeat:-1},'repeat')
    .to('#index .btn_r1 .pic',.6,{alpha:.7,yoyo:true,repeat:-1},'repeat')
    .pause()
    



    // // index_leave
    // index_leave1
    // .call(function(){
    //     console.log('index leave');
    //     parallax_index.disable();
    //     index_open.pause();
    //     $('#index').off('mousemove', onIndexMouseMove);
    //     $('#index').off('click', onIndexClick);
    // })
    // .to($('#index'), 1.3, {scale: 2,autoAlpha: 0,ease: Power3.easeIn,transformOrigin:"10% 60%"})
    // .call(function(){
    //     $('#p1').removeClass('hide');
    //     $('.proPageHeader1').removeClass('hide');
    //     ani_pro1_0.play();
    //     console.log('play');

    // },this,'-=0')
    // .call(function(){
    //     console.log('hide');
    // },this,'-=0')
    // .pause()


    ///////  pro1 ///////

    ani_pro1_0
    .set('#pro1_sp0 #p1_1_scene > * > .pic',{alpha:0,scale:1})
    .set('#pro1_sp0 .tab',{alpha:0,y:80})
    .set('#pro1_sp0 .swiperWrap',{alpha:0,scale:.5})
    .set('#pro1_sp0 #p1_1_scene .bg2 .pic',{y:100})
    .set('#pro1_sp0 .swiperWrap  .txt ',{alpha:0,x:-200})
    .call(function(){
        $('#pro1_sp0').removeClass('hide')
    })
    .staggerTo('#pro1_sp0 #p1_1_scene > * > .pic',2,{alpha:1,scale:1},.3,'bg_in')
    .to('#pro1_sp0 .swiperWrap',1.5,{alpha:1,scale:1,ease:Power3.easeOut},'bg_in')
    .to('#pro1_sp0 .tab',.6,{y:0,alpha:1},0.1,'bg_in+=1')
    .to('#pro1_sp0 .swiperWrap  .txt ',.8,{x:0,alpha:1,},'bg_in+=.8')
    .pause();


    ani_pro1_1
    .set('#pro1_sp1 .bg1 .pic',{alpha:0})
    .set('#pro1_sp1 .container',{marginLeft:'100%'})
    .call(function(){
        $('#pro1_sp1').removeClass('hide')
    })
    .to('#pro1_sp1 .bg1 .pic',1,{alpha:1})
    .to('#pro1_sp1 .container',1.2,{marginLeft:'0%',ease:Power3.easeOut},0)
    .pause();

    ///////  pro2 ///////

    ani_pro2_0
    .set('#pro2_sp0 #p2_1_scene',{alpha:0,scale:1})
    .set('#pro2_sp0 .tab',{alpha:0,y:80})
    .set('#pro2_sp0 .swiperWrap',{alpha:0,scale:.5})
    .set('#pro2_sp0 .swiperWrap  .txt ',{alpha:0,x:-200})
    .set('#pro2_sp0 .target ',{alpha:0,y:50})
    .call(function(){
        $('#pro2_sp0').removeClass('hide');
    })
    .staggerTo('#pro2_sp0 #p2_1_scene',2,{alpha:1,scale:1},.3,'bg_in')
    .to('#pro2_sp0 .swiperWrap',1.5,{alpha:1,scale:1,ease:Power3.easeOut},'bg_in')
    .to('#pro2_sp0 .tab',.6,{y:0,alpha:1},0.1,'bg_in+=1')
    // .staggerTo('#pro2_sp0 .tabItem',.6,{y:0,alpha:1,ease:Back.easeOut},0.1,'bg_in+=.6')
    .to('#pro2_sp0 .swiperWrap  .txt ',.8,{x:0,alpha:1,},'bg_in+=.8')
    .to('#pro2_sp0 .target ',.6,{y:0,alpha:1,},'bg_in+=1.2')
    .pause();

    ani_pro2_1
    .set('#pro2_sp1 .bg1 .pic',{alpha:0})
    .set('#pro2_sp1 .container',{x:'100%'})
    .call(function(){
        $('#pro2_sp1').removeClass('hide')
    })
    .to('#pro2_sp1 .bg1 .pic',1,{alpha:1})
    .to('#pro2_sp1 .container',1.2,{x:'0%',ease:Power3.easeOut},0)
    .pause();
}
