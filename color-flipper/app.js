const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]; //setting background color based on randomNumber
    color.textContent = colors[randomNumber]; // setting text as the same randomNumber
});

function getRandomNumber() {
        // get random number between 0-3 (based on the length of the colors array.)
    return Math.floor(colors.length * Math.random());
}