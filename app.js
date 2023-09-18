const btn = document.querySelector("#advice-btn");
const textEl = document.querySelector("#advice");
const counterEl = document.querySelector("#advice-counter");
let counter = 0;
const fetchAdvice = async () => {
  try {
    let data = await fetch("https://api.adviceslip.com/advice");
    let actualData = await data.json();
    let advice = actualData.slip.advice;
    console.log(advice);
    counter++;
    textEl.textContent = advice;
    counterEl.innerText = `Advices today: ${counter}`;
  } catch (err) {
    console.log(err);
  }
};
btn.addEventListener("click", fetchAdvice);
fetchAdvice();
