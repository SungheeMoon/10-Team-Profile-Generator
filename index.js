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

const generateTeamCards = (team) => {
  let result = null;

  result = team.map((mem) => {
    switch (mem.getRole()) {
      case "Engineer":
        return `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${mem.getName()}</h5>
                            <p class="card-text">ID: ${mem.getId()}</p>
                            <p class="card-text">Email: <a href="mailto:${mem.getEmail()}">${mem.getEmail()}</a></p>
                            <p class="card-text">Github: <a href="https://github.com/${mem.getGithub()}">${mem.getGithub()}</a></p>
                        </div>
                    </div>
                `;
      case "Intern":
        return `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${mem.getName()}</h5>
                            <p class="card-text">ID: ${mem.getId()}</p>
                            <p class="card-text">Email: <a href="mailto:${mem.getEmail()}">${mem.getEmail()}</a></p>
                            <p class="card-text">School: ${mem.getSchool()}</p>
                        </div>
                    </div>
                `;
      case "Manager":
        return `
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${mem.getName()}</h5>
                            <p class="card-text">ID: ${mem.getId()}</p>
                            <p class="card-text">Email: <a href="mailto:${mem.getEmail()}">${mem.getEmail()}</a></p>
                            <p class="card-text">Office Manager: ${mem.getOfficeNumber()}</p>
                        </div>
                    </div>
                `;
      default:
        break;
    }
  });

  return result.join("");
};

const generateTeamHTML = () => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
            <title>Team Generator</title>
        </head>
        <body>
            ${generateTeamCards(teamArray)}
        </body>
        </html>
    `;
}

const teamBuild = () => {
  fs.writeFileSync(
    path.join(__dirname, "team.html"),
    generateTeamHTML()
  );
};
