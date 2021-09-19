// Variables
const timerTime = $('#timerTime');
const btnStart = $('#timerStart');
const btnPause = $('#timerPause');
const btnResume = $('#timerResume');
let intervalId = null;
let second = 0;

// Fonctions
const increment = () => {
    timerTime.text(new Date(second * 1000).toISOString().substr(14, 5));
    second++;
};

const toggleBtn = (on, off) => {
    const classes = 'd-block d-non';
    on.toggleClass(classes);
    off.toggleClass(classes);
};

const start = () => {
    toggleBtn(btnStart, btnPause);
    intervalId = setInterval(increment, 1000);
};

const pause = () => {
    toggleBtn(btnPause, btnResume);
    clearInterval(intervalId);
};

const resume = () => {
    toggleBtn(btnResume, btnPause);
    intervalId = setInterval(increment, 1000);
};

// Initialization
increment();
btnStart.on('click', start);
btnPause.on('click', pause);
btnResume.on('click', resume);