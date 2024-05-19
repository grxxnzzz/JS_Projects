const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomNumber = () => {
  return Math.floor(Math.random(0, 3) * colors.length);
}

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
