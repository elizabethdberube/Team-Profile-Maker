const inquirer = require('inquirer');
const fs = require('fs');


const askUser = () => {
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
        },
        {
            type: 'list',
            message: 'Which of the following would you like to add?',
            choices: ['engineer', 'intern', 'finish building my team'],
            name: 'role',

        }
    ])
        .then(({ role }) => {
            if (role == "engineer") {
                engineerInfo();
            }

            else if (role = "intern") {
                internInfo();
            }

            else if (role = "finish building my team") {
                init();
                appendCards();
                return;
            }
        });
}

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
    },
    {
        type: 'list',
        message: 'Which of the following would you like to add?',
        choices: ['engineer', 'intern', 'finish building my team'],
        name: 'role',

    }
    ])
        .then(({ role }) => {
            if (role == "engineer") {
                engineerInfo();
            }

            else if (role = "intern") {
                internInfo();
            }

            else if (role = "finish building my team") {
                init();
                appendCards();
                return;
            }
        });
};

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
    },
    {
        type: 'list',
        message: 'Which of the following would you like to add?',
        choices: ['engineer', 'intern', 'finish building my team'],
        name: 'role',

    }

    ])
        .then(({ role }) => {
            if (role == "engineer") {
                engineerInfo();
            }

            else if (role = "intern") {
                internInfo();
            }

            else if (role = "finish building my team") {
                init();
                appendCards();
                return;
            }
        });
}

const createHtmlPage = () =>
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./dist/styles.css" />
    <title>Team Profile Maker</title>
</head>

<body>
<div class="card-set" id="cardArea">




</div>

    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"></script>
</body>

</html>`;


const init = (() => fs.writeFile('./dist/index.html', createHtmlPage(), (err) =>
    err ? console.error(err) : console.log("Your HTML file is being created"))

);


appendCards({ internsName, internsId, internsEmail, internSchool, managersName, managersId, managersEmail, managersNumber, engineersName, engineersId, engineersEmail, githubUser }){
    const cardArea = document.getElementById('cardArea');
    const div = document.createElement("div");
    div.classList.add("cardArea");

    const markup = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">Name: </h5>
        <h6 class="card-subtitle mb-2 text-muted">Role: </h6>
        <h6 class="card-subtitle mb-2 text-muted">Email: </h6>
        <h6 class="card-subtitle mb-2 text-muted">Office: </h6>

    </div>
    `
    div.innerHTML = markup;
    cardArea.innerHTML = "";
    cardArea.appendChild(div);
}

askUser();

