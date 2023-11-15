#!/usr/bin/env node

import inquirer from "inquirer";

function counter(paragraph:string){
   let freehiteSpaces = paragraph.replace(/\s/g,"")
    
   return freehiteSpaces.length
}

async function startWordCounter(counter:(text:string)=>number){
    do{
        let res = await inquirer.prompt({
            type: "input",
            message: "write paragraph here...",
            name: "paragrapgh",
        })
    
        console.log(counter(res.paragrapgh));
    }
    while(true)
    

}


startWordCounter(counter)