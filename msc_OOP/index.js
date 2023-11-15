#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
console.log(persons);
const programStart = async (persons) => {
    do {
        console.log("welcom guest");
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "ap kis se baat krna pasand krengay..",
            choices: ["khud se:self", "student"],
        });
        if (ans.select == "khud se:self") {
            console.log("hello me khd se bt krrha ho");
            console.log("meri tbyt achi hai.");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "apko kis student se bt krni hai.",
                name: "student",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hellow i am${name.name}, and i am very well`); //student mojod ni
                console.log(persons.students);
            }
            if (student) {
                console.log(`hellow i am ${student.name}, and i am very well..............`); //student mojod hai
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
