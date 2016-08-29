$(function(){
	var click = false;

	$('.actionButton').on('click', function(){
		if(click == false){
			$(this).addClass('open');
		  	$(this).find('.floatingText').addClass('show');
		  	$('.subActionButton').addClass('display');
		  	$('.subActionButton').find('.floatingText').addClass('show');
		  	click = true;
		}else if(click == true){
			$('.subActionButton').removeClass('display');
	  		$('.actionButton').removeClass('open');
	  		click = false;
	  		$(this).find('.floatingText').removeClass('show');
		}
	});

});