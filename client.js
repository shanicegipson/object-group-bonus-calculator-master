const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

const threeBonus = .04;
const fourBonus = .06;
const fiveBonus = .10;
const tenureBonus = .05;
let revisedEmployees = [];

function calculateAllEmployeeBonuses() {
  for (let index = 0; index < employees.length; index++) {
    calculateIndividualBonus(employees[index]);
  }
 }

function calculateIndividualBonus (employeeObject) {
    let bonusAmount = null;
    let bonusPercent = 0;
    
    const intSalary = parseInt(employeeObject.annualSalary);

    const newEmployeeObject = {
      bonusPercentage: 0,
      name: employeeObject.name,
      totalBonus: 0,
      totalCompensation: 0,
    }

    

    switch (employeeObject.reviewRating) {
      case 3:
        bonusPercent = threeBonus;
        break;
      case 4:
        bonusPercent = fourBonus;
        break;
      case 5:
        bonusPercent = fiveBonus;
        break;
      default: 
        defaultBonus =  0;
        break;
    }

  //tenure check
  bonusPercent += tenureCheck(employeeObject);
  

  //cap check
  if ( intSalary > 65000 ){
    bonusPercent -= .01;
  }
  
  //level set check
  if ( bonusPercent > .13 ){
    bonusPercent = .13;
  } else if ( bonusPercent < 0 ) {
    bonusPercent = 0;
  }
  
  
  bonusAmount = intSalary * bonusPercent;

  newEmployeeObject.totalBonus = bonusAmount;
  newEmployeeObject.bonusPercentage = bonusPercent;
  newEmployeeObject.totalCompensation = bonusAmount + intSalary;

  

  revisedEmployees.push(newEmployeeObject);
  // console.log(revisedEmployees)
  displayEmployeeBonusOuput();
}

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

$(document).ready(readyNow);

function displayEmployeeBonusOuput(){
  let employeeBonuses = $('#employeeBonusOutput');
  employeeBonuses.empty();
  for (i=0; i<revisedEmployees.length; i++){
    employeeBonuses.append('<li>' + revisedEmployees[i].name+'</li>'
    , '<li>' + ((revisedEmployees[i].bonusPercentage).toFixed(2))*100+'%'+'</li>'
    , '<li>' + '$'+addCommas(revisedEmployees[i].totalBonus)+'</li>'
    , '<li>' + '$'+addCommas(revisedEmployees[i].totalCompensation)+'</li>')
  }
}
 
function readyNow(){
  $('#calculateBonusButton').on('click', calculateAllEmployeeBonuses);
}

// HELPER FUNCTIONS

function tenureCheck(employeeObject) {
  let adjustBonus = 0;
  if ( employeeObject.employeeNumber.length >= 4 ){
    adjustBonus = tenureBonus;
  }

  return adjustBonus;
}




// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



console.log( revisedEmployees );
// ratingEval();