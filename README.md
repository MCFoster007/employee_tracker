Challenge 10 Employee Tracker

## Description

In this challenge is to create three tables, department, role and employee.  Each table will have columns to breakdown  the title, salary, department id, first & last name, role id and manager id.  Used SQL, Structured Query Language, to create and insert information.  Developed a Schema and a Seeds, meaning: schema for the tables and seeds for the insertion of information.  In the terminal, you use command lines to prompt the information you like to see.  Then the other half in the typescript side was a variety of questions asking what you like to look for.  A drop down menu was provided for you to select and move to the next question.

## Table of Contents

### Installation
### Usage
### Credits
### License
### How to contribute
### Testing

## Installation

Install postgres package and inquirer 

## Usage

walk through video https://youtu.be/fXQ7t0sXodE


## Credits

To the TA's, Dan and tutor.  they helped get the project going plus my resource book on SQL and stacked overflow.

## License

none was asked to add

## How to contribute

Submitting any ideas to improve or resources to go to learn more aboaut SQL

### Testing

To see of SQL works, first use command: psql -U <computerusername> postgres on a Mac, but on a Windows do: psql -U postgres and it will ask for a password that you assigned.  then go to \i db/schema.sql (this is your database in your schema), then \c <name of the database> to connect to your database.  You then do SELECT * FROM <your database title> to pull up the information on your table.  To test the questions prompt, go to your assigned name of the employee tracker and open an integrated terminal. then run npm start and the questions will appear with a drop down menu.  Then hit control C to kill the terminal and return to the original terminal 

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
