$(document).ready(function() {  		
    
    var total = $('#visual .slide').length;
    var i = 0;
    
    start(); 
    
	function start() {
        timer=setInterval(function() {
            if(i == total - 1) {
                i = 0;
                $(".slideNav1").css({"background-color":"red"});
            }else {
                i++;
            };
            
            $('#visual .slide').fadeOut();
            $('#visual .slide').eq(i).fadeIn();
            
        }, 3000);
    }
});