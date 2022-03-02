const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


let employeeArray = [];

//the main loop that controls the flow of the whole thing.
const mainLoop = () => {


    inquirer.prompt([
        {
            type: 'list',
            message: 'Which of the following would you like to add?',
            choices: ['engineer', 'intern', 'finish building my team'],
            name: 'role',

        }
    ])
        .then(({ role }) => {
            if (role == "engineer") {
                engineerInfo().then(mainLoop);


            }

            else if (role == "intern") {
                internInfo().then(mainLoop);


            }

            else if (role == "finish building my team") {
                writeHTMLtoFile();

                return;
            }
        });

}

//inquirer prompt for questions about the manager
const askManager = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is your team manager\'s name?',
            name: 'managersName',

        },
        {
            type: 'input',
            message: 'What is your team manager\'s employee ID?',
            name: 'managersId',
        },
        {
            type: 'input',
            message: 'What is your team manager\'s email address?',
            name: 'managersEmail',
        },
        {
            type: 'input',
            message: 'What is your team manager\'s office number?',
            name: 'managersNumber',
        }

    ])
        //answers get pushed into array
        .then(({ managersName, managersId, managersEmail, managersNumber }) => {

            let newManager = new Manager({ name: managersName, id: managersId, email: managersEmail, officenumber: managersNumber });

            employeeArray.push(newManager);
        });

}

//inquirer prompt for questions about the engineer
const engineerInfo = () => {
    return inquirer.prompt([{
        type: 'input',
        message: 'What is your team engineer\'s name?',
        name: 'engineersName',
    },
    {
        type: 'input',
        message: 'What is your team engineer\'s employee ID?',
        name: 'engineersId',
    },
    {
        type: 'input',
        message: 'What is your team engineer\'s email address?',
        name: 'engineersEmail',
    },
    {
        type: 'input',
        message: 'What is your team engineer\'s GitHub username?',
        name: 'githubUser',
    }

    ])
        //answers get pushed into array
        .then(({ engineersName, engineersId, engineersEmail, githubUser }) => {


            let newEngineer = new Engineer({ name: engineersName, id: engineersId, email: engineersEmail, github: githubUser });

            employeeArray.push(newEngineer);

        });

};

//inquirer prompt for questions about the intern
const internInfo = () => {
    return inquirer.prompt([{
        type: 'input',
        message: 'What is your team intern\'s name?',
        name: 'internsName',
    },
    {
        type: 'input',
        message: 'What is your team intern\'s employee ID?',
        name: 'internsId',
    },
    {
        type: 'input',
        message: 'What is your team intern\'s email address?',
        name: 'internsEmail',
    },
    {
        type: 'input',
        message: 'What is your team intern\'s school?',
        name: 'internSchool',
    }


    ])
        //answers get pushed into array
        .then(({ internsName, internsId, internsEmail, internSchool }) => {

            let newIntern = new Intern({ name: internsName, id: internsId, email: internsEmail, school: internSchool });

            employeeArray.push(newIntern);

        });

};

//creates layout for HTML page
const createHtmlPage = () => {
    let htmlOutput =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png">

    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Team Profile Maker</title>
</head>

<body>
<div class="jumbotron">
<h1 class="display-4">Team Profile Maker</h1>
<hr class="line">
</div>
<div class="card-set" id="cardArea">
`;
    employeeArray.forEach((employee) => {
        htmlOutput = htmlOutput + cardHTML(employee);

    })

    htmlOutput = htmlOutput + `
</div>
</div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"></script>
</body>

</html>`;
    return htmlOutput;
}

//creates HTML page
const writeHTMLtoFile = (() => fs.writeFile('./dist/index.html', createHtmlPage(), (err) =>
    err ? console.error(err) : console.log("Your HTML file is being created"))

);

//creates cards to index.html file
const cardHTML = (employee) => {
    let markup;
    if (employee.getRole() == "Manager") {
        markup = `<div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${employee.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${employee.getRole()} </h6>
            <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a> </h6>
            <h6 class="card-subtitle mb-2 text-muted">Id: ${employee.getId()}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Office Number: ${employee.getOfficenumber()}</h6>
        </div>
        </div>
      `;
    } else if (employee.getRole() == "Engineer") {
        markup = `<div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${employee.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${employee.getRole()} </h6>
            <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a> </h6>
            <h6 class="card-subtitle mb-2 text-muted">Id: ${employee.getId()}</h6>
            <h6 class="card-subtitle mb-2 text-muted">Github: <a href="https://www.github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></h6>
        </div>
        </div>
      `;

    } else if (employee.getRole() == "Intern") {
        markup = `<div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">Name: ${employee.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${employee.getRole()} </h6>
            <h6 class="card-subtitle mb-2 text-muted">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a> </h6>
            <h6 class="card-subtitle mb-2 text-muted">Id: ${employee.getId()}</h6>
            <h6 class="card-subtitle mb-2 text-muted">School: ${employee.getSchool()}</h6>
        </div>
        </div>
      `
    };
    return markup;
}


askManager().then(() => {
    mainLoop();
});

