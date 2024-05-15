#!/usr/bin/env node
import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 100000;
let mypin = 1234;
//print Welcome messsage
console.log("Welcome to ATM Machine");
// Pin Veification
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin code:",
  },
]);
if (pinAnswer.pin === mypin) {
  console.log("\nCorrect Pin Code!!!");
}else if(pinAnswer.pin !== mypin){
    console.log("Pin is Incorrect,Try Again!");
  }
  // Select an operation  withdraw amount or check balance
let operationAns = await inquirer.prompt([
  {
    name: "operation",
    type: "list",
    message: "Select an operation:",
    choices: ["Withdraw Amount", "Check Balance"],
  },
]);
if (operationAns.operation === "Withdraw Amount") {
  let withdrawAns = await inquirer.prompt([
    {
      name: "withdrawMethod",
      type: "list",
      message: "Select a withdrawal method:",
      choices: ["Fast Cash", "Enter Amount"],
    },
  ]);
  if (withdrawAns.withdrawMethod === "Fast Cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "fastCash",
        type: "list",
        message: "Select Amount:",
        choices: [1000, 2000, 3000, 5000, 10000, 15000, 20000, 50000],
      },
    ]);
    if (fastCashAns.fastCash > myBalance) {
      console.log("Insufficient Balance");
    } else {
      myBalance -= fastCashAns.fastCash;
      console.log(`${fastCashAns.fastCash}withdraw Successfully`);
      console.log(`Your remaing Balance is:${myBalance}`);
    }
  } else if (withdrawAns.withdrawMethod === "Enter Amount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount to withdraw:",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient Balance");
    } else {
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount}Withdraw Successfully`);
      console.log(`Your remaining Balance is:${myBalance}`);
    }
  }if(operationAns.operation==="check balance"){
    console.log(`"Your balance is:"+myBalance `)
    // console.log(`Your Balance is:${myBalance}`);
  }
  // else {
  //   console.log("Pin is Incorrect,Try Again!");
  //  }
  
} 
