/**
 * Created by colinjlacy on 9/13/15.
 */
(function() {
	var dogs = [
		{name: "Harper", age: 4},
		{name: "Boomer", age: 3}
	];
	var targetDiv = $('#dog-wrapper');
	$('button').on('click', function() {
		dogs.forEach(function(dog) {
			var html = "<h2>" + dog.name + ", " + dog.age + " years old</h2>";
			targetDiv.append(html);
		});
	});
})();