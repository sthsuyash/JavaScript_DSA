{
  // Setup for while loop
  const myArray = [];
  let i = 5;
  while (i >= 0) {
    myArray.push(i);
    i--;
  }
  console.log(myArray);
}
{
  // Setup for for loop
  const myArray = [];
  for (let i = 0; i < 5; i++) {
    myArray.push(i);
  }
  console.log(myArray);
}
{
  // Setup for for loop odd nums
  const myArray = [];
  for (let i = 1; i < 10; i += 2) {
    myArray.push(i);
  }
  console.log(myArray);
}
{
  const myArray = [];
  for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
  }
  console.log(myArray);
}
{
  const myArr = [2, 3, 4, 5, 6];
  let total = 0;
  for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
  }
  console.log(total);
}
{
  const myArray = [];
  let i = 10;

  do {
    myArray.push(i);
    i++;
  } while (i < 10);
  console.log(myArray);
}