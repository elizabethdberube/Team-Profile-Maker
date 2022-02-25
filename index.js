const inquirer = require('inquirer');
const fs = require('fs');


const askUser = () => {
    return inquirer.prompt([

        {
            type: 'input',
            message: 'What is your team manager\'s name?',
            name: 'managers-name',
        },
        {
            type: 'input',
            message: 'What is your team manager\'s employee ID?',
            name: 'managers-id',
        },
        {
            type: 'input',
            message: 'What is your team manager\'s email address?',
            name: 'managers-email',
        },
        {
            type: 'input',
            message: 'What is your team manager\'s office number?',
            name: 'managers-number',
        },
        {
            type: 'list',
            message: 'Which of the following would you like to add?',
            choices: ['engineer', 'intern', 'finish building my team'],
            name: 'role',

        }
    ])
        .then(({ role }) => {
            if (role = "enginner") {
                engineerInfo();
            }

            else if (role = "intern") {
                internInfo();
            }

            else (this) => {
                return;
            }
        });
}

const engineerInfo = () => {
    return inquirer.prompt([{
        type: 'input',
        message: 'What is your team engineer\'s name?',
        name: 'enigneers-name',
    },
    {
        type: 'input',
        message: 'What is your team enigneer\'s employee ID?',
        name: 'enigneer-id',
    },
    {
        type: 'input',
        message: 'What is your team enigneer\'s email address?',
        name: 'enigneer-email',
    },
    {
        type: 'input',
        message: 'What is your team enigneer\'s GitHub username?',
        name: 'Github-user',
    },
    {
        type: 'list',
        message: 'Which of the following would you like to add?',
        choices: ['engineer', 'intern', 'finish building my team'],
        name: 'role',

    }
    ])
        .then(({ role }) => {
            if (role = "enginner") {
                engineerInfo();
            }

            else if (role = "intern") {
                internInfo();
            }

            else (this) => {
                return;
            }
        });
};

const internInfo = () => {
    return inquirer.prompt([{
        type: 'input',
        message: 'What is your team intern\'s name?',
        name: 'interns-name',
    },
    {
        type: 'input',
        message: 'What is your team enigneer\'s employee ID?',
        name: 'interns-id',
    },
    {
        type: 'input',
        message: 'What is your team intern\'s email address?',
        name: 'interns-email',
    },
    {
        type: 'input',
        message: 'What is your team intern\'s school?',
        name: 'intern-school',
    },
    {
        type: 'list',
        message: 'Which of the following would you like to add?',
        choices: ['engineer', 'intern', 'finish building my team'],
        name: 'role',

    }

    ])
        .then(({ role }) => {
            if (role = "enginner") {
                engineerInfo();
            }

            else if (role = "intern") {
                internInfo();
            }

            else (this) => {
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


    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
        crossorigin="anonymous"></script>
</body>

</html>`;


const init = () => {
    askUser()

        .then(() => fs.writeFile('/dist/index.html', createHtmlPage(), (err) =>
            err ? console.error(err) : console.log("Your HTML file is being created"))
        );

};

init();