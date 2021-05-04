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

const mark = (e) => {
    const target = $(e.target);
    if (false === target.hasClass('circle')) {   
        target.addClass('circle');
        if (hasWin('circle')) {
            console.log("Partie gagnée");
            disable();
        }
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

const enable = () => {
    $(".case").on("click", mark);
};

const disable = () => {
    $(".case").off("click", mark);
};

$("#timerStart").on("click", enable);
$("#timerPause").on("click", disable);
$("#timerResume").on("click", enable);
