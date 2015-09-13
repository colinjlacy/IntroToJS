/**
 * Created by colinjlacy on 9/13/15.
 */
(function() {
	// first building an object literal
	var Person = function(fName, lName) {
		return {
			firstName: fName,
			lastName: lName,
			fullName: function() {
				return this.firstName + " " + this.lastName
			}
		}
	};
	var myName = new Person("Colin", "Lacy").fullName().toUpperCase();
	console.log(myName);
})();
