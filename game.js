class Game {
  constructor() {
    this.players = [];
  }
  addPlayers(player) {
    var newPlayer = new Player(player);
    this.players.push(newPlayer);
  }
  determineFirstPlayer() {
    var firstTurn = Math.floor(Math.random() * this.players.length)
    this.players[firstTurn].isTurn = true;
  }
  checkForWin() {
    var winCombos = [
      [boxOne, boxTwo, boxThree],
      [boxFour, boxFive, boxSix],
      [boxSeven, boxEight, boxNine],
      [boxOne, boxFour, boxSeven],
      [boxTwo, boxFive, boxEight],
      [boxThree, boxSix, boxNine],
      [boxOne, boxFive, boxNine],
      [boxThree, boxFive, boxSeven]
    ];
    for (var i = 0; i < winCombos.length; i++) {
      var circleWin = winCombos[i].every(function(element) {
        return element.classList.contains('circle')
      });
      if (circleWin === true) {
        this.players[0].wins += 1;
        this.players[0].saveWinToStorage(this.players[0].name, this.players[0].wins);
        this.resetBoard();
      }
      var xWin = winCombos[i].every(function(element) {
        return element.classList.contains('x-move')
      });
      if (xWin === true) {
        this.players[1].wins += 1;
        this.players[1].saveWinToStorage(this.players[1].name, this.players[1].wins);
        this.resetBoard();
      }
    }
  }
  checkForDraw() {
    var allBoxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];
    var draw = true;
    for (var i = 0; i < allBoxes.length; i++) {
      if (!allBoxes[i].classList.contains('marked')) {
        draw = false;
        return;
      }
    }
    playerTurnIndicator.innerText = "Draw!";
    setTimeout(function() {
      newGame.resetBoard()
    }, 2500);
  }
  resetBoard() {
    location.reload();
  }
}
