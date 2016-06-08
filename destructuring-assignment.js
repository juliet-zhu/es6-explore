// Array matching
// Intuitive and flexible destructuring of Arrays into individual variables during assignment.

//es6
// var list = [1,2,3];
// var c = [a,,b];
// var c = list;

// //es5
// var list = [1,2,3]
// var a = list[0],b = list[2];
// var temp = a; a=b;b=temp;


// Object Matching, Shorthand Notation
var {op,lhs,rhs} = {op:'a',lhs:'b',rhs:'rhs'};

//Object Matching, Deep Matching
var {op:a,lhs:{op:b},rhs:c} = {op:'a',lhs:{op:'b'},rhs:'c'};
console.log(a)
console.log(b)
console.log(c)

// Parameter Context Matching
// Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls.
function f([name,val]){
	console.log(name,val);
}
function g({name:n,val:v}){
	console.log(n,v);
}
function h({name,val}){
	console.log(name,val);
}

f(['bar',42]);
g({name:'foo',val:7});
h({name:'bar',val:42});


// Fail-Soft Destructuring
var list = [7,42];
var [a=1,b=2,c=3,d] = list;
a === 7;
b === 42;
c === 3;
d === undefined;