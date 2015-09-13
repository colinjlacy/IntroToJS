/**
 * Created by colinjlacy on 9/13/15.
 */
(function() {
	// first building an object literal
	var colin =  {
		firstName: "Colin",
		lastName: "Lacy"
	};
	// now handle the click event
	$('button').on('click', function(e) {
		var property = $(e.target).attr('id') + "Name";
		$('#display').html(colin[property]);
	});
})();
