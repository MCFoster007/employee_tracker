//connection to databse console.log to confirm
//function main menu:  inquirer prompt: choices, view dpt and add dpt-run that
import inquirer from "inquirer";

import { connectToDb } from './connection.js';

  const dbConnection = await connectToDb();
  console.log(dbConnection);

 
  const answers = await inquirer.prompt([
    {
      type: "list",
      message: "Choose a role?",
      name: "title",
      choices: ["Salesperson", "Sales Manager", "Account Manager", "Accountant", "Marketing Manager"],
    },
  ]);
  
  switch (answers.title) {
    case "Salesperson":
      
      break;
    case "Sales Manager":
    
      break;
    case "Account Manager":

      break;
    case "Accountant":
     
      break;
    case "Marketing Manager":
  
      break;
    default:
      console.log("Invalid choice. Please try again.");
      break;
  }

  const departmentAnswers = await inquirer.prompt([
    {
      type: "list",
      message: "View which department?",
      name: "department",
      choices: ["Sales", "Management", "Accounting", "Human Resources", "Marketing"],
    },
  ]);
  
  switch (departmentAnswers.department) {
    case "Sales":
      
      break;
    case "Management":
    
      break;
    case "Accounting":

      break;
    case "Human Resources":
     
      break;
    case "Marketing":
  
      break;
    default:
      console.log("Invalid choice. Please try again.");
      break;
  }

  const employeeAnswers = await inquirer.prompt([
    {
      type: "list",
      message: "View an employee",
      name: "employee",
      choices: ["Mike Ross", "Harvey Spector", "Rachel Zane", "Louis Litt", "Jessica Pearson", "Robert Zane", "Jeff Malone","Logan Sanders", "Zoe Lawford"],
    },
  ]);
  
  switch (employeeAnswers.employee) {
    case "Mike Ross":
      
      break;
    case "Harvey Spector":
    
      break;
    case "Rachel Zane":

      break;
    case "Louis Litt":
     
      break;
    case "Jessica Pearson":

      break;
      case "Robert Zane":
  
        break;
      case "Jeff Malone":
       
        break;
      case "Logan Sanders":

      break;
      case "Zoe Lawford":
  
      break;
    default:
      console.log("Invalid choice. Please try again.");
      break;
  }