let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // \s matches whitespace
let result1 = sample.match(countWhiteSpace);
console.log(result1.length);

// search for everything except whitespace using \S
let countNonWhiteSpace = /\S/g;
let result2 = sample.match(countNonWhiteSpace);
console.log(result2.length);
console.log(`Total number of characters: ${result1.length + result2.length}`);