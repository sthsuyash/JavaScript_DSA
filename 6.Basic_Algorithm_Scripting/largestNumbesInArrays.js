/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    const maxArray = new Array();
    let max;
    for (let i = 0; i < arr.length; i++) {
      max = Number.MIN_SAFE_INTEGER;
      for (let j = 0; j < arr[i].length; j++) {
        if (max < arr[i][j]) max = arr[i][j];
      }
      maxArray.push(max);
    }
    return maxArray;
  }
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));