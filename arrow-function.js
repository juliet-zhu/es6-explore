// More expressive closure syntax.

// es6
odds = events.map(v=>v+1);
pairs = events.map(v=>({even:v,odd:v+1}));
nums = events.map((v,i)=>v+i);


// es5
odds = events.map(function(v){return v+1});
pairs = events.map(function(return {even:v,odds:v+1}));
nums = events.map(function(v,i){return v+i});

// Statement Bodies

// es6
nums.forEach(v=>{
	if(v % 5 === 0){
		fives.push(v);
	}
});

// es5
nums.forEach(function(v){
	if(v % 5 === 0){
		fives.push(v);
	}
});

// Lexical this

// es6
function Students(){
	this.nums = [1,5,2,15,20,4];
	this.fives = [];
	this.filter5 = () => {
		console.log('filter5 -> this',this);
		return this.nums.forEach(v=>{
			console.log('forEach -> this',this);
			if(v%5 ===0){
				this.fives.push(v);
			}
		})
	}
}
var student = new Students();
student.filter5();

// es5
function Students(){
	this.nums = [1,5,2,15,20,4];
	this.fives = [];
	this.filter5 = function(){
		console.log('filter5 -> this',this);
		return this.nums.forEach(function(v){
			console.log('forEach -> this',this);
			if(v%5 === 0){
				this.fives.push(v);
			}
		}.bind(this));
	}.bind(this);
}
var student = new Students();
student.filter5();