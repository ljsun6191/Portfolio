$(document).ready(function(){    
//	var total=$('.slideWrap .slide').length;
//	var i=0;
//	start();
// 
//	function start(){
        /* 이미지 슬라이드 */
		setInterval(function(){
            //fadeIn&Out 슬라이드 이미지
//			if(i==total-1){
//				i=0;
//			}
//			else{
//				i++;
//			}
//            $()
//            $('.slideWrap .slide').css({'margibn-left':'-100%'});
//			$(".slideWrap .slide").fadeOut();
//			$(".slideWrap .slide").eq(i).fadeIn();
            
            //밀려나는 이미지 슬라이드
            $('.slideWrap').stop().animate({"margin-left":"-120%"}, 1000,
            
            
            function() {
                $('.slideWrap .slide').first().appendTo('.slideWrap');
                $('.slideWrap').css({"margin-left":"-53%"});
            });
            
     
         
     },2000);
	
    /* 메뉴 선택 시 활성화 */
    $('ul.tabMenu li').click(function() {
        var brand = '.product div.' + this.className;
        console.log(brand);
        $('ul.tabMenu li').removeClass('on');
        $('.product div').removeClass('on');
        $(this).addClass('on');
       
        $(brand).addClass('on');
    });
    
    /* 햄버거바 클릭시 메뉴 활성화 */
    $('#menu').click(function() {
       $('#menu span').toggleClass('change');
    });
    
//	$(".prev").click(function(){
//		clearInterval(timer);
//		if(i==0){
//			i=total-1;
//		}
//		else{
//			i--;
//		}
//  
//		$(".slideWrap").stop().animate({"margin-left":"0%"},function(){
//			$(".slideWrap .slide").last().prependTo(".slideWrap");
//			$(".slideWrap").css({"margin-left":"-100%"});
//			$(".navi li a").removeClass("on");
//			$(".navi li").eq(i).children("a").addClass("on");
//			start();
//		}); 
//	});
//	
//	$(".next").click(function(){
//		clearInterval(timer);
//		if(i==total-1){
//			i=0;
//		}
//		else{
//			i++;
//		}
//	
//		$(".panel").stop().animate({"margin-left":"-200%"},function(){
//			$(".panel li").first().appendTo(".panel");
//			$(".panel").css({"margin-left":"-100%"});
//			$(".navi li a").removeClass("on");
//			$(".navi li").eq(i).children("a").addClass("on");
//			start();
//		});
//	});
});