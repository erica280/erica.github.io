/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/

let com = {
  "comName": "Apple",
  "employees":[
    {
      "first_name": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true
    },
    {
      "first_name": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true
    },
    {
      "first_name": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false
    },
    {
      "first_name": "Anna",
      "department": "Tech",
      "designation": "Executive",
      "salary": 25600,
      "raiseEligible": false
    }
  ],
}

console.log("----PROBLEM 1----");
console.log(com.employees[0]);
console.log(com.employees[1]);
console.log(com.employees[2]);
console.log(com.employees[3]);
//console.log(company.employees[0].fav_food);


/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/

 let company = {
   "companyName": "Tech Stars",
   "website": "www.techstars.site",
   "employees":[
     {
       "first_name": "Sam",
       "department": "Tech",
       "designation": "Manager",
       "salary": 21200,
       "raiseEligible": true
     },
     {
       "first_name": "Mary",
       "department": "Finance",
       "designation": "Trainee",
       "salary": 18500,
       "raiseEligible": true
     },
     {
       "first_name": "Bill",
       "department": "HR",
       "designation": "Executive",
       "salary": 21200,
       "raiseEligible": false
     }
   ],
 }

console.log("----PROBLEM 2----");
console.log(company.companyName);
console.log(company.website);
console.log(company.employees[0]);
console.log(company.employees[1]);
console.log(company.employees[2]);


/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/
console.log("----PROBLEM 3----")
// const newHire{
//    "first_name": "Anna",
//    "department": "Tech",
//    "designation": "Executive",
//    "salary": 25600,
//    "raise eligible": false
//  }
//
// let company = company.employees.push(newHire);
// function addEmployee(obj) {
//   newHire.push()

//  }
// console.log(addEmployee);

// function addEmployee(obj, first_name, department, designation, salary, raiseEligble){
//   let newHire = {
//     "name": first_name,
//     "dept": department,
//     "desig": designation,
//     "sal": salary,
//     "rElgible": raiseEligible
//   };
// ​
//   obj['employees'].push(newHire);
// }
// ​
// addEmployee(company, "Anna", "Tech", "Executive", 25600, false);


/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/

console.log("----PROBLEM 4----");

let money = 0;
for (const i in com.employees){
  money+=com.employees[i].salary
}
console.log(money);

/**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raise eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/
console.log("----PROBLEM 5----");

function increaseSalary(obj){
  for (const i in com.employees){
    if(com.employees[i].raiseEligible){
        com.employees[i].salary*=1.10
        com.employees[i].raiseEligible=false
    }
  }
}

console.log(com.employees);

/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 **/

console.log("----PROBLEM 6----")
