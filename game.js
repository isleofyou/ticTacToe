class Game {
  constructor() {
    this.players = [];
    this.winCombos = [
      ["top-left", "top-middle", "top-right"],
      ["left-center", "center", "right-center"],
      ["bottom-left", "bottom-center", "bottom-right"],
      ["top-left", "left-center", "bottom-left"],
      ["top-center", "center", "bottom-center"],
      ["top-right", "right-center", "bottom-right"],
      ["top-left", "center", "bottom-right"],
      ["top-right", "center", "bottom-left"]
    ];
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
}
