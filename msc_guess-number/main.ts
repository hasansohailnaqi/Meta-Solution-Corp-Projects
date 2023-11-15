#!/usr/bin/env node

import inquirer from "inquirer";


let score: number = 0;

async function startloop() {
    let again;
    do{
        await guessNumber();
         again = await inquirer.prompt([
            {
          type: "list",
          name: "restart",
          choices: ["yes","no"],
          message: "do you want to continue: ",
        }

        ])
    }while(again.restart==="yes")
}

startloop();

async function guessNumber(){
 let guessNum = Math.floor(Math.random()*10);
 let tip;
 if(guessNum%2==0){
    tip = "tip: Number is even.";
 }else{
    tip = "tip: Number is odd.";

 }
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: `Guess a number between 1 to 10(${tip})`
    }
]);
console.log(`your guess ${answer.userguess} and system generates ${guessNum}`)
if(answer.userguess===guessNum) {
    score++;
    console.log(`congratulations your answer is correct.your score is: ${score} `);
}else{
    console.log(`wrong guess. your score is ${score}. better lucl nextime.`);
}
}
