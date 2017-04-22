function repeat(operation, num){
	for( var i=0 ; i<num ; i++ ){
		function operation(){
			console.log(i);
		}
	}
}


module.exports = repeat;
