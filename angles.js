// Angles of Triangle

const anglesForm = document.querySelector("#angles-form");
const inp1 = document.querySelector("#inp1");
const inp2 = document.querySelector("#inp2");
const inp3 = document.querySelector("#inp3");
const outputTxt = document.querySelector("#output-txt");

anglesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    parseInt(inp1.value) + parseInt(inp2.value) + parseInt(inp3.value) ===
    180
  ) {
    outputTxt.innerText = "Yes, it is a Triangle";
  } else {
    outputTxt.innerText = "No, it is not a Triangle";
  }
});
