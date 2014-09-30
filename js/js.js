// JavaScript Document

$(document).ready(function(e) {
    $('.nav li a').click(function(){

			
			$('.nav li a').removeClass('active');
			$(this).addClass('active');
								
			var id = $(this).attr('href');
			
			if(id == 'women_skincare.html') return;
			if(id == 'men_skincare.html') return;
			if(id == 'custom_skincare.html') return;			
			if(id == 'blog_28-11-2013.html') return;
					
			scrollTo(id);
			return false;

	});
	
	$('.nav li a').mouseover(function(){
		
		if($(this).hasClass('dropdown-toggle'))
		{
			$('.nav .dropdown').mouseover(function(){
		
					$('.nav li .dropdown-menu').show();
					$('.nav li a').removeClass('active');
					$(this).addClass('active');
			});
		}
		else 
			$('.nav li .dropdown-menu').hide();
	});

	function scrollTo(target){
		if($(target).length>=1){
			height=$(target).offset().top;
		}	
		
		if(target == '#home') height = height - 110;
		$('html,body').animate({scrollTop: height}, 800);
		return false;
	}
	
});




