//String Interpolation

//es6
var customer = {name:'Foo'};
var card = {
	amount:7,
	product:'Bar',
	unitPrice:42
};
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount*card.unitPrice} bucks?`

//es5
var customer = {name:'Foo'};
var card = {
	amount:7,
	product:'Bar',
	unitPrice:42
};
var message = 'Hello '+customer.name+',\n'+'want to buy '+card.amount+' '+card.product+' for \na total of '+card.amount*card.unitPrice+' bucks?'; 

// Tagged template literals
var a = 5;
var b = 6;
function tag(strings,...values){
	for(let i=0; i<strings.length;i++){
		console.log(strings[i]);
	}
	for(let i=0;i<values.length;i++){
		console.log(values[i]);
	}
	return 'done';
}
tag `Hello ${ a + b } world ${ a * b }`;

function template(strings,...keys){
	return function(...values){
		console.log('values ',values);
		 var dict = values[values.length-1] || {};
		 console.log('dict ',dict);
		 var result = [strings[0]];
		 console.log('result0 ',result);
		 keys.forEach(function(key,i){
		 	var value = Number.isInteger(key) ? values[key] : dict[key];
		 	result.push(value,strings[i+1]);
		 	console.log('result1 ',result);
		 });
		 return result.join('')
	}
}
var t1Closure = template`${0}${1}${0}!`;
t1Closure('Y', 'A');  // "YAY!" 
var t2Closure = template`${0} ${'foo'}!`;
t2Closure('Hello', {foo: 'World'});


//Raw String Access
function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux `foo\n${ 42 }bar`

String.raw `foo\n${ 42 }bar` === "foo\\n42bar";













