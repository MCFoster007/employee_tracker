//connection to databse console.log to confirm
//function main menu:  inquirer prompt: choices, view dpt and add dpt-run that
import inquirer from "inquirer";




const mainMenu = () => {

  inquirer
    .prompt([
      {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
      },
    ])
    .then((answers) =>
      console.log(answers)
    );
};
