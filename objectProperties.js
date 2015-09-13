/**
 * Created by colinjlacy on 9/13/15.
 */
// first building an object literal
var colin =  {
	firstName: "Colin",
	lastName: "Lacy"
};
// accessing a property directly
console.log("and his first name is: " + colin.firstName);
// now we'll set a variable to hold on to a property name
var dynamicProperty = "lastName";
// and we'll reference that property name using square brackets
console.log("and his last name is: " + colin[dynamicProperty]);