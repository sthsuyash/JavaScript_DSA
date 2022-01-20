function add(shopping_list) {
    let added = ["Groceries", "Vegetables"];
    shopping_list.unshift(added);
    console.log("Items have been added.");
    console.log(shopping_list);
}

function del(shopping_list) {
    shopping_list.pop();
}

const shopping_list = [];
let condition = "add";

switch (condition) {

    case "add":
        add(shopping_list);
        break;

    case "delete":
        del(shopping_list);
        break;

    default:
        console.log("Not a valid operation.");
        break;
}

