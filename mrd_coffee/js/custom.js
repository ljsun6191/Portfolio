$(document).ready(function(){
    /*content1- slide visual images*/
	var total=$('.slideWrap .slide').length;
	var total3 = $('.imageSize .slide3').length;
	var i = 0;
    var j = 0;
	
	start();
	
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
    /*navWrap change color*/
//    $(window).scroll(function(){
//        var conScroll = $(this).scrollTop();
//
//        if(wheel > 0) {
//            //content2로 넘어왔을 때
//            $('#nav ul li a').css({'color':'black'});
//            
//        }else if(wheel > 2000) {
//            //content3로 넘어왔을 때
//            $('#nav ul li a').css({'color':'white'});
//            
//        }else {
//            //content3로 넘어왔을 때
//            $('#nav ul li a').css({'color':'black'});
//            
//        }
//    });

    $('#nav ul li a').on('click', function(event) {
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
    });
    $(window).on('scroll', function() {
        $('.content').each(function() {
            if($(window).scrollTop() >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('#nav ul li a').removeClass('active');
                $('#nav ul li a[href=#'+ id +']').addClass('active');
            }

        });
    });
    /*gnb*/
    $('.navWrap ul li.scroll').click(function() {
		i=$(this).index();
        console.log(i);
		$('.container').stop().animate({'top':i*-1000+'px'});
        
	});
    $('.navWrap ul li.copyright').click(function() {
		i=$(this).index();
		$('.container').stop().animate({'top':i*-1000-180+1000+'px'});
        
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