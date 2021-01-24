window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountInput = document.getElementById('loan-amount');
  const yearsInput = document.getElementById('loan-years');
  const rateInput = document.getElementById('loan-rate');
  amountInput.value = 100000;
  yearsInput.value = 30;
  rateInput.value = 0.05;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = values.rate / 12;
  const n = values.years * 12;
  const base = (1 + i);
  const power = -1 * n;
  const monthlyPayment = (P * i) / (1 - Math.pow(base, power));
  const roundedMonthlyPayment = Math.round(monthlyPayment * 100) / 100;
  let stringMonthlyPayment = roundedMonthlyPayment.toString();
  // if payment has one decimal place add the second
  if(stringMonthlyPayment.indexOf('.') === stringMonthlyPayment.length - 2){
    stringMonthlyPayment = stringMonthlyPayment.concat('0');
  // if there is no decimal add a decimal and two zeros 
  } else if (stringMonthlyPayment.indexOf('.') === -1) {
    stringMonthlyPayment = stringMonthlyPayment.concat('.00');
  }
  return stringMonthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentValue = document.getElementById('monthly-payment');
  paymentValue.innerText = monthly;
}
