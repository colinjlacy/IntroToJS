/**
 * Created by colinjlacy on 9/13/15.
 */
var Person = function(fName, lName, dogsArray) {
	return {
		firstName: fName,
		lastName: lName,
		fullName: function() {
			return this.firstName + " " + this.lastName
		},
		dogs: dogsArray
	}
};

var colin = new Person("Colin", "Lacy", [{name: "Harper", age: 4}, {name: "Boomer", age: 3}]);
console.log(colin);
