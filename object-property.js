// Property Shorthand

// es6
obj = {x,y}

// es5
obj = {x:x,y:y}

//Computed Property Names

//es6
let obj = {
	foo:'bar',
	['baz'+quux()]:42
};

//es5
var obj = {
	foo:"bar"
};
obj["baz"+quux()] = 42;

// Method Properties
// Support for method notation in object property definitions, for both regular functions and generator functions.

//es6
obj = {
	foo(a,b){
		...
	},
	*quux(x,y){
		...
	}
}

//es5
obj = {
	foo:function(a,b){
		...
	},
	// quux: no equivalent in es5
}