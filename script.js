'use strict';

const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const currScore0Elem = document.querySelector('#current--0');
const currScore1Elem = document.querySelector('#current--1');
const allCurrentScores = document.querySelectorAll('.current-score');

const diceEl = document.querySelector('.dice');

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

let score0 = 0;
let score1 = 0;
let currentScore = 0;
let currentPlayer = 0;

const switchPlayer = function () {
    currentScore = 0;
    for (let i = 0; i < allCurrentScores.length; i++) allCurrentScores[i].textContent = 0;
    currentPlayer = 1 - currentPlayer;
    if (currentPlayer === 0) {
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
    } else if (currentPlayer === 1) {
        document.querySelector('.player--1').classList.add('player--active');
        document.querySelector('.player--0').classList.remove('player--active');
    }
}

diceEl.classList.add('hidden');

rollBtn.addEventListener('click', function () {
    const diceCurr = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceCurr}.png`;

    if (diceCurr !== 1) {
        currentScore += diceCurr;
        if (currentPlayer === 0) {
            currScore0Elem.textContent = currentScore;
        } else if (currentPlayer === 1) {
            currScore1Elem.textContent = currentScore;
        }
    } else {
        switchPlayer();
    }
})

holdBtn.addEventListener('click', function () {
    if (currentPlayer === 0) {
        score0 += currentScore;
        score0Elem.textContent = score0;
        if (score0 > 99) {
            score0Elem.textContent = 'winner!';
            score1Elem.textContent = 'loser!';
            return;
        }
        switchPlayer();
    } else if (currentPlayer === 1) {
        score1 += currentScore;
        score1Elem.textContent = score1;
        if (score1 > 99) {
            score1Elem.textContent = 'winner!';
            score0Elem.textContent = 'loser!';
            return;
        }
        switchPlayer();
    }
})

newBtn.addEventListener('click', function () {
    score0 = 0;
    score1 = 0;
    score0Elem.textContent = 0;
    score1Elem.textContent = 0;
    currScore0Elem.textContent = 0;
    currScore1Elem.textContent = 0;
    currentPlayer = 1;
    switchPlayer();
    currentScore = 0;
    diceEl.classList.add('hidden');
})

document.addEventListener('')