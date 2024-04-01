#! /usr/bin/env node


import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firsrNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform opration",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multipliction", "Division"],
    },
]);
// conditional statment
if (answer.operator === "Addition") {
    console.log(answer.firsrNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firsrNumber - answer.secondNumber);
}
else if (answer.operator === "Multipliction") {
    console.log(answer.firsrNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firsrNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
