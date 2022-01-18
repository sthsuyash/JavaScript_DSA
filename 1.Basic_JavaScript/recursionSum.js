/*
Write a recursive function, sum(arr, n), \
that returns the sum of the first n elements of an array arr.
*/


function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    else {
        return (arr[n - 1] + sum(arr, (n - 1)));
    }
}

let arr = [1, 2, 3, 4, 5, 10];
console.log(sum(arr, arr.length));