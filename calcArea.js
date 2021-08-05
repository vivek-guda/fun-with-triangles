const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const r1 = document.querySelector("#r1");
const r2 = document.querySelector("#r2");
const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const r1i1 = document.querySelector("#r1-i1");
const r1i2 = document.querySelector("#r1-i2");
const r2i1 = document.querySelector("#r2-i1");
const r2i2 = document.querySelector("#r2-i2");
const r2i3 = document.querySelector("#r2-i3");
const areaOut1 = document.querySelector("#area-output-1");
const areaOut2 = document.querySelector("#area-output-2");

radio1.addEventListener("change", () => {
  r1.style.display = "block";
  r2.style.display = "none";
});

radio2.addEventListener("change", () => {
  r1.style.display = "none";
  r2.style.display = "block";
});

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  let b = parseInt(r1i1.value);
  let h = parseInt(r1i2.value);
  areaOut1.innerText = `Area = ${(b * h) / 2}`;
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  let a = parseInt(r2i1.value);
  let b = parseInt(r2i2.value);
  let c = parseInt(r2i3.value);
  let s = (a + b + c) / 2;
  console.log(a, b, c, s);
  areaOut2.innerText = `Area = ${Math.sqrt(s * (s - a) * (s - b) * (s - c))}`;
});
