const user1 = {
    name: "Suyash",
    age: 20
};

const { names, age } = user1;
console.log(names);
console.log(age);

//
const user2 = {
    name: "Sam",
    age: 22
};

const { name: userName, age: userAge } = user2;
console.log(userName);
console.log(userAge);

//
const user3 = {
    Harry: {
        age3: 25,
        email: "harry.com"
    }
};

const { Harry: { age3: userAge3, email: userEmail } } = user3;
console.log(userAge3);
console.log(userEmail);

