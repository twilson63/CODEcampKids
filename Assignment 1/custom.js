jQuery(document).ready(function($) {

	// Live Code Functionality
	$('div.live_code_wrapper').each(function() {
		var $textarea = $(this).find('textarea');
		var $submit = $(this).find('button');
		var $results = $(this).find('div.results');

		$submit.click(function() {
			var user_input = $textarea.val();
			$results.html("").append( user_input );
		});

	});





});
