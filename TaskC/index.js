/*
C. We have an object storing salaries of our team. Write a function which returns total sallary in sallaries object. 
  let salaries = { John: 100, Ann: 160, Pete: 130};  calculateSallary(sallaries) => 390
  let salaries = { John: 100, Ann: 160, Pete: 130, Ali: 220 }; calculateSallary(sallaries) => 610
*/

let salaries = { John: 100, Ann: 160, Pete: 130 };

const calculateSalary = (salaries) => {
  let totalSalary = 0;
  for (let key in salaries) {
    totalSalary += salaries[key];
  }
  return totalSalary;
};

console.log(calculateSalary(salaries));
salaries.Ali = 220;
console.log(calculateSalary(salaries));
