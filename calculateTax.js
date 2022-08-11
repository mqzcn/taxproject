// Grab table elements from DOM
let bracket1taxableAmount = document.getElementById("bracket-1-taxable-amount");
let bracket1TaxDue = document.getElementById("bracket-1-tax-due");

let bracket2taxableAmount = document.getElementById("bracket-2-taxable-amount");
let bracket2TaxDue = document.getElementById("bracket-2-tax-due");

let bracket3taxableAmount = document.getElementById("bracket-3-taxable-amount");
let bracket3TaxDue = document.getElementById("bracket-3-tax-due");

let bracket4taxableAmount = document.getElementById("bracket-4-taxable-amount");
let bracket4TaxDue = document.getElementById("bracket-4-tax-due");

export const calculateTax = (price) => {
  let taxableAmount = 0;
  let taxDue = 0;
  let totalTaxableAmount = 0;

  if (price <= 145000) {
    taxableAmount = 0;
    taxDue = 0;
    // Reset brackets
    bracket1taxableAmount.innerText = 0;
    bracket2taxableAmount.innerText = 0;
    bracket3taxableAmount.innerText = 0;
    bracket4taxableAmount.innerText = 0;
    bracket1TaxDue.innerText = 0;
    bracket2TaxDue.innerText = 0;
    bracket3TaxDue.innerText = 0;
    bracket4TaxDue.innerText = 0;
  }
  // Check purchase price between £145,001 and £250,000
  if (price >= 145001 && price <= 250000) {
    taxableAmount = price - 145000;
    taxDue = taxableAmount * 0.02;

    bracket4taxableAmount.innerText = 0;
    bracket4TaxDue.innerText = 0;

    bracket3taxableAmount.innerText = 0;
    bracket3TaxDue.innerText = 0;

    bracket2taxableAmount.innerText = 0;
    bracket2TaxDue.innerText = 0;

    bracket1taxableAmount.innerText = price - 145000;
    bracket1TaxDue.innerText = bracket1taxableAmount.innerText * 0.02;
  }
  // Check purchase price between £250,001 and £325,000
  if (price >= 250001 && price <= 325000) {
    taxableAmount = price - 250000;
    taxDue = taxableAmount * 0.05 + 2100;

    bracket4taxableAmount.innerText = 0;
    bracket4TaxDue.innerText = 0;

    bracket3taxableAmount.innerText = 0;
    bracket3TaxDue.innerText = 0;

    bracket2taxableAmount.innerText = price - 250000;
    bracket2TaxDue.innerText = bracket2taxableAmount.innerText * 0.05;

    bracket1taxableAmount.innerText = 105000;
    bracket1TaxDue.innerText = 2100;

    totalTaxableAmount =
      bracket1taxableAmount.innerText * 1 + bracket2taxableAmount * 1;
  }
  // Check purchase price between £325,001 and £750,000
  if (price >= 325001 && price <= 750000) {
    taxableAmount = price - 325000;
    taxDue = taxableAmount * 0.1 + 2100 + 3750;

    bracket4taxableAmount.innerText = 0;
    bracket4TaxDue.innerText = 0;

    bracket3taxableAmount.innerText = price - 325000;
    bracket3TaxDue.innerText = (bracket3taxableAmount.innerText * 0.1).toFixed(
      2
    );

    bracket2taxableAmount.innerText = 75000;
    bracket2TaxDue.innerText = 3750;

    bracket1taxableAmount.innerText = 105000;
    bracket1TaxDue.innerText = 2100;

    totalTaxableAmount =
      bracket1taxableAmount.innerText * 1 +
      bracket2taxableAmount.innerText * 1 +
      bracket3taxableAmount.innerText * 1;
  }
  // Check purchase price is over £750,000
  if (price >= 750001) {
    taxableAmount = price - 750000;
    taxDue = taxableAmount * 0.12 + 2100 + 3750 + 42500;

    bracket4taxableAmount.innerText = taxableAmount;
    bracket4TaxDue.innerText = (taxDue - 48350).toFixed(2);

    bracket3taxableAmount.innerText = 425000;
    bracket3TaxDue.innerText = 42500;

    bracket2taxableAmount.innerText = 75000;
    bracket2TaxDue.innerText = 3750;

    bracket1taxableAmount.innerText = 105000;
    bracket1TaxDue.innerText = 2100;

    totalTaxableAmount =
      bracket1taxableAmount.innerText * 1 +
      bracket2taxableAmount.innerText * 1 +
      bracket3taxableAmount.innerText * 1 +
      bracket4taxableAmount.innerText * 1;
  }
  return { taxableAmount, taxDue, totalTaxableAmount };
};

// module.exports = { calculateTax };
