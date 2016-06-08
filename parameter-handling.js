// Default Parameter Values

//es6
function sum(x,y=7,z=42){
	return x+y+z;
}
sum(1);
//es5
function sum(x,y,z){
	if(y === undefined){
		y = 7;
	}
	if(z === undefined){
		z = 42;
	}
	return x+y+z;
}
sum(1);

//Rest Parameter
//es6
function restParameter(x,y,...rest){
	return (x+y)*rest.length;
}
restParameter(1,1,3,3,3,3);

//es5
function restParameter(x,y){
	var rest = Array.prototype.slice.call(arguments,2);
	return (x+y)*rest.length;
}
restParameter(1,1,3,3,3,3);

//Spread Operator
var params = ['hello','world'];
var other = [1,2,...params];

var str = 'foo';
var char = [...str];