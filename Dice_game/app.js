/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 20 points on GLOBAL score wins the game

*/
var scores, activePlayer,flag;

function newgame(){
    flag=0;
    scores = [0,0];
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
newgame();
document.querySelector('.btn-new').addEventListener('click',newgame);

document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice = Math.floor(Math.random()*6)+1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png';
    if (flag ===0){
        if (dice!==1){
            scores[activePlayer] = scores[activePlayer]+dice;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            document.querySelector('#current-'+activePlayer).textContent = dice;
            if (scores[activePlayer]>=20){
                document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                flag = 1;
            }
        }
        else {
            scores[activePlayer]=0;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            document.querySelector('#current-'+activePlayer).textContent = 0;
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            if (activePlayer === 0){
            activePlayer = 1;
            }
            else
                activePlayer = 0;
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
            }
    }
    else
        newgame();
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    if (activePlayer === 0){
        activePlayer = 1;
    }
    else
        activePlayer = 0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
});