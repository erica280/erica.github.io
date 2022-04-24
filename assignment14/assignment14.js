//PROBLEM 1
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





//PROBLEM 2
 let company = {
   "companyName": "Tech Stars",
   "website": "www.techstars.site",
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
     }
   ],
 }

console.log("----PROBLEM 2----");
console.log(company.companyName);
console.log(company.website);
console.log(company.employees[0]);
console.log(company.employees[1]);
console.log(company.employees[2]);






//PROBLEM 3
console.log("----PROBLEM 3----")

function addEmployee(first_name, department, designation, salary, raiseEligible){
  const newHire = {
    "first_name": first_name,
    "dept": department,
    "design": designation,
    "salary": salary,
    "raiseEligible": raiseEligible,
  };
  company.employees.push(newHire);
}

addEmployee('Anna', 'Tech', 'Executive', 25600, false);

console.log(company);





//PROBLEM 4

console.log("----PROBLEM 4----");

let money = 0;
for (const i in com.employees){
  money+=com.employees[i].salary
}
console.log(money);





 //PROBLEM 5
console.log("----PROBLEM 5----");

  for (var i=0; i<com.employees.length; i++){
    if (com.employees[i].raiseEligible){
      com.employees[i].salary*=1.10;
      com.employees[i].raiseEligible=false;
    }
  }

console.log(com.employees);





// PROBLEM 6
console.log("----PROBLEM 6----")

const wfHome = ['Anna', 'Sam'];
function addWFH(){
  for (let i = 0; i < company.employees.length; i++){
    company.employees[i].wfh = wfHome.includes(company.employees[i].first_name);
  }
}
addWFH();
console.log(company.employees);
