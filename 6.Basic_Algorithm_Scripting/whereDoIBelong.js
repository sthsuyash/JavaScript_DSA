/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b); // sort the array in ascending order
// traverse through the whole array
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < num) { // if the array item is less than number given, skip
            continue;
        }
        else if (arr[i] >= num) { // if the array item is less than equal to num, insert it to that index
            arr.splice(i, 0, num);
            return i; // return the index at which the number is added
        }
    }
    // base case, it the number is higher than the array items, add it to the last;
    arr[arr.length] = num;
    console.log(arr);
    return arr.length - 1;
}
console.log(getIndexToIns([2, 5, 10], 15));