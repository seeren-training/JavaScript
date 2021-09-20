let winner = null;

const cellList = $('.case');
const combinationList = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const markCircle = (e) => {
    const shape = 'circle';
    if (mark($(e.target), 'circle')) {
        winner = shape;
        console.log('player win');
    }
};

const mark = (cell, shape) => {
    if (null !== winner
     || cell.hasClass('circle')
     || cell.hasClass('cross')) {
        return false;
    }
    cell.addClass(shape);
    return hasWin(shape);
};

const hasWin = (shape) => {
    for (const combination of combinationList) {
        if ($(`#case${combination[0]}`).hasClass(shape)
        && $(`#case${combination[1]}`).hasClass(shape)
        && $(`#case${combination[2]}`).hasClass(shape)) {
            return true;
        }
    }
    return false;
};

cellList.on('click', markCircle);