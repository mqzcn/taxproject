// Grab elements from the DOM

let priceInput = document.getElementById("input");
const calcButton = document.getElementById("calc-button");

// Function to update Taxable Amount and Tax Due DOM elements
const updateDisplay = (taxableAmount, taxDue, totalTaxableAmount) => {
  const taxableAmountElement = document.getElementById("taxable-amount-output");
  const taxDueElement = document.getElementById("tax-due-output");

  taxableAmountElement.value = numberFormatter(totalTaxableAmount);

  taxDueElement.value = numberFormatter(taxDue);
};

// Helper function to format numbers into currency
const numberFormatter = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  }).format(number);
};

// Calculate Button Event Listener //
document.addEventListener("DOMContentLoaded", function () {
  calcButton.addEventListener("click", (e) => {
    const { taxableAmount, taxDue, totalTaxableAmount } = calculateTax(
      priceInput.value
    );
    priceInput.value = numberFormatter(priceInput.value);
    updateDisplay(taxableAmount, taxDue, totalTaxableAmount);
    // Disable Calculate button if the input field is filled
    if (priceInput.value) {
      calcButton.disabled = true;
    }
  });

  // Validate Price Input field and disable button accordingly
  priceInput.addEventListener("keyup", (e) => {
    if (priceInput.value && priceInput.value > 0) {
      calcButton.disabled = false;
    } else {
      calcButton.disabled = true;
    }
  });

  // Clear Price Input field if it has a value
  priceInput.addEventListener("click", () => {
    if (priceInput.value) {
      priceInput.value = "";
      calcButton.disabled = true;
    }
  });
});
// _______________________

// Logic to calculate tax

// Replace magic numbers with consts
// Maximum Taxable Amount for given bracket
const bracket1MaxTaxableAmount = 105000;
const bracket2MaxTaxableAmount = 75000;
const bracket3MaxTaxableAmount = 425000;

// Maximum Tax Due for given bracket
const bracket1MaxTaxDue = 2100;
const bracket2MaxTaxDue = 3750;
const bracket3MaxTaxDue = 42500;

// Lower Threshold for each bracket
const bracket1LowerThreshold = 145000;
const bracket2LowerThreshold = 250000;
const bracket3LowerThreshold = 325000;
const bracket4LowerThreshold = 750000;

// Grab table elements from DOM
let bracket1taxableAmount = document.getElementById("bracket-1-taxable-amount");
let bracket1TaxDue = document.getElementById("bracket-1-tax-due");

let bracket2taxableAmount = document.getElementById("bracket-2-taxable-amount");
let bracket2TaxDue = document.getElementById("bracket-2-tax-due");

let bracket3taxableAmount = document.getElementById("bracket-3-taxable-amount");
let bracket3TaxDue = document.getElementById("bracket-3-tax-due");

let bracket4taxableAmount = document.getElementById("bracket-4-taxable-amount");
let bracket4TaxDue = document.getElementById("bracket-4-tax-due");

const calculateTax = (price) => {
  let taxableAmount = 0;
  let taxDue = 0;
  let totalTaxableAmount = 0;
  // Bracket 0, no tax due
  if (price <= 145000) {
    taxableAmount = 0;
    taxDue = 0;
    // Reset brackets as price is below £145,000 and no tax is due
    bracket1taxableAmount.innerText = 0;
    bracket2taxableAmount.innerText = 0;
    bracket3taxableAmount.innerText = 0;
    bracket4taxableAmount.innerText = 0;
    bracket1TaxDue.innerText = 0;
    bracket2TaxDue.innerText = 0;
    bracket3TaxDue.innerText = 0;
    bracket4TaxDue.innerText = 0;
  }

  // Bracket 1
  // Check purchase price between £145,001 and £250,000
  if (price >= 145001 && price <= 250000) {
    taxableAmount = price - bracket1LowerThreshold;
    taxDue = taxableAmount * 0.02;

    // Update table elements
    bracket4taxableAmount.innerText = 0;
    bracket4TaxDue.innerText = 0;

    bracket3taxableAmount.innerText = 0;
    bracket3TaxDue.innerText = 0;

    bracket2taxableAmount.innerText = 0;
    bracket2TaxDue.innerText = 0;

    bracket1taxableAmount.innerText = taxableAmount;
    bracket1TaxDue.innerText = taxDue.toFixed(2);

    // Update Total Taxable Amount element
    totalTaxableAmount = parseInt(bracket1taxableAmount.innerText);
  }

  // Bracket 2
  // Check purchase price between £250,001 and £325,000
  if (price >= 250001 && price <= 325000) {
    taxableAmount = price - bracket2LowerThreshold;
    taxDue = taxableAmount * 0.05 + bracket1MaxTaxDue;

    // Update table elements
    bracket4taxableAmount.innerText = 0;
    bracket4TaxDue.innerText = 0;

    bracket3taxableAmount.innerText = 0;
    bracket3TaxDue.innerText = 0;

    bracket2taxableAmount.innerText = taxableAmount;
    bracket2TaxDue.innerText = (taxDue - bracket1MaxTaxDue).toFixed(2);

    bracket1taxableAmount.innerText = bracket1MaxTaxableAmount;
    bracket1TaxDue.innerText = bracket1MaxTaxDue;

    // Update Total Taxable Amount element
    totalTaxableAmount =
      parseInt(bracket1taxableAmount.innerText) +
      parseInt(bracket2taxableAmount.innerText);
  }

  // Bracket 3
  // Check purchase price between £325,001 and £750,000
  if (price >= 325001 && price <= 750000) {
    taxableAmount = price - bracket3LowerThreshold;
    taxDue = taxableAmount * 0.1 + bracket1MaxTaxDue + bracket2MaxTaxDue;

    // Update table elements
    bracket4taxableAmount.innerText = 0;
    bracket4TaxDue.innerText = 0;

    bracket3taxableAmount.innerText = taxableAmount;
    bracket3TaxDue.innerText = (
      taxDue -
      bracket2MaxTaxDue -
      bracket1MaxTaxDue
    ).toFixed(2);

    bracket2taxableAmount.innerText = bracket2MaxTaxableAmount;
    bracket2TaxDue.innerText = bracket2MaxTaxDue;

    bracket1taxableAmount.innerText = bracket1MaxTaxableAmount;
    bracket1TaxDue.innerText = bracket1MaxTaxDue;

    // Update Total Taxable Amount element
    totalTaxableAmount =
      parseInt(bracket1taxableAmount.innerText) +
      parseInt(bracket2taxableAmount.innerText) +
      parseInt(bracket3taxableAmount.innerText);
  }

  // Bracket 4
  // Check purchase price is over £750,000
  if (price >= 750001) {
    taxableAmount = price - bracket4LowerThreshold;
    taxDue =
      taxableAmount * 0.12 +
      bracket1MaxTaxDue +
      bracket2MaxTaxDue +
      bracket3MaxTaxDue;

    // Update table elements
    bracket4taxableAmount.innerText = taxableAmount;
    bracket4TaxDue.innerText = (
      taxDue -
      bracket3MaxTaxDue -
      bracket2MaxTaxDue -
      bracket1MaxTaxDue
    ).toFixed(2);

    bracket3taxableAmount.innerText = bracket3MaxTaxableAmount;
    bracket3TaxDue.innerText = bracket3MaxTaxDue;

    bracket2taxableAmount.innerText = bracket2MaxTaxableAmount;
    bracket2TaxDue.innerText = bracket2MaxTaxDue;

    bracket1taxableAmount.innerText = bracket1MaxTaxableAmount;
    bracket1TaxDue.innerText = bracket1MaxTaxDue;
    // Update Total Taxable Amount element
    totalTaxableAmount =
      parseInt(bracket1taxableAmount.innerText) +
      parseInt(bracket2taxableAmount.innerText) +
      parseInt(bracket3taxableAmount.innerText) +
      parseInt(bracket4taxableAmount.innerText);
  }
  return { taxableAmount, taxDue, totalTaxableAmount };
};

// export default calculateTax;
// module.exports = calculateTax;
