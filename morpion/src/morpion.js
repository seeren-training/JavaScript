const scorePlayer = $("#scorePlayer");
const scoreCPU = $("#scoreCPU");
const markList = [];
const results = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let counterPlayer = 0;
let counterCPU = 0;
let timeoutId = 0;

const markCPU = () => {
    let resultIndex = getResultsTarget();
    for (const key in results[resultIndex]) {
        const resultCase = $("#case" + results[resultIndex][key]);
        if (false === resultCase.hasClass('circle')) {
            return mark(resultCase, 'cross');
        }
    }
};

const getResultsTarget = () => {
    let resultIndex = 0;
    let markNumber = 0;
    for(const key in results) {
        for (const subkey in results[key]) {
            const curentCase = $("#case" + results[key][subkey]);
            if (curentCase.hasClass('cross')) {
                markList[key] = [];
                break;
            }
            if (curentCase.hasClass('circle')
            && -1 === markList[key].indexOf(results[key][subkey])) {
                markList[key].push(results[key][subkey]);
            }
        }
    }
    for (const key in markList) {
        if (markNumber < markList[key].length) {
            markNumber = markList[key].length;
            resultIndex = key;
        }
    }
    return resultIndex;
};

const markPlayer = (e) => {
    if ($(".circle").length === $(".cross").length) {
        mark($(e.target), 'circle');
    }
};

const mark = (target, shape) => {
    if (true === target.hasClass(shape)) {   
        return;
    }
    target.addClass([shape, 'mark']);
    if (hasWin(shape)) {
        terminate(shape);
    } else if (9 === $(".mark").length) {
        terminate();
    } else if ('circle' === shape) {
        timeoutId = setTimeout(markCPU, 2000);
    }
};

const hasWin = (shape) => {
    for (const key in results) {
        if ($("#case" + results[key][0]).hasClass(shape)
        && $("#case"  + results[key][1]).hasClass(shape)
        && $("#case"  + results[key][2]).hasClass(shape)) {
            return true;
        }
    }
    return false;
};

const terminate = (shape) => {
    disable();
    chronoPause();
    btnToogle(btnResume, btnStart);
    if ('circle' === shape) {
        counterPlayer = counterPlayer + 1;
        scorePlayer.text(counterPlayer);
    } else if ('cross' === shape){
        counterCPU = counterCPU + 1;
        scoreCPU.text(counterCPU)
    }
};

const start = () => {
    markList.splice(0);
    $(".case").removeClass(["circle", "cross", "mark"]);
    for (const key in results) {
        markList.push([]);
    }
    enable();
};

const enable = () => {
    $(".case").on("click", markPlayer);
    if ($(".circle").length > $(".cross").length) {
        timeoutId = setTimeout(markCPU, 1000);
    }
};

const disable = () => {
    clearTimeout(timeoutId);
    $(".case").off("click", markPlayer);
};

$("#timerStart").on("click", start);
$("#timerPause").on("click", disable);
$("#timerResume").on("click", enable);
