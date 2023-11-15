#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// clases player and opponent
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// player name & opponent select
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "please enter your name",
});
let Opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "select your opponent",
    choices: ["skeleton", "assassin", "zombie"]
});
//gather data
let P1 = new Player(player.name);
let O1 = new opponent(Opponent.select);
do {
    //skeleton
    if (Opponent.select == "skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your opponent",
            choices: ["attack", "drink portion", "run for your life..."]
        });
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose, better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.red(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win.."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "run for your life...") {
            console.log(chalk.red.bold.italic("you loose, better luck next time"));
            process.exit();
        }
    }
    //assassin
    if (Opponent.select == "assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your opponent",
            choices: ["attack", "drink portion", "run for your life..."]
        });
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose, better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.red(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win.."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "run for your life...") {
            console.log(chalk.red.bold.italic("you loose, better luck next time"));
            process.exit();
        }
    }
    //zombie
    if (Opponent.select == "zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "select your opponent",
            choices: ["attack", "drink portion", "run for your life..."]
        });
        if (ask.opt == "attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you loose, better luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.red(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("you win.."));
                    process.exit();
                }
            }
        }
        if (ask.opt == "drink portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "run for your life...") {
            console.log(chalk.red.bold.italic("you loose, better luck next time"));
            process.exit();
        }
    }
} while (true);
