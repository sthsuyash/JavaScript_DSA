const Students = [
    {
        "Name": "Suyash",
        "Age": 19,
        "Address": "ABC",
        "Skills":
        {
            "Programming": ["C", "C++", "Python", "JavaScript"],
            "Development": "Web",
            "Interest": "ML"
        },
        "Analytics": "Logical",
        "Others": [
            "Gaming",
            "Travelling",
            "Reading"
        ]
    },

    {
        "Name": "Prashanna",
        "Age": 20,
        "Address": "XYZ",
        "Skills": [
            "Public speaking",
            "Gaming",
            {
                "Programming": {
                    "Language": "Python",
                    "framework": "Django",
                },
                "Web": "HTML/CSS"
            }
        ]
    },

    {
        "Name": "Sandesh",
        "Age": 19,
        "Address": "EFG",
        "Skills": [
            "Guitar",
            "Public speaking",
            {
                "Programming": "C/C++",
                "Design": "Photoshop"
            }
        ]
    },
];
console.log(Students[2].Skills[2]);

// const removedData = Students.pop();
// console.log(Students);

// Students.push(removedData);
// console.log(Students);

// console.log(Students[0].Skills[0]);
// console.log(Students[0].Skills[1]);

// for (let index = 0; index < Students.length; index++) {
//     console.log(Students[index]);
// }

// console.log(Students[0].Skills[0].Programming[1]);
// console.log(Students[1].Skills[2].Programming[0].Language);
// console.log(Students[1].Skills[2].Programming[0].framework);

// console.log(Students[0]);