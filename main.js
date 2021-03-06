var playerOneWins = document.querySelector("#player-one")
var playerTwoWins = document.querySelector("#player-two")
var playerTurnIndicator = document.querySelector("#player-turn-indicator")
var boxOne = document.querySelector("#box-one")
var boxTwo = document.querySelector("#box-two")
var boxThree = document.querySelector("#box-three")
var boxFour = document.querySelector("#box-four")
var boxFive = document.querySelector("#box-five")
var boxSix = document.querySelector("#box-six")
var boxSeven = document.querySelector("#box-seven")
var boxEight = document.querySelector("#box-eight")
var boxNine = document.querySelector("#box-nine")
var gameGrid = document.querySelector("#game-grid")

window.addEventListener("load", loadPage);
gameGrid.addEventListener("click", rotatePlayers);

function loadPage() {
  newGame = new Game();
  playerOne = newGame.addPlayers("Player 1");
  playerTwo = newGame.addPlayers("Player 2");
  newGame.determineFirstPlayer();
  changeTurnIndicator();
  newGame.players[0].retrieveWinsFromStorage(newGame.players[0].name, newGame.players[0]);
  newGame.players[1].retrieveWinsFromStorage(newGame.players[1].name, newGame.players[1]);
  updateWins();
}

function rotatePlayers() {
  addMove();
  newGame.checkForWin();
  changeTurnIndicator();
  newGame.checkForDraw();
  updateWins();
}

function addMove() {
  if (event.target.classList.contains("game-box")) {
    if (newGame.players[0].isTurn === true) {
      event.target.innerHTML = `
      <img src="assets/circle.svg" alt="circle" class="game-circle">
      `;
      event.target.classList += " circle marked";
      event.target.classList.remove("game-box");
      newGame.players[0].isTurn = false;
      newGame.players[1].isTurn = true;
    } else if (newGame.players[1].isTurn === true) {
      event.target.innerHTML = `
      <img src="assets/x.svg" alt ="x" class="game-x">
      `;
      event.target.classList += " x-move marked";
      event.target.classList.remove("game-box");
      newGame.players[1].isTurn = false;
      newGame.players[0].isTurn = true;
    }
  }
}

function changeTurnIndicator() {
  if (newGame.players[0].isTurn === true) {
    playerTurnIndicator.innerHTML = `
    <img src="assets/circle.svg" alt="circle" id="player-turn-image" class="current-player-image">
    <h1 class="turn-indicator">'s turn.</h1>
    `
  } else if (newGame.players[1].isTurn === true) {
    playerTurnIndicator.innerHTML = `
    <img src="assets/x.svg" alt="x" id="player-turn-image" class="current-player-image">
    <h1 class="turn-indicator">'s turn.</h1>
    `
  }
}

function updateWins() {
  playerOneWins.innerText = `
  ${newGame.players[0].wins} wins
  `;
  playerTwoWins.innerText = `
  ${newGame.players[1].wins} wins
  `;
}
