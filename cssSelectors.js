/**
 * Created by colinjlacy on 9/13/15.
 */
(function() {
	var countPs = $('p').length,
		countPsWithClass =  $('p.someClass').length,
		countClass = $('.someClass').length;

	console.log(countPs + ' P tags, '
		+ countPsWithClass + ' Ps with class, and '
		+ countClass + ' total tags with class');
})();