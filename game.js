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
        console.log("Circle wins");
        this.resetBoard();
      }
      var xWin = winCombos[i].every(function(element) {
        return element.classList.contains('x-move')
      });
      if (xWin === true) {
        console.log("X wins");
        this.resetBoard();
      }
    }
  }
  checkForDraw() {

  }
  resetBoard() {
    location.reload();
  }
  saveWinToStorage(){
    // var storagePlayer = JSON.stringify(newGame);
    // localStorage.setItem("players", storagePlayer);
  }
  retrieveWinsFromStorage() {
  // var retrievedGame = localStorage.getItem("players");
  // var parsedGame = JSON.parse(retrievedGame);
  // console.log(parsedGame)
  // newGame.players[0] += parsedGame.players[0].wins;
  // newGame.players[1] += parsedGame.players[1].wins;
  }
}
