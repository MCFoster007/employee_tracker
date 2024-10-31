//connection to databse console.log to confirm
//function main menu:  inquirer prompt: choices, view dpt and add dpt-run that
import inquirer from "inquirer";



async function main () {
  const answers = await 
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do",
        name: "title",
        choices: ["Salesperson", " Sales Manager", "Account Manager", "Accountant", "Marketing Manager"],
      },
      {
        type: "list",
        message: "What is the name of the department?",
        name: "department",
        choices: ["Sales", "Management", "Accounting", "Human Resources", "Marketing"],
      
      },  
      {
        type: "list",
        message: "What is the salary of the role?",
        name: "salary",
        choices: ["65000", "75000", "80000", "85000", "90000"],
      },
      {
        type: "list",
        message: "Who do the employees report to ?",
        name: "supervisor",
        choices: ["1", "3", "5"],
      },
    ])

    .then((answers) =>
      console.log(answers)
    );
};
