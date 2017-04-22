/**
* @Author: Mohamed A. Othman
* @Date:   04/March/2017
* @Email:  mohamedashrafothman@gmail.com
* @Filename: array-filtering.js
* @Last modified by:   Mohamed A. Othman
* @Last modified time: 04/March/2017
* @License: MIT license
* @Copyright: All Right Reserved ©
*/


var numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function(number){
	return (number % 2 === 0);
});

console.log(filtered);
