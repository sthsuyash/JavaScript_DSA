// Iterate Through the Keys of an Object with a for...in Statement
// Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:

// for (let user in users) {
//   console.log(user);
// }

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let count = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            count++;
        }
    }
    return count;
}

console.log(countOnline(users));