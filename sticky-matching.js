
// 不是很明白
// let parser = (input,match) => {
// 	for(let pos = 0,lastPos = input.length; pos < lastPos;){
// 		console.log('pos ',pos);
// 		for(let i = 0; i < match.length; i++){
// 			console.log('i ',i);
// 			match[i].pattern.lastIndex = pos;
// 			let found;
// 			if((found = match[i].pattern.exec(input)) !== null){
// 				console.log('found ',found);
// 				match[i].action(found);
// 				pos = match[i].pattern.lastIndex;
// 				break;
// 			}
// 		}
// 	}
// }

// let report = (match) => {
// 	console.log(JSON.stringify(match));
// };
// parser("Foo 1 Bar 7 Baz 42",[
// 	{pattern:/^Foo\s+(\d+)/y,action:(match) => report(match)},
// 	{pattern:/^Bar\s+(\d+)/y,action:(match) => report(match)},
// 	{pattern:/^Baz\s+(\d+)/y,action:(match) => report(match)},
// 	{pattern:/^\s*/y,        action:(match) => {}           }
// ]);

// let parser = (input, match) => {
// 	var pos = 0;
// 	var lastPos = input.length;
// 	while(pos < lastPos){
// 		console.log('pos ',pos);
// 		debugger;
//         for (let i = 0; i < match.length; i++) {
        	
//         	console.log('i ',i);
            
//             match[i].pattern.lastIndex = pos;
            
//             console.log('lastIndex outside',match[i].pattern.lastIndex);
            
//             let found;
//             if ((found = match[i].pattern.exec(input)) !== null) {
            	
//             	console.log('found ',found);
                
//                 match[i].action(found);
//                 pos = match[i].pattern.lastIndex;
                
//                 console.log('lastIndex inside',match[i].pattern.lastIndex);
                
//                 break;
//             }
//         }
// 	}
// }

// let report = (match) => {
//     console.log(JSON.stringify(match));
// };
// parser("Foo 1 Bar 7 Baz 42", [
//     { pattern: /^Foo\s+(\d+)/y, action: (match) => report(match) },
//     { pattern: /^Bar\s+(\d+)/y, action: (match) => report(match) },
//     { pattern: /^Baz\s+(\d+)/y, action: (match) => report(match) },
//     { pattern: /^\s*/y,         action: (match) => {}            }
// ]);


// var parser = function (input, match) {
//     for (var i, found, inputTmp = input; inputTmp !== ""; ) {
//         for (i = 0; i < match.length; i++) {
//             if ((found = match[i].pattern.exec(inputTmp)) !== null) {
//                 match[i].action(found);
//                 inputTmp = inputTmp.substr(found[0].length);
//                 break;
//             }
//         }
//     }
// }

// var report = function (match) {
//     console.log(JSON.stringify(match));
// };
// parser("Foo 1 Bar 7 Baz 42", [
//     { pattern: /^Foo\s+(\d+)/, action: function (match) { report(match); } },
//     { pattern: /^Bar\s+(\d+)/, action: function (match) { report(match); } },
//     { pattern: /^Baz\s+(\d+)/, action: function (match) { report(match); } },
//     { pattern: /^\s*/,         action: function (match) {}                 }
// ]);

let parser = (input, match) => {
    for (let pos = 0, lastPos = input.length; pos < lastPos; ) {
        for (let i = 0; i < match.length; i++) {
            match[i].pattern.lastIndex = pos;
            let found;
            if ((found = match[i].pattern.exec(input)) !== null) {
            	console.log('found ',found);
                match[i].action(found);
                pos = match[i].pattern.lastIndex;
                break;
            }
        }
    }
}

let report = (match) => {
    console.log(JSON.stringify(match));
};
parser("Foo 1 Bar 7 Baz 42", [
    { pattern: /^Foo\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^Bar\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^Baz\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /^\s*/y,         action: (match) => {}            }
]);