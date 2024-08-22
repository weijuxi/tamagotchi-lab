/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}
let timer;
let gameOver;


/*------------------------ Cached Element References ------------------------*/
//Make 3 constants to store the spans inside of the ‘stat-display’section.
const boredomStatEL = document.getElementById('boredom-stat');
const hungerStatEL = document.getElementById('hunger-stat');
const sleepinessStatEL = document.getElementById('sleepiness-stat');

//Make 3 constants to store the button elements inside of the ‘controller’ section.
const playBtn = document.getElementById('play');
const feedBtn = document.getElementById('feed');
const sleepBtn = document.getElementById('sleep');

const gameMessageEL = document.getElementById('message');

const resetBtn = document.getElementById('restart');


//console.log(boredomStatEL, hungerStatEL, sleepinessStatEL, playBtn, feedBtn, sleepBtn, gameMessageEL, resetBtn);

/*-------------------------------- Functions --------------------------------*/
const runGame = () => {
    updateStates();
    checkGameOver();
    render();
}


// Add state values to the zero when game over
const render = () => {
    boredomStatEL.textContent = state.boredom;
    hungerStatEL.textContent = state.hunger;
    sleepinessStatEL.textContent = state.sleepiness;
    if (gameOver) {
        clearInterval(timer);
        gameMessageEL.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
        state.boredom = 0;
        state.hunger = 0;
        state.sleepiness = 0;

    }
}

const checkGameOver = () => {
    if (state.boredom >= 10 || state.hunger >= 10 || state.sleepiness >= 10) {
        gameOver = true;
        state.boredom = 0;
        state.hunger = 0;
        state.sleepiness = 0;
    }
}


const updateStates = () => {
    if (gameOver) return;
    state.boredom += Math.floor(Math.random() * 4);
    state.hunger += Math.floor(Math.random() * 4);
    state.sleepiness += Math.floor(Math.random() * 4);
}

const playBtnClick = () => {
    state.boredom = 0;
    render();
}

const feedBtnClick = () => {
    state.hunger = 0;
    render();
}

const sleepBtnClick = () => {
    state.sleepiness = 0;
    render();
}

const init = () => {
    gameMessageEL.classList.add('hidden');
    resetBtn.classList.add('hidden');
    gameOver = false;
    timer = setInterval(runGame, 2000);
    //reset states after game over
    // state.boredom = 0;
    // state.hunger = 0;
    // state.sleepiness = 0;
}

init();

/*----------------------------- Event Listeners -----------------------------*/
playBtn.addEventListener('click', playBtnClick);
feedBtn.addEventListener('click', feedBtnClick);
sleepBtn.addEventListener('click', sleepBtnClick);
resetBtn.addEventListener('click', init);