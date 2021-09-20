let intervalId = null;
let second = 0;

const timerTime = $('#timerTime');
const btnStart = $('#timerStart');
const btnPause = $('#timerPause');
const btnResume = $('#timerResume');

const increment = () => {
    timerTime.text(new Date(second * 1000).toISOString().substr(14, 5));
    second++;
};

const toggle = (on, off) => {
    const classes = 'd-block d-none';
    on.toggleClass(classes);
    off.toggleClass(classes);
};

const start = () => {
    toggle(btnStart, btnPause);
    intervalId = setInterval(increment, 1000);
};

const pause = () => {
    toggle(btnPause, btnResume);
    clearInterval(intervalId);
};

const resume = () => {
    toggle(btnResume, btnPause);
    intervalId = setInterval(increment, 1000);
};

increment();
btnStart.on('click', start);
btnPause.on('click', pause);
btnResume.on('click', resume);