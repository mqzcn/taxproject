// import calculateTax from "./app.js";
// const calculateTax = require("./app.js");

// Testing suite to test numbers
describe("Testing numbers", () => {
  // Testing price input of £300,000 should equal tax due output of £4,600
  it("Should caculate tax due to be £4600 when price is £300,000", () => {
    const { taxDue, taxableAmount } = calculateTax(300000);
    expect(taxDue).toEqual(4600);
    expect(taxableAmount).toBe(155000);
  });
  // Testing price input of £250,000 should equal tax due output of £2,100
  it("Should caculate tax due to be £2100 when price is £250,000", () => {
    const { taxDue, taxableAmount } = calculateTax(250000);
    expect(taxDue).toBe(2100);
    expect(taxableAmount).toBe(105000);
  });
});
