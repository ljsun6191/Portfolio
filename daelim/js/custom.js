$(document).ready(function(){
    
    var exit = 0;
    
    /* 작가 소개 */
	$('.button1').click(function(){
		$('.art').animate({'top':'-500px','opacity':'0'},1000);
		$('.btnWrap').animate({'bottom':'-100px','opacity':'0'},1000);
		$('.man').animate({'right':'-380px'},1000);
		$('.introduce').fadeIn(3000).css({'display':'block'});
        $('p.exit1').css({'display':'block'});
        /*$('img.exit1').click(function() {
            $('.introduce').fadeOut();
            $('.man').animate({'right':'50px'},1000);
            $('.art').animate({'top':'10px','opacity':'1'},1000);
            $('.btnWrap').animate({'bottom':'100px','opacity':'1'},1000);
        });*/
        $('p.exit1').click(function() {
            $('.introduce').fadeOut().css({'display':'none'});
            $('.man').animate({'right':'50px'},1000);
            $('.art').animate({'top':'10px','opacity':'1'},1000);
            $('.btnWrap').animate({'bottom':'100px','opacity':'1'},1000);
            exit = 1;
        });
	});
    
    /* 인터뷰영상 보기 */	
	$('.button2').click(function() {
		$('.art').animate({'top':'-500px','opacity':'0'},1000);
		$('.btnWrap').animate({'bottom':'-100px','opacity':'0'},1000);
		$('.man').animate({'right':'-380px'},1000);
        $('.videoWrap').fadeIn(3000).css({'display':'block'});
        
        if(exit==0){
            $('.top').animate({'width':'1100px'},800,function() {
                $('.right').animate({'height':'600px'},800,function(){
                    $('.bottom').animate({'width':'1100px'},800,function(){
                        $('.left').animate({'height':'600px'},800,function(){
                            $('.video').fadeIn({'background-color':'#010101'});
                            $('.full').css({'display':'block'});
                            $('p.exit2').css({'display':'block'});
                        });
                    });
                });	
            });
        } else{
            $('.video').fadeIn(2000);
			$('.full').css({'display':'block'});
            $('p.exit2').css({'display':'block'});
        }
		
	});
    
    /* eixt2 */
    $('p.exit2').click(function() {
        $('.videoWrap, .video').fadeOut();
        $('.man').animate({'right':'50px'},1000);
        $('.art').animate({'top':'10px','opacity':'1'},1000);
		$('.btnWrap').animate({'bottom':'100px','opacity':'1'},1000);
        exit = 1;
    });
    
    /* 방문하기 */
    $('.button3').click(function() {
        $('.art').animate({'top':'-500px','opacity':'0'},1000);
		$('.btnWrap').animate({'bottom':'-100px','opacity':'0'},1000);
		$('.man').animate({'right':'-380px'},1000);
		$('.visit').fadeIn(3000).css({'display':'block'});
        $('p.exit3').css({'display':'block'});
        /* eixt3 */
        $('p.exit3').click(function() {
            $('.visit').fadeOut().css({'display':'none'});
            $('.man').animate({'right':'50px'},1000);
            $('.art').animate({'top':'10px','opacity':'1'},1000);
            $('.btnWrap').animate({'bottom':'100px','opacity':'1'},1000);
            exit = 1;
        });
    });
    
    /*메뉴 선택 시 활성화*/
    $(function() {
        $('.visitGuide-btn div.visitBtn p').click(function() {
            $('.visitGuide-btn div.visitBtn p').removeClass('on');
            $(this).removeClass('on');
            $(this).addClass('on');
        });

        $('div.entranceFee').click(function() {
            $('.entranceFee-content').show(); 
            $('.open-closeTime-content').hide(); 
            $('.directions-content').hide();
        });
        $('div.open-closeTime').click(function() {
            $('.open-closeTime-content').show();
            $('.entranceFee-content').hide();
            $('.directions-content').hide();
        });
        $('div.directions').click(function() {
           $('.directions-content').show();
           $('.entranceFee-content').hide();
           $('.open-closeTime-content').hide(); 
        });
});

    
    
    
});
