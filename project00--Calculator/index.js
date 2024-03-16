import inquirer from "inquirer";
let calculator = await inquirer.prompt([
    {
        name: "firstNum",
        type: "number",
        message: "Enter your First Number"
    },
    {
        name: "operator",
        type: "list",
        message: "Enter your Operator",
        choices: ["Addition +", "Subtraction -", "Division /", "Multiplication x", "Exponential ^"]
    },
    {
        name: "secondNum",
        type: "number",
        message: "Enter your Second Number",
    }
]);
if (calculator.operator == "Addition +") {
    let sum = calculator.firstNum + calculator.secondNum;
    console.log("Your Addition Result is " + sum);
}
else if (calculator.operator == "Subtraction -") {
    let sub = calculator.firstNum - calculator.secondNum;
    console.log("Your Subtraction Result is " + sub);
}
else if (calculator.operator == "Division /") {
    let div = calculator.firstNum / calculator.secondNum;
    console.log("Your Division Result is " + div);
}
else if (calculator.operator == "Multiplication x") {
    let mul = calculator.firstNum * calculator.secondNum;
    console.log("Your Multiplication Result is " + mul);
}
else if (calculator.operator == "Exponential ^") {
    let exp = calculator.firstNum ** calculator.secondNum;
    console.log("Your Exponential Result is " + exp);
}
