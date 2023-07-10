
const selectors = {
  form: document.querySelector("form"),
  delay: document.querySelector("[name=delay]"),
  step: document.querySelector("[name=step]"),
  amount: document.querySelector("[name=amount]"),
  button: document.querySelector("button"),
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

selectors.form.addEventListener("submit", handlerClick); 

function handlerClick(event) {
  event.preventDefault();
  let firstDelay = Number(selectors.delay.value);
  let stepDelay = Number(selectors.step.value);
  let amount = Number(selectors.amount.value);

  for (let i = 0; i < amount; i += 1) {
    let promiseDelay = firstDelay + stepDelay * i;
  
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

  }
}








  /*
  -------------------------
  const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});*/
