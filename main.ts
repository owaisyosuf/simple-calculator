#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "select your first number", type: "number", name: "firstNumber" },
  {
    message: "select your second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "select your operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition","subtraction","division", "multiplication"],
  },
]);

if (answer.operator==="addition"){
  console.log(answer.firstNumber + answer.secondNumber)
}else if (answer.operator==="subtraction"){
  console.log(answer.firstNumber - answer.secondNumber)
}else if  (answer.operator==="division"){
  console.log(answer.firstNumber / answer.secondNumber)
}else if (answer.operator==="multiplication"){
  console.log(answer.firstNumber * answer.secondNumber)
}else{
  console.log("please select a valid number")
};