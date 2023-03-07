/* pomimo zawartości w HTML nadpisuje,nadaję wartość wewnątrz span */
let counterValue = 0;

// doadawanie //
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const decrementClick = () => {
    counterValue -= 1;
    const counter = document.querySelector("#value");
    counter.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrementClick);
// odejmowanie //
const incrementBtn = document.querySelector('[data-action="increment"]');
const incrementClick = () => {
    counterValue += 1;
    const counter = document.querySelector("#value");
    counter.textContent = counterValue;
};
incrementBtn.addEventListener("click", incrementClick);