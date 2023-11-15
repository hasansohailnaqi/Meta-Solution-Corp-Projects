#!/usr/bin/env node

import inquirer from "inquirer";
import { faker } from '@faker-js/faker';

//requirment
//1 user data     //done 
//2 atm machine    //done
//3 atm function   //done

interface user{
    id: number
    pin: number
    name: string
    accountNumber: number
    balance: number


}

const createUser =()=>{
    let users:user [] = []
    
    for(let i = 0;i<50000;i++) {
        let user:user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(100000 * Math.random()*500000),
            balance: 200000 * i,


        }

        users.push(user)
    }
    
    return users
};

//atm machine 

const atmMachine = async(users:user[])=>{

const response = await inquirer.prompt({

       type: "number",
       message: "write your pin code",
       name: "pin",

    



});



const user = users.find(val => val.pin == response.pin);

if(user){
console.log(`welcom ${user.name} `);
atmFunction(user)
return;
};

console.log("invalid user pin ");

};

//atm function

const atmFunction = async(user:user) => {
const ans = await inquirer.prompt({

     type: "list",
     name: "select",
     message: "what do you want do?",
     choices: ["withdraw","balance","deposite","exit"]


})

if(ans.select=="withdraw"){
    const amount = await inquirer.prompt({
        type: "number",
        message: "enter your amount",
        name: "rupee",
    })
    if(amount.rupee > user.balance){
        return console.log("insufficent balance")
    }
  if(amount.rupee > 50000){
        return console.log("do not allow ")
    }


    console.log(`withdraw amount:${amount.rupee}`)
    console.log(`balance amount:${user.balance-amount.rupee}`)
}


if(ans.select=="balance"){
    console.log(`balance amount:${user.balance}`)
    return
}
if(ans.select=="deposite"){
    const deposite = await inquirer.prompt({
        type: "number",
        message: "deposite amount enter",
        name: "rupee",

    })

    console.log(`deposite amount: ${deposite.rupee}`)
    console.log(`total bal: ${user.balance + deposite.rupee}`)
}
if(ans.select=="exit"){
    console.log("thanks for using msc atm...")
}



}

const users = createUser()

atmMachine(users)


