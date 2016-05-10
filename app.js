//--------------------------------------------
//	DOCUMENT READY
//---------------------------------------------

$(document).ready(function() {
	$('.js-like').on('click', function(event) {
		event.preventDefault();
		
		$(this).text('Liked')
		.addClass('is-liked');
	});
	// give a href class of .js-like'
	
	$('.js-add-link').on('click', function(event) {
		event.preventDefault();
		
		$('.js-form').toggleClass('is-visible');
	})
});




