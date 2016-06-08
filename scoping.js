// Block-scoped variables (and constants) without hoisting.
for(let i; i < 10; i++){
	let x = i;
}
console.log(x);
console.log(i); // error:undefined

// es6
let callbacks = [];
for(let i = 0; i < 3; i++){
	callbacks[i] = function(){
		console.log(i*2+'\n');
	}
}
callbacks[0]();
callbacks[1]();
callbacks[2]();

// es5
var callbacks = [];
for(var i=; i < 3; i++){
	(function(i){
		callbacks[i] = function(){
			console.log(i*2);
		}
	})(i);
}


// Block-scoped function definitions.

// es6
{
	function foo(){
		return 1;
	}
	foo() === 1;
	{
		function foo(){
			return 2;
		}
	}
	foo() === 1;
}
// es5
(function(){
	function foo(){
		return 1;
	}
	foo() === 1;

	(function(){
		function foo(){
			return 2;
		}
	})();
	foo() === 1;
})()





