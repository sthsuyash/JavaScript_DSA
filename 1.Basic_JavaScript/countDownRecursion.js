function countdown(n) {

    if (n < 1) {
        return [];
    }
    else {
        const countArray = countdown(n - 1);
        console.log(n);
        console.log(countArray);
        countArray.unshift(n);

        return countArray;

    }
}
console.log(countdown(5));