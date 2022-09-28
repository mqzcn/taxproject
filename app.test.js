// import { describe } from "yargs";
// import { calculateTax } from "./calculateTax";

// import { calculateTax } from "./calculateTax.js";
// const calculateTax = require("./calculateTax.js");

// Logic but not imported
const calculateTax = (price) => {
  let taxableAmount = 0;
  let taxDue = 0;

  if (price <= 145000) {
    taxableAmount = 0;
    taxDue = 0;
  }
  // Check purchase price between £145,001 and £250,000
  if (price >= 145001 && price <= 250000) {
    taxableAmount = price - 145000;
    taxDue = taxableAmount * 0.02;
  }
  // Check purchase price between £250,001 and £325,000
  if (price >= 250001 && price <= 325000) {
    taxableAmount = price - 250000;
    taxDue = taxableAmount * 0.05 + 2100;
  }
  // Check purchase price between £325,001 and £750,000
  if (price >= 325001 && price <= 750000) {
    taxableAmount = price - 325000;
    taxDue = taxableAmount * 0.1 + 2100 + 3750;
  }
  // Check purchase price is over £750,000
  if (price >= 750001) {
    taxableAmount = price - 750000;
    taxDue = taxableAmount * 0.12 + 2100 + 3750 + 42500;
  }
  return { taxableAmount, taxDue };
};

// Testing suite to test numbers
describe("Testing numbers", () => {
  //   const priceInput = document.getElementById("input");
  //   const taxableAmount = document.getElementById("taxable-amount-output");
  //   const taxDue = document.getElementById("tax-due-output");

  // Testing price input of £300,000 should equal tax due output of £4,600
  it("Should caculate tax due to be £4600 when price is £300,000", () => {
    const { taxDue, taxableAmount } = calculateTax(300000);
    expect(taxDue).toBe(4600);
    expect(taxableAmount).toBe(50000);
  });
  it("Should caculate tax due to be £2100 when price is £250,000", () => {
    const { taxDue, taxableAmount } = calculateTax(250000);
    expect(taxDue).toBe(2100);
    expect(taxableAmount).toBe(105000);
  });
});
