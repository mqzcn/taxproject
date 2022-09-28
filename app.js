// const calculateTax = require("./calculateTax.js");
import { calculateTax } from "./calculateTax.js";

// Grab elements from the DOM
let priceInput = document.getElementById("input");
const calcButton = document.getElementById("calc-button");

// Grab Table elements from DOM
// let bracket1taxableAmount = document.getElementById("bracket-1-taxable-amount");
// let bracket1TaxDue = document.getElementById("bracket-1-tax-due");

// Function to update Taxable Amount and Tax Due DOM elements
const updateDisplay = (taxableAmount, taxDue, totalTaxableAmount) => {
  const taxableAmountElement = document.getElementById("taxable-amount-output");
  const taxDueElement = document.getElementById("tax-due-output");

  // bracket1taxableAmount.innerText = taxableAmount;
  // bracket1TaxDue.innerText = taxDue;

  // Change strings into numbers
  // let taxableAmountNumber = 0;
  // let taxDueNumber = 0;

  // taxableAmountNumber = parseInt(taxableAmount);
  // taxDueNumber = parseInt(taxDue).toLocaleString("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // });

  taxableAmountElement.value = totalTaxableAmount.toFixed(2);
  // console.log(typeof taxableAmountElement.value);

  taxDueElement.value = taxDue.toFixed(2);

  // if (!priceInput) {
  //   taxableAmountElement.value = "";
  //   taxDueElement.value = "";
  // }
};

// Event listener //
calcButton.addEventListener("click", (e) => {
  const { taxableAmount, taxDue, totalTaxableAmount } = calculateTax(
    priceInput.value
  );
  updateDisplay(taxableAmount, taxDue, totalTaxableAmount);
});

// Event listener // Format input field number to currency
priceInput.addEventListener("keyup", (e) => {
  let oldnewPriceInput = e.target.valueAsNumber;
  let newestPrice = oldnewPriceInput.toLocaleString("en-US");
  priceInput.textContent = newestPrice;
  console.log(typeof newestPrice);
});

// _______________________

//Add an event listenter to handle change of the input field and run a function
// If comparisons can better be implemented using Switch Case
// price.addEventListener("change", () => {
//   // Check purchase price is less than or equal to £145,000
//   if (price.value <= 145000) {
//     taxableAmount.value = 0;
//     taxDue.value = 0;
//   }
//   // Check purchase price between £145,001 and £250,000
//   if (price.value >= 145001 && price.value <= 250000) {
//     taxableAmount.value = price.value - 145000;
//     taxDue.value = taxableAmount.value * 0.02;
//   }
//   // Check purchase price between £250,001 and £325,000
//   if (price.value >= 250001 && price.value <= 325000) {
//     taxableAmount.value = price.value - 250000;
//     taxDue.value = taxableAmount.value * 0.05 + 2100;
//   }
//   // Check purchase price between £325,001 and £750,000
//   if (price.value >= 325001 && price.value <= 750000) {
//     taxableAmount.value = price.value - 325000;
//     taxDue.value = taxableAmount.value * 0.1 + 2100 + 3750;
//   }
//   // Check purchase price is over £750,000
//   if (price.value >= 750001) {
//     taxableAmount.value = price.value - 750000;
//     taxDue.value = taxableAmount.value * 0.12 + 2100 + 3750 + 42500;
//   }
//   //   console.log(price.value);
//   //   taxableAmount.textContent = "test";
//   //   taxDue.value = "";
// });
