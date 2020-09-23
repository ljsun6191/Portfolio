$(document).ready(function(){
    /* content1- slide visual images */
	var total=$('.slideWrap .slide').length;
	var total3 = $('.imageSize .slide3').length;
	var i = 0;
    var j = 0;
	
	start();
	
    /* content1 - slide */
	function start(){
        timer=setInterval(function(){
            if(i == total - 1){
                i = 0;
            }
            else{
                i++;
            }
            $('.slideWrap .slide').fadeOut();
            $('.slideWrap .slide').eq(i).fadeIn();
            
            if(j == total3 - 1){
                j = 0;
            }
            else{
                j++;
            }
            $('.imageSize .slide3').fadeOut();
            $('.imageSize .slide3').eq(j).fadeIn();
        },3000);
    }
    
    /* content3 - slide */
    $('.prev').click(function() {
       clearInterval(timer);
		if(i == total - 1){
			i = 0;
		}
		else{
			i--;
		}
		$('.imageSize .slide3').fadeOut();
		$('.imageSize .slide3').eq(i).fadeIn();
    });
    $('.next').click(function(){
        clearInterval(timer);
        if(i == total - 1) {
            i = 0;
        }else {
            i++;
        }
        $('.imageSize .slide3').fadeOut();
        $('.imageSize .slide3').eq(i).fadeIn();		
    });
    
    /* nav */
    $('.navWrap ul li.scroll').click(function() {
		i=$(this).index();
        console.log(i);
		$('.container').stop().animate({'top':i*-100+'vh'});
                
	});

    //nav - copyright 
    $('.navWrap ul li.copyright').click(function() {
		i=$(this).index();
		$('.container').stop().animate({'top':i*-100-18+100+'vh'});
        
	});
    
    //nav - changing color
    var btnColor = $('.navWrap ul li.scroll');
    
    btnColor.find('a').click(function() {
        btnColor.removeClass('active');
        $(this).parent().addClass('active');
    });
    
    
    
    
    
    
    
    
    /*scrolling event (full frame page)*/
//    var aniChk = false; //페이지가 animate중인지 표현하는 변수. true: 애니메이트 중
//    var arrTopVal = []; //각 top값
//    //어떤 요소의 top값(문서/브라우저/body로 부터의 거리)을 구하는 법 
//    //> .offset() 메소드 사용
//    arrTopVal[0] = $('#content1').offset().top;
//    arrTopVal[1] = $('#content2').offset().top;
//    arrTopVal[2] = $('#content3').offset().top;
//    arrTopVal[3] = $('#content4').offset().top;
//    arrTopVal[4] = $('#content5').offset().top;
//    //반복되는 함수코드 > 재활용 측면에 유용
//    var pageAni = function(topVal) {
//        aniChk = true;
//        
//        $('html, body').stop().animate({
//           'scrollTop':topVal  
//        }, function() {
//            aniChk = false;
//        });
//    };
//    
//    $(window).on('mousewheel DOMMouseScroll', function(evt) {
//       if(aniChk == false) {
//           evt.originalEvent.wheelDelta;
//           evt..originalEvent.detail;
//           
//           if(evt.originalEvent.wheelDelta > 0 || evt.originalEvent.detail < 0) {
//               //마우스 휠을 위 쪽으로 스크롤 했을 때
//               if(nowIdx > 0) {
//                   nowIdx--;
//               }
//               pageAni(arrTopVal[nowIdx]);
//           }else {
//               //마우스 휠을 아래 쪽으로 스크롤 했을 때
//               if(nowIdx < 4) {
//                   nowIdx++;
//               }
//               pageAni(arrTopVal[nowIdx]);
//           }
//       } 
//    });
       
});
