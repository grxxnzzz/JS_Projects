const counterValue = document.getElementById("value");
const btnDecrease = document.getElementById("decrease");
const btnIncrease = document.getElementById("increase");
const btnReset = document.getElementById("reset");

let count = 0;
counterValue.textContent = count;

const checkValueColor = () => {
  if (Number(counterValue.textContent) < 0) {
    counterValue.classList.remove("positive");
    counterValue.classList.add("negative");
  } else if (Number(counterValue.textContent) > 0) {
    counterValue.classList.add("positive");
    counterValue.classList.remove("negative");
  } else {
    counterValue.classList.remove("positive");
    counterValue.classList.remove("negative");
  }
}

btnDecrease.addEventListener('click', () => {
  counterValue.textContent--;
  checkValueColor();
})

btnIncrease.addEventListener('click', () => {
  counterValue.textContent++;
  checkValueColor();
})

btnReset.addEventListener('click', () => {
  counterValue.textContent = 0;
  checkValueColor();
})