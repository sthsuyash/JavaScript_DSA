let arrFunc = (...arr) => {
    return arr;
};

const arr1 = [1, 4, 634, 23, 13];

let arrF = [];
arrF = arrF.push(arrFunc(arr1));
console.log(arrF);

let arr = [...arr1];
console.log(arr);
