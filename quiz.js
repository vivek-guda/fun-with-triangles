const quizForm = document.forms[0];
const quesDivs = document.querySelectorAll(".quesDivs");
const scoreDiv = document.querySelector(".scoreHere");
const submitQuiz = document.querySelector(".quiz-submit");

const correctAns = ["option1", "option2", "option1", "option1", "option1"];
let score = 0;

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(quizForm);
  let index = 0;
  for (let entry of data) {
    if (entry[1] == correctAns[index]) {
      quesDivs[index].style.backgroundColor = "lightgreen";
      score++;
    } else {
      quesDivs[index].style.backgroundColor = "pink";
    }
    index++;
  }
  scoreDiv.innerText = `Your score : ${score}`;
  submitQuiz.style.display = "none";
});
