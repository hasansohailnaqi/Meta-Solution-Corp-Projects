#!/usr/bin/env node
import inquirer from "inquirer";
import { todo } from "node:test";
import { type } from "os";

let Todos: string[] = [];
let loop = true;

while(loop){
    const answer:{
        Todo: string,
        addmore: boolean,
    } = await inquirer.prompt([
{
      type: "input",
      name: "Todo",
      message: "what do you want to add todo?",
},

{
     type: "confirm",
     name: "addmore",
     message: "do you want to add mor todo?",
     default: false

}       

    ])
const{Todo,addmore} = answer;
console.log(answer)
loop = addmore
if(Todo){
     Todos.push(Todo)
}else{
    console.log("kindly add valid input")
}

}

console.log(Todos)

if(Todos.length > 0){
    console.log("your todo list:")
Todos.forEach(todo => {
    console.log("todo")
});
}else{
    console.log("no todos found")
}