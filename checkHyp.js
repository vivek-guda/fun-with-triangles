// Check Hypotenuse

const hypForm = document.querySelector("#hyp-form");
const inpHyp1 = document.querySelector("#inpHyp1");
const inpHyp2 = document.querySelector("#inpHyp2");
const outputTxt2 = document.querySelector("#output-txt-2");

hypForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = parseInt(inpHyp1.value);
  let b = parseInt(inpHyp2.value);
  // console.log(a, b);
  outputTxt2.innerText = `c = ${Math.sqrt(a * a + b * b)}`;
});
