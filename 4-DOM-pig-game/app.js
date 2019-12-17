/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, twoSixes, winningScore;

init();

//document.querySelector('.btn-roll').addEventListener('click', btn); // Callback function: No parenthesis bc we don't want to call it immediately
document.querySelector('.btn-roll').addEventListener('click', function() {  // Anonymous function: defined right within outer function call
    if(gamePlaying) {
        // 1. Generate random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        // 2. Display the result
        var dice0DOM = document.getElementById('dice-0');
        dice0DOM.style.display = 'block';
        dice0DOM.src = 'dice-' + dice0 + '.png';

        var dice1DOM = document.getElementById('dice-1');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1 + '.png';

        // 3. Update the round score IF the rolled number !== 1
        if(dice0 !== 1 && dice1 !== 1 && !twoSixes) {    // ==/!= does type conversion, ===/!== doesnt
            if(dice0 === 6 || dice1 === 6) twoSixes = true;
            // Add score to current
            roundScore += (dice0 + dice1);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            if(twoSixes) {
                scores[activePlayer] = 0;
                document.getElementById('score-' + activePlayer).textContent = '0';
                twoSixes = false;
            }
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {  // Anonymous function: defined right within outer function call

    if(gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.getElementById('winning-score').value;
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        console.log(winningScore)

        // Check if player won the game
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.getElementById('dice-0').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else { // Change active player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    // document.querySelector('.player-' + Math.abs(activePlayer) + '-panel').classList.remove('active');
    // document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
}

// document.querySelector('.submit-score').addEventListener('submit', function(event) {
//     setWinningScore();
//     event.preventDefault();
// });

// function setWinningScore() {
//     
//     document.getElementById('winning-score').value = winningScore;
// }

document.querySelector('.btn-new').addEventListener('click', init);
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    twoSixes = false;

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';

    //getElementById is quicker thsn querySelector, also don't need . or #
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
// var x = document.querySelector('#score-0').textContent;