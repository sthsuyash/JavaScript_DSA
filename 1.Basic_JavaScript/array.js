const myArr = [["Suyash", 20], ["Sham", 19]];
console.log(myArr, "\n");

myArr.push(["Hansh", 30], ["Ansiu", 22]); // appends at the last of the array
console.log(myArr, "\n");

let removedData = myArr.pop(); // removes last element of array and assigns to removedData
console.log(removedData);
console.log(myArr, "\n");

removedData = myArr.push(removedData); // adds the removedData at the last element of array / pushes at the last
console.log(myArr, "\n");

removedData = myArr.shift(); // removes first element of array
console.log(removedData);
console.log(myArr, "\n");

removedData = myArr.unshift(removedData); // adds the removedData at the first element of array
console.log(myArr, "\n");