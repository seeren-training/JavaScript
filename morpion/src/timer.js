const btnStart = $("#timerStart");
const btnPause = $("#timerPause");
const btnResume = $("#timerResume");
const chrono = $("#timerTime");
let secondPast = 0;
let intervalId = null;

const btnToogle = (current, next) => {
    const classBlock = "d-block";
    const classNone = "d-none";
    current.removeClass(classBlock).addClass(classNone);
    next.removeClass(classNone).addClass(classBlock);
};

const increment = () => {
    secondPast = secondPast + 1;
    chrono.text(new Date(secondPast * 1000).toISOString().substr(14, 5));
};

const chronoStart = () => {
    btnToogle(btnStart, btnResume);
    chronoResume();
};

const chronoPause = () => {
    btnToogle(btnPause, btnResume);
    clearInterval(intervalId);
};

const chronoResume = () => {
    btnToogle(btnResume, btnPause);
    intervalId = setInterval(increment, 1000);
};

btnStart.on("click", chronoStart);
btnPause.on("click", chronoPause);
btnResume.on("click", chronoResume);
