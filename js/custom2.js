$(document).ready(function(){
    
    /*메뉴 선택 시 활성화*/
    $(function() {
        $('.WORKS ul li').click(function() {
            $('.WORKS ul li').removeClass('on');
            $(this).removeClass('on');
            $(this).addClass('on');
        });

        $('.WORKS ul li.page1').click(function() {
            $('.WORKS div.page1').show(); 
            $('.WORKS div.page2').hide(); 
            $('.WORKS div.page3').hide();
            $('.WORKS div.page4').hide();
            $('.WORKS div.page5').hide();
        });
        $('.WORKS ul li.page2').click(function() {
            $('.WORKS div.page2').show(); 
            $('.WORKS div.page1').hide(); 
            $('.WORKS div.page3').hide();
            $('.WORKS div.page4').hide();
            $('.WORKS div.page5').hide();
        });
        $('.WORKS ul li.page3').click(function() {
            $('.WORKS div.page3').show(); 
            $('.WORKS div.page1').hide();
            $('.WORKS div.page2').hide(); 
            $('.WORKS div.page4').hide();
            $('.WORKS div.page5').hide();
        });
        $('.WORKS ul li.page4').click(function() {
            $('.WORKS div.page1').hide();
            $('.WORKS div.page4').show(); 
            $('.WORKS div.page2').hide(); 
            $('.WORKS div.page3').hide();
            $('.WORKS div.page5').hide();
        });
        $('.WORKS ul li.page5').click(function() {
            $('.WORKS div.page5').show(); 
            $('.WORKS div.page1').hide();
            $('.WORKS div.page2').hide(); 
            $('.WORKS div.page3').hide();
            $('.WORKS div.page4').hide();
        });
        
    });






});