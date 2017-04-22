/**
* @Author: Mohamed A. Othman
* @Date:   04/March/2017
* @Email:  mohamedashrafothman@gmail.com
* @Filename: lopping-through-arrays.js
* @Last modified by:   Mohamed A. Othman
* @Last modified time: 04/March/2017
* @License: MIT license
* @Copyright: All Right Reserved ©
*/


var pets = ['cat','dog','rat'];
for(var i = 0 ; i < pets.length ; i++){
	pets[i] = pets[i] + 's';
};
console.log(pets);
