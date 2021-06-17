let scorePlayer = 0;

const incrementPlayer = () => {
    scorePlayer += 1;
    document.querySelector("#scorePlayer").innerText = scorePlayer;
};
