const fs = require("fs");
const path = require("path");
const Manager = require("./classes/Manager");
const Intern = require("./classes/Intern");
const Engineer = require("./classes/Engineer");
const inquirer = require("inquirer");

const teamArray = [];

const ManagerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the Manager name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager id?",
    },
    {
        type: "email",
        name: "name",
        message: "What is the Manager email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager officeNumber?",
    }
]

const InternQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern id?",
    },
    {
        type: "email",
        name: "name",
        message: "What is the Intern email?",
    },
    {
        type: "input",
        name: "school",
        message: "What is the Intern school?",
    }
]

const EngineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer id?",
    },
    {
        type: "email",
        name: "name",
        message: "What is the Engineer email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer github?",
    }
]

const buildEngineerObject = () => {
    inquirer.prompt(EngineerQuestion).then((answer) => {
        //create new object
        const newM
        //add new object to team array

        //add more members
    });
}