// Example:
// const person = {
//   name: "Suyash Shrestha",
//   age: 20
// };

// const greeting = `Hello, my name is ${person.name}!
//   I am ${person.age} years old.`;

// console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  let arr1 = [...arr];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr1[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);