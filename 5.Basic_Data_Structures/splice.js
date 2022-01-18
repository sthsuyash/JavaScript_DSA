/*
if we want to remove an element from somewhere in the middle? Or remove more than one element at once? 
Well, that's where splice() comes in. 
splice() allows us to do just that: 
remove any number of consecutive elements from anywhere in an array.

splice() can take up to 3 parameters.
The first two parameters of splice() are integers which represent indexes,
or positions, of the array that splice() is being called upon.
splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
newArray has the value ['really', 'happy'].
*/