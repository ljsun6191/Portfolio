$(document).ready(function(){
    
    /* 작가 소개 */
	$(".button1").click(function(){
		$(".art").animate({"top":"-500px","opacity":"0"},1000);
		$(".btnWrap").animate({"bottom":"-100px","opacity":"0"},1000);
		$(".man").animate({"right":"-380px"},1000);
		$(".introduce").fadeIn(3000).css({"display":"block"});
        $("img.exit1").click(function() {
            $(".introduce").fadeOut();
            $(".man").animate({"right":"50px"},1000);
            $(".art").animate({"top":"10px","opacity":"1"},1000);
            $(".btnWrap").animate({"bottom":"100px","opacity":"1"},1000);
        });
	});
    
    /* 인터뷰영상 보기 */
	var exit = 0;
    
	$(".button2").click(function(){
        $(".videoWrap").fadeIn(500);
		$(".art").animate({"top":"-500px","opacity":"0"},1000);
		$(".btnWrap").animate({"bottom":"-100px","opacity":"0"},1000);
		$(".man").animate({"right":"-380px"},1000);
        
        if(exit==0){
            $(".top").animate({"width":"1100px"},1000,function(){
                $(".right").animate({"height":"600px"},1000,function(){
                    $(".bottom").animate({"width":"1100px"},1000,function(){
                        $(".left").animate({"height":"600px"},1000,function(){
                            $(".video").fadeIn({"background-color":"#010101"});
                            $(".full").css({"display":"block"});
                            $("p.exit2").css({"display":"block"});
                        });
                    });
                });	
            });
        } else{
            $(".video").fadeIn(2000);
			$(".full").css({"display":"block"});
            Z$("p.exit2").css({"display":"block"});
        }
		
	});
    
    /* EXIT btn */
    $("p.exit2").click(function(){
        $(".videoWrap, .video").fadeOut();
        $(".man").animate({"right":"50px"},1000);
        $(".art").animate({"top":"10px","opacity":"1"},1000);
		$(".btnWrap").animate({"bottom":"100px","opacity":"1"},1000);
        exit = 1;
    });
});