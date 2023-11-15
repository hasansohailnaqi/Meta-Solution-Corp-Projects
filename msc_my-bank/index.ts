

import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import inquirer from 'inquirer';


// customer class

class Customer {
    firstName: string
    lastName: string
    age: number
    gender: string
    mobNumber: number
    accNumber: number


    constructor (fName:string,lName:string,age:number,gender:string,
        mob:number,acc:number) {
            this.firstName = fName
            this.lastName = lName
            this.age = age
            this.gender = gender
            this.mobNumber = mob
            this.accNumber = acc

        }




}

//interface bank account

interface BankAccount{
    accNumber: number,
    balance : number,
}

// class bank

class Bank{
    customer : Customer[] = [];
    account : BankAccount[] = [];

    addCustomer(obj:Customer){
        this.customer.push(obj);
    }
    
    addAccountNumber(obj:BankAccount){
        this.account.push(obj);
    }
   transaction(accobj:BankAccount){
    let NewAccounts = this.account.filter(acc => acc.accNumber !== accobj.accNumber);
    this.account = [...NewAccounts,accobj]
   }
}

let faysalBank = new Bank();


//let cus = new Customer ("hasan","sohail naqi",29,"male",0331-2480098,5168);

// customer create

for(let i:number = 1; i <= 4; i++){

let fName = faker.person.firstName(`male`)
let lName = faker.person.lastName()
let num = parseInt(faker.phone.number("3##########"));

const cus = new Customer(fName,lName,25*i,"male",num,1000+i)

faysalBank.addCustomer(cus);
faysalBank.addAccountNumber({accNumber: cus.accNumber,balance: 100*i});

}

//console.log(faysalBank);

//bank functionality

async function bankServices(faysalBank:Bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "please select the service",
        choices: ["View Balance","Cash Withdraw","Cash deposite"],
    })
    // view balance
    if(service.select == "View Balance"){
       // console.log("View Balance")
       let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Please enter your account number:",
       })
       let account = faysalBank.account.find((acc) => acc.accNumber == res.num)
       if(!account){
        console.log(chalk.red.bold("Invalid Account Number"))
       }
       if(account){
        let name = faysalBank.customer.find((item) => item.accNumber == account?.accNumber)
        console.log(`Dear ${chalk.green.italic(name?.firstName)}
        ${chalk.green.italic(name?.lastName)} Your Account Balance Is ${chalk.bold.blueBright(`$${account.balance}`)}`)
       }
    }
    //cash withdraw
    if(service.select == "Cash Withdraw"){
       // console.log("Cash Withdraw")
       let res = await inquirer.prompt({
        type: "input",
        name: "num",
        message: "Please enter your account number:",
       })
       let account = faysalBank.account.find((acc) => acc.accNumber == res.num)

       if(!account){
        console.log(chalk.red.bold("Invalid Account Number"))
       }
       if(account){
        let ans = await inquirer.prompt({
            type: "number",
            message: "Please Enter Your Amount",
            name: "rupee",
        });
         
        if(ans.rupee > account.balance){
            console.log(chalk.red.bold("Balance enough for this tranzation.."))
        }

        let newBslsnce = account.balance - ans.rupee;
        //transation Method calling
       faysalBank.transaction({accNumber:account.accNumber,balance: newBslsnce})

            //console.log(newBslsnce);
       }
    }

    //cash deposite
    if(service.select == "Cash deposite"){
       // console.log("Cash deposite")
       if(service.select == "Cash Deposite"){
    
        let res = await inquirer.prompt({
         type: "input",
         name: "num",
         message: "Please enter your account number:",
        })
        let account = faysalBank.account.find((acc) => acc.accNumber == res.num)
        if(!account){
         console.log(chalk.red.bold("Invalid Account Number"))
        }
        if(account){
         let ans = await inquirer.prompt({
             type: "number",
             message: "Please Enter Your Amount",
             name: "rupee",
         });
 
         let newBslsnce = account.balance + ans.rupee;
         //transation Method calling
        faysalBank.transaction({accNumber:account.accNumber,balance: newBslsnce})
 
 
        }
     }
 
    }
}

bankServices(faysalBank);
