const start = document.querySelector("button[data-start]");
const stop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
const button = document.querySelector("button")

let timerId = null;
stop.disabled = true;

start.addEventListener("click", (event) => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
      start.disabled = true;
    if (start === event.target) {
        stop.disabled = false;
    }
})

stop.addEventListener("click", () => {
    clearInterval(timerId);
    start.disabled = false;
    stop.disabled = true;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}







