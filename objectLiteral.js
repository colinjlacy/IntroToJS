/**
 * Created by colinjlacy on 9/13/15.
 */
(function() {
	var someGuy = {
		firstName: "Colin",
		lastName: "Lacy",
		fullName: function() {
			return this.firstName + " " + this.lastName
		},
		dogs: [
			{name: "Harper", age: 4},
			{name: "Boomer", age: 3}
		]
	};

	console.log(someGuy);
	console.log(someGuy.fullName());
})();
