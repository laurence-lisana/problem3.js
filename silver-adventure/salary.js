const { mainModule } = require("process");
const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

const payeRates = [
  {
    min: 0,
    max: 24000,
    deduction: 10,
  },
  {
    min: 24000,
    max: 32333.33,
    deduction: 25,
  },
  {
    min: 32333.33,
    max: 499999.99,
    deduction: 30,
  },
  {
    min: 500000,
    max: 799999.99,
    deduction: 32.5,
  },
];

function getTaxRate(salary) {
  if (salary <= 24000) {
    return 10;
  }
  if (salary > 24000 && salary <= 32333.33) {
    return 25;
  }
  if (salary > 32333.33 && salary <= 499999.99) {
    return 30;
  }
  if (salary > 500000 && salary <= 799999.99) {
    return 32.5;
  }
  return 35;
}

function salaryAfterPaye(salary) {
    const rate = getTaxRate(salary) / 100;
    const taxable = salary * rate;
    const income = salary - taxable;
    const net = income + 2640;
    return net;
  }
  
  function nhifDeductable(salary) {
    if (salary < 6000) {
      return 150;
    }
    if (salary >= 6000 && salary < 8000) {
      return 300;
    }
    if (salary >= 8000 && salary < 12000) {
      return 400;
    }
    if (salary >= 12000 && salary < 15000) {
      return 500;
    }
    if (salary >= 15000 && salary < 20000) {
      return 600;
    }
    if (salary >= 20000 && salary < 25000) {
      return 750;
    }
    if (salary >= 25000 && salary < 30000) {
      return 850;
    }
    if (salary >= 30000 && salary < 35000) {
      return 900;
    }
    if (salary >= 35000 && salary < 40000) {
      return 950;
    }
    if (salary >= 40000 && salary < 45000) {
      return 1000;
    }
    if (salary >= 45000 && salary < 50000) {
      return 1100;
    }
    if (salary >= 50000 && salary < 60000) {
      return 1200;
    }
    if (salary >= 60000 && salary < 70000) {
      return 1300;
    }
    if (salary >= 70000 && salary < 80000) {
      return 1400;
    }
    if (salary >= 80000 && salary < 90000) {
      return 1500;
    }
    if (salary >= 90000 && salary < 100000) {
      return 1600;
    }
    if (salary >= 100000) {
      return 1700;
    }
  }
  
  function Netsalary(salary) {
    const afterPay = salaryAfterPaye(salary);
    const nhif = nhifDeductable(salary);
    const netSalary = afterPay - nhif;
    return netSalary;
  }
  function main() {
    rl.question("enter your gross salary ", (salary) => {
      let s = parseInt(salary);
      if (isNaN(s)) {
        console.log("please enter a number \n");
        main();
        return;
      }
      console.log(
        "if your gross salary is",
        salary,
        "your net is",
        Netsalary(salary)
      );
      rl.close();
    });
  }
  main();