$(function () {
	
	//首页导航
	var iNOW=null;
	$('.nav > li').hover(function () {
		iNOW = $(this);
		iNOW.find('.nav_down').slideDown();
	},function () {
        iNOW.find('.nav_down').slideUp('fast');
	})
	
	/*首页banner*/
	$('.banner_btn li').click(function () {
		var iNow=$(this).index();
		$('.banner_pic li').eq(iNow).css({display:'block'}).siblings().css({display:'none'});
		$('.banner_btn li').eq(iNow).addClass('active').siblings().removeClass('active');
	})
 
    //首页妈妈足迹 
	$('.mt_tab--title li').click(function () {
		var iIndex = $(this).index();
		$('.mt_tab--list').eq(iIndex).css({display:'block'}).siblings().css({display:'none'});
        $('.mt_tab--title li').eq(iIndex).addClass('active').siblings().removeClass('active');
	})
	
	
	
	//手机端菜单栏
	$('.nav_bar--button').click(function () {
		if ($('.nav_bar--content').css('display') == 'block') {
			$('.nav_bar--content').slideUp(800);
		} else{
			$('.nav_bar--content').slideDown('slow');
		}
	})
	
	
	$('.off').click(function () {
		if ($(this).siblings('ol').css('display')=='none') {
			$(this).siblings('ol').slideDown('slow');
		} else{
			$(this).siblings('ol').slideUp(100);
		}
	})
	
	//侧导航
	$('.sidebar li').click(function(){
		var sbNow = $(this).index();
		$('.sidebar li').eq(sbNow).addClass('active').siblings().removeClass('active');
	})

	//关于我们
	   //特色服务简介
    $('.spacialfw-btn ol li').click(function(){
        var sfNow = $(this).index();
        $('.spacialfw-btn ol li').eq(sfNow).addClass('active').siblings().removeClass('active');
        $('.spacialfw-pic ul li').eq(sfNow).show().siblings().hide();
    })

	   // 周到的服务


    // var fwaBox = $(".goodfw-list li");
    // var fwaBtn = $(".goodfw-btn li");
    // var fwLeft = $(".goodfw-left");
    // var fwRight = $(".goodfw-right");
    // var fwNow = 1;
    // fwLeft.click(function () {
		//    fwNow--;
		// 	if (fwNow<0) {
		// 		fwNow=fwaBox.length-1;
		// 	}
		// 	fwaBtn.eq(fwNow).addClass('active').siblings().removeClass('active');
		// 	fwaBox.eq(fwNow).addClass('active').siblings().removeClass('active');
		// })
    // fwRight.click(function () {
    //     fwNow++;
    //     if (fwNow>fwaBox.length-1) {
    //         fwNow= 0;
    //     }
    //     fwaBtn.eq(fwNow).addClass('active').siblings().removeClass('active');
    //     fwaBox.eq(fwNow).addClass('active').siblings().removeClass('active');
    // })
    // fwaBtn.click(function () {
		// var fwThis = $(this).index();
		// fwaBtn.eq(fwThis).addClass('active').siblings().removeClass('active');
		// fwaBox.eq(fwThis).addClass('active').siblings().removeClass('active');
    // })
    // fwaBox.click(function () {
    //     var fwThis = $(this).index();
    //     fwaBtn.eq(fwThis).addClass('active').siblings().removeClass('active');
    //     fwaBox.eq(fwThis).addClass('active').siblings().removeClass('active');
    // })

	   // 荣誉展示
    $(".honor-list").bxSlider({
        mode: 'horizontal',
        moveSlides: 4,
        minSlides: 4,
        maxSlides: 4,
		slideWidth: 240,
        speed: 800,
	})

    // 证书培训
	 //  证书展示
    $("#zszs").bxSlider({
        mode: 'horizontal',
        moveSlides: 4,
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 222,
        speed: 800,
    })
	//  教材展示
    $("#jczs").bxSlider({
        mode: 'horizontal',
        moveSlides: 4,
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 222,
        speed: 800,
    })


	//加盟国开园之加盟前景
    $('.jmqj-btn-list li').hover(function(){
    	var jmNow = $(this).index();
    	$('.jmqj-btn-list li').eq(jmNow).addClass('active').siblings().removeClass('active');
    	$('.jmqj-content-list li').eq(jmNow).show().siblings().hide();
   
    })
    

    
    
    
    //专业服务之banner
    $('.banner-btn-list li').click(function(){
    	var svNow = $(this).index();
    	$('.banner-btn-list li').eq(svNow).addClass('active').siblings().removeClass('active');
    	$('.banner-content-list li').eq(svNow).show().siblings().hide();
    	$('.banner-bg-list li').eq(svNow).show().siblings().hide();
    });
    
    //专业服务之精品套餐
    $('.jptc-btn-list li').click(function(){
    	var tcNow = $(this).index();
    	$('.jptc-pic-list li').eq(tcNow).show().siblings().hide();
    	$('.jptc-show-title ul li').eq(tcNow).show().siblings().hide();
    })

    // 妈妈足迹
        //视频中心
    var spBox = $(".mom-vedio-list li");
    var spBtn = $(".vedio-btn-list li");
    var spLeft = $(".mom-vedio-left");
    var spRight = $(".mom-vedio-right");
    var spNow = 0;
    spLeft.click(function () {
		spNow--;
		if(spNow < 0){
			spNow = spBtn.length-1;
		}
		spBtn.eq(spNow).addClass('active').siblings().removeClass('active');
		spBox.eq(spNow).show().siblings().hide();
    })
    spRight.click(function () {
        spNow++;
        if(spNow > spBtn.length-1){
            spNow = 0;
        }
        spBtn.eq(spNow).addClass('active').siblings().removeClass('active');
        spBox.eq(spNow).show().siblings().hide();
    })
       //感谢信
    $(".gxx-slide-list").bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 680,
        speed: 800,
    })
})