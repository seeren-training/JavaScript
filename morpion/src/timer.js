const timerTime = $('#timerTime');
const btnStart = $('#timerStart');
const btnPause = $('#timerPause');
const btnResume = $('#timerResume');
let intervalId = null;
let second = 0;

const increment = () => {
    timerTime.text(new Date(second * 1000).toISOString().substr(14, 5));
    second++;
};

const toggleBtn = (on, off) => {
    on.toggleClass('d-block d-none');
    off.toggleClass('d-block d-none');
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

increment();
btnStart.on('click', start);
btnPause.on('click', pause);
btnResume.on('click', resume);