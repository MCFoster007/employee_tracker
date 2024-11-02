//connection to databse console.log to confirm
//function main menu:  inquirer prompt: choices, view dpt and add dpt-run that
import inquirer from "inquirer";
// import axios from "axios";
import { connectToDb } from './connection.js';
// const API_URL = 'http://localhost:3000/api';
  const dbConnection = await connectToDb();
  console.log(dbConnection);
  // const fetchDepartments = async () => {
  //   try {
  //     const response = await axios.get(`${API_URL}/department`);
  //     return response.data.data; 
  //   } catch (error) {
  //     console.error('Error fetching departments:', error);
  //     return [];
  //   }
  // };
  
  // const main = async () => {
  //   const departments = await fetchDepartments();
  //   console.log('Departments:', departments);
  // }
  const answers = await inquirer.prompt([
    {
      type: "list",
      message: "Choose a title?",
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
     

  const salaryAnswers = await inquirer.prompt([
          {
            type: "list",
            message: "What is the salary for your title?",
            name: "salary",
            choices: ["Saleperson at $80,000", "Sales Mananger at $90,000", "Accounting Manager at $75,000", "Accountant at $65,000", "Marketing Manager at $85,000"],
          },
        ]);
        
  switch (salaryAnswers.salary) {
          case "Saleperson at $80,000":
            
            break;
          case "Sales Mananger at $90,000":
          
            break;
          case "Accounting Manager at $75,000":
      
            break;
          case "Accountant at $65,000":
           
            break;
          case "Marketing Manager at $85,000":
      

      break;
    default:
      console.log("Invalid choice. Please try again.");
      break;
  }

const supervisorAnswers = await inquirer.prompt([
  {
    type: "list",
    message: "Who has what title and reports to whom",
    name: "supervisor",
    choices: ["Mike Ross, Salesperson, reports to None", "Harvey Spector, Sales Manager, reports to None", "Rachel Zane, Account Manager reports to Sales Manager", "Louis Litt, Accountant, reports to Sales Manager", "Jessica Pearson, Marketing Manager reports to None", "Robert Zane, Sales Manager reports to Marketing Manager", "Jeff Malone, Salesperson reports to Sales Manager","Logan Sanders, Account Manager reports to Accounting", "Zoe Lawford, Accountant reports to Sales Manager"],
  },
]);

switch (supervisorAnswers.supervisor) {
  case "Mike Ross, Salesperson, reports to None":
    
    break;
  case "Harvey Spector, Sales Manager, reports to None":
  
    break;
  case "Rachel Zane, Account Manager reports to Sales Manager":

    break;
  case "Louis Litt, Accountant, reports to Sales Manager":
   
    break;
  case "Jessica Pearson, Marketing Manager reports to None":

    break;
    case "Robert Zane, Sales Manager reports to Marketing Manager":

      break;
    case "Jeff Malone, Salesperson reports to Sales Manager":
     
      break;
    case "Logan Sanders, Account Manager reports to Accounting":

    break;
    case "Zoe Lawford, Accountant reports to Sales Manager":
      break;
      default:
        console.log("Invalid choice. Please try again.");
        break;
    }
 

  // main();