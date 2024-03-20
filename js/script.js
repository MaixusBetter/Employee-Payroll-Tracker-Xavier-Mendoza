

//Keeps track of whether more or no emplyees are to be added to the record
let keepAdding=true;

// Gets a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  //sets aarray to be returned.
  const employees=[];

  //user data prompts/inputs
  while(keepAdding){
  let firstName = prompt(
    'Enter Employee First Name: ',
    'First Name');

  let lastName = prompt(
    'Enter Employee Last Name: ',
    'Last Name');

  let salary = parseFloat(prompt(
    'Enter Employee Salary: ',
    'Salary'));

  //User data array insertion
  employees.push({firstName, lastName, salary});

  //loop end check
  keepAdding = confirm("Add more employees?:");
  if(!keepAdding){
    console.log(employees);
    return employees;
    }
 
  }
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  //Array debug Defined employeesArray check
  console.log(employeesArray);

  //adds all salary values within employeesArray
  let salarySum=0;
  for(let i = 0;i<employeesArray.length;i++){
    salarySum+=Number(employeesArray[i].salary);
  }
 
  //Debug Defined salarySum completion check
  console.log(salarySum);

  //Average salary definition
  let avgSalary = salarySum / employeesArray.length;

  //Debug Defined Avgalary completion check
  console.log(avgSalary);

  //User notifictation of average salary
  alert('The average salary is now ' + avgSalary.toFixed(2)); //toFixed to show 2 decimal places
}



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  //Array debug Defined employeesArray check
  console.log(employeesArray.length);

  //random number generation within the indexes of employeesArray
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  //Random Employee sected form randomIndex
  const randomEmployee= employeesArray[randomIndex];

  //Debug variable definition tests
  console.log(randomIndex);
  console.log(randomEmployee);
  console.log(`Random Employee from the array: ${randomEmployee}`);

  //User notifictation of random employee by reference of firstName
  alert(`Random Employee from the array: ${randomEmployee.firstName}`);
}





/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
