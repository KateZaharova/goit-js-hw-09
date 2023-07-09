import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


selectors = {
    input: document.querySelector("#datetime-picker"),
    button: document.querySelector("button"),
    dataDays: document.querySelector('span[data-days]'),
    dataHours: document.querySelector('span[data-hours]'),
    dataMinutes: document.querySelector('span[data-minutes]'),
    dataSeconds: document.querySelector('span[data-seconds]')
}

let currentDate = new Date();
let chosenDate;
selectors.button.addEventListener("click", timerCount);
selectors.button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        chosenDate = selectedDates[0];
        if (currentDate >= chosenDate) {
            alert("Please choose a date in the future!");
        } else {
            selectors.button.disabled = false;
        }
  },
};
flatpickr(selectors.input, options);

function timerCount(event) {
    const id = setInterval(() => {
        if (new Date() >= chosenDate) {
            clearInterval(id)
        } else {
        const timer = convertMs(chosenDate - new Date());
        selectors.dataDays.textContent = timer.days.toString().padStart(2, "0");
        selectors.dataHours.textContent = timer.hours.toString().padStart(2, "0");
        selectors.dataMinutes.textContent = timer.minutes.toString().padStart(2, "0");
        selectors.dataSeconds.textContent = timer.seconds.toString().padStart(2, "0");
        }
    },1000);
    
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}