/**
 * Created by colinjlacy on 9/13/15.
 */
// variables defined in the run environment
var firstName = "Colin",
	lastName = "Lacy";
// a function defined in the run environment,
// with two variables defined within its local scope
var getFullName = function() {
	var firstName = "Thomas",
		lastName = "Edison";
	return firstName + " " + lastName;
};
// implement that function on real data
console.log(getFullName()); // "Thomas Edison"
console.log(firstName + " " + lastName); // "Colin Lacy"
