#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 5678;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    },
]);
//  12345 === 1245 - false
if (pinAnswer.pin === myPin)
    console.log("correct pin code");
else {
    console.log("Incorrect pin number");
}
let operations = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance", "fastcash"]
    }
]);
if (operations.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]); // =, -=, +=
    myBalance -= amountAns.amount;
    console.log(`your remaining balance is: ${myBalance}`);
}
else if (operations.operation === "check balance") {
    console.log(`yourbalance is: ${myBalance}`);
}
else if (operations.operation === "fastcash") {
    let fastcash = await inquirer.prompt([
        {
            name: "amount",
            message: "select your fast cash amount",
            type: "list",
            choices: [1000, 3000, 6000, 10000, 15000, 20000]
        }
    ]);
    if (fastcash.amount <= myBalance) {
        myBalance -= fastcash.amount;
        console.log(`your remaining balance is ${myBalance}`);
    }
    else if (operations.operation === "fastcash") {
        console.log("Insufficient balance you cannot withdraw more then");
    }
}
