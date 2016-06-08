//Binary & Octal Literal

//es6
0b111110111 === 503
0o767 === 503

//es5
parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;
0767 === 503; // only in non-strict, backward compatibility mode