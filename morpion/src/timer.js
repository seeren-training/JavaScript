const timerTime = $('#timerTime');
const btnStart = $('#timerStart');
const btnPause = $('#timerPause');
const btnResume = $('#timerResume');

const start = () => {
    btnStart.toggleClass('d-block d-none');
    btnPause.toggleClass('d-block d-none');
};
const pause = () => {
    btnPause.toggleClass('d-block d-none');
    btnResume.toggleClass('d-block d-none');
};
const resume = () => {
    btnResume.toggleClass('d-block d-none');
    btnPause.toggleClass('d-block d-none');
};

timerTime.text('00:00');
btnStart.on('click', start);
btnPause.on('click', pause);
btnResume.on('click', resume);