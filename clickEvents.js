/**
 * Created by colinjlacy on 9/13/15.
 */
(function() {
	$('a').on('click', function() {
		$('.someClass').css('color', 'green');
	});
	$('p').on('click', function(e) {
		console.log(e);
		$(e.target).addClass('largeText');
	});
	$('#removal').on('click', function() {
		var pTags = $('p');
		console.log(pTags.length);
		pTags[0].remove();
		console.log(pTags.length);
		console.log($('p').length);
	});
})();