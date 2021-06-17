const cells = document.querySelectorAll(".case");

let markList = [];

const combinaisonList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const markCircle = (e) => {
    const mark = "circle";
    const index = parseInt(e.target.id.substr(4));
    if (markList[index]) {
        return;
    }
    e.target.classList.add(mark);
    markList[index] = mark;
    if (3 > markList.length || !hasWin(mark)) {
        return;
    }
    stop();
    toggle(btnPause, btnStart);
    disableGride();
    incrementPlayer();
    // TODO Move Modal to separate file
    const container = document.createElement("div");
    container.classList.add("modal");
    container.innerHTML = getModalHtml();
    document.body.appendChild(container);
    const modal = new bootstrap.Modal(container);
    modal.show();
}

const getModalHtml = () => {
    return `<div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>`;
}

const hasWin = (mark) => {
    for (const combinaison of combinaisonList) {
        if (mark === markList[combinaison[0]]
            && mark === markList[combinaison[1]]
            && mark === markList[combinaison[2]]) {
            return true;
        }
    }
    return false;
}

const initGride = () => {
    markList.splice(0);
    cells.forEach((cell) => {
        cell.classList.remove("circle", "cross");
    });
    enableGride();
}

const enableGride = () => {
    cells.forEach((cell) => {
        cell.addEventListener("click", markCircle)
    });
}

const disableGride = () => {
    cells.forEach(cell => cell.removeEventListener("click", markCircle));
}

btnStart.addEventListener("click", initGride);
btnPause.addEventListener("click", disableGride);
btnResume.addEventListener("click", enableGride);
