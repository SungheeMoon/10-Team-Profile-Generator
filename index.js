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
  },
];

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
  },
];

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
  },
];

const addMoreEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "who would you like to add?",
        name: "choice",
        choices: ["Engineer", "Intern", "Manager", "Please no More"],
      },
    ])
    .then((answer) => {
      switch (answer.choice) {
        case "Engineer":
          buildEngineerObject();
          break;
        case "Intern":
          buildInternObject();
          break;
        case "Manager":
          buildManagerObject();
          break;
        default:
          teamBuild();
          break;
      }
    });
};

const buildEngineerObject = () => {
  inquirer.prompt(EngineerQuestion).then((answer) => {
    //create new object
    const newEngineer = new Engineer(
      answer.name,
      answer.id,
      answer.email,
      answer.github
    );
    //add new object to team array
    teamArray.push(newEngineer);
    //add more members
    addMoreEmployee();
  });
};

const buildInternObject = () => {
  inquirer.prompt(InternQuestion).then((answer) => {
    //create new object
    const newIntern = new Intern(
      answer.name,
      answer.id,
      answer.email,
      answer.school
    );
    //add new object to team array
    teamArray.push(newIntern);
    //add more members
    addMoreEmployee();
  });
};

const buildManagerObject = () => {
  inquirer.prompt(ManagerQuestion).then((answer) => {
    //create new object
    const newManager = new Manager(
      answer.name,
      answer.id,
      answer.email,
      answer.github
    );
    //add new object to team array
    teamArray.push(newManager);
    //add more members
    addMoreEmployee();
  });
};

addMoreEmployee();



const teamBuild = () => {
    fs.writeFileSync(path.join(__dirname,"team.html"), generateTeamHTML());
};