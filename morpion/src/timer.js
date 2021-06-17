const btnStart = document.querySelector("#timerStart");
const btnPause = document.querySelector("#timerPause");
const btnResume = document.querySelector("#timerResume");
const playTime = document.querySelector("#timerTime");
const date = new Date(0);
let intervalId;

const toggle = (disapear, appear) => {
    disapear.classList.add("d-none");
    disapear.classList.remove("d-block");
    appear.classList.add("d-block");
    appear.classList.remove("d-none");
};

const increment = () => {
    playTime.innerText = date.toISOString().substr(14, 5);
    date.setSeconds(date.getSeconds() + 1);
}

const start = () => {
    date.setTime(0);
    increment();
    toggle(btnStart, btnPause);
    intervalId = setInterval(increment, 1000);
};

const pause = () => {
    toggle(btnPause, btnResume);
    stop();
};

const resume = () => {
    toggle(btnResume, btnPause);
    intervalId = setInterval(increment, 1000);
};

const stop = () => {
    clearInterval(intervalId);
};

btnStart.addEventListener("click", start);
btnPause.addEventListener("click", pause);
btnResume.addEventListener("click", resume);
