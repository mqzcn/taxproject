const price = document.getElementById("input");
const taxableAmount = document.getElementById("taxable-amount-output");
const taxDue = document.getElementById("tax-due-output");

price.addEventListener("change", () => {
  if (price.value <= 145000) {
    taxableAmount.value = 0;
    taxDue.value = 0;
  }
  if (price.value >= 145001 && price.value <= 250000) {
    taxableAmount.value = price.value - 145000;
    taxDue.value = taxableAmount.value * 0.02;
  }
  if (price.value >= 250001 && price.value <= 325000) {
    taxableAmount.value = price.value - 250000;
    taxDue.value = taxableAmount.value * 0.05 + 2100;
  }
  if (price.value >= 325001 && price.value <= 750000) {
    taxableAmount.value = price.value - 325000;
    taxDue.value = taxableAmount.value * 0.1 + 2100 + 3750;
  }
  if (price.value >= 750001) {
    taxableAmount.value = price.value - 750000;
    taxDue.value = taxableAmount.value * 0.12;
  }
  console.log(price.value);
  //   taxableAmount.value = "";
  //   taxDue.value = "";
});
