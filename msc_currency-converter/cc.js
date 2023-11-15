#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
//currency converter api link
let apilink = "https://v6.exchangerate-api.com/v6/9f6b43a8b33664d9be7d9425/latest/PKR";
//fetching data
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apilink);
//object to array 
let cuntries = Object.keys(data);
let firstCuntry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: " converting from..",
    choices: cuntries,
});
//user input first country
let userMoney = await inquirer.prompt({
    type: "number",
    name: "money",
    message: `please enter the amount in ${chalk.greenBright.bold(firstCuntry.name)}:`,
});
//convert country
let secondCuntry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: " converting to..",
    choices: cuntries,
});
//conversion rate
let cnv = `https://v6.exchangerate-api.com/v6/9f6b43a8b33664d9be7d9425/pair/${firstCuntry.name}/${secondCuntry.name}`;
//fetching data for conversion rate
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};
let cnvRate = await cnvData(cnv);
let convertedRate = userMoney.money * cnvRate;
console.log(`your ${chalk.bold.greenBright(firstCuntry.name)}  ${chalk.bold.greenBright(userMoney.money)} in ${chalk.bold.greenBright(secondCuntry.name)} is ${chalk.bold.greenBright(convertedRate)}`);
