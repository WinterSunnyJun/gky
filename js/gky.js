$(function () {
	
	//首页导航
	var iNOW=null;
	$('.nav > li').hover(function () {
		iNOW = $(this)
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
	
	//加盟国开园之加盟前景
    $('.jmqj-btn-list li').hover(function(){
    	var jmNow = $(this).index();
    	$('.jmqj-btn-list li').eq(jmNow).addClass('active').siblings().removeClass('active');
    	$('.jmqj-content-list li').eq(jmNow).show().siblings().hide();
   
    })
    
    //证书培训
    
    
    
    //专业服务之banner
    $('.banner-btn-list li').click(function(){
    	var svNow = $(this).index();
    	$('.banner-btn-list li').eq(svNow).addClass('active').siblings().removeClass('active');
    	$('.banner-content-list li').eq(svNow).show().siblings().hide();
    	$('.banner-bg-list li').eq(svNow).show().siblings().hide();
    })
    
    //专业服务之精品套餐
    $('.jptc-btn-list li').click(function(){
    	var tcNow = $(this).index();
    	$('.jptc-pic-list li').eq(tcNow).show().siblings().hide();
    	$('.jptc-show-title ul li').eq(tcNow).show().siblings().hide();
    })
    
    //关于我们
    $('.spacialfw-btn ol li').hover(function(){
    	var sfNow = $(this).index();
    	$('.spacialfw-btn ol li').eq(sfNow).addClass('active').siblings().removeClass('active');
    	$('.spacialfw-pic ul li').eq(sfNow).show().siblings().hide();
    })
})