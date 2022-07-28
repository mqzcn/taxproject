// Grab elements from the DOM
const price = document.getElementById("input");
const taxableAmount = document.getElementById("taxable-amount-output");
const taxDue = document.getElementById("tax-due-output");

// Add an event listenter to handle change of the input field and run a function
price.addEventListener("change", () => {
  // Check purchase price is less than or equal to £145,000
  if (price.value <= 145000) {
    taxableAmount.value = 0;
    taxDue.value = 0;
  }
  // Check purchase price between £145,001 and £250,000
  if (price.value >= 145001 && price.value <= 250000) {
    taxableAmount.value = price.value - 145000;
    taxDue.value = taxableAmount.value * 0.02;
  }
  // Check purchase price between £250,001 and £325,000
  if (price.value >= 250001 && price.value <= 325000) {
    taxableAmount.value = price.value - 250000;
    taxDue.value = taxableAmount.value * 0.05 + 2100;
  }
  // Check purchase price between £325,001 and £750,000
  if (price.value >= 325001 && price.value <= 750000) {
    taxableAmount.value = price.value - 325000;
    taxDue.value = taxableAmount.value * 0.1 + 2100 + 3750;
  }
  // Check purchase price between £145,001 and £250,000
  if (price.value >= 750001) {
    taxableAmount.value = price.value - 750000;
    taxDue.value = taxableAmount.value * 0.12;
  }
  console.log(price.value);
  //   taxableAmount.value = "";
  //   taxDue.value = "";
});
