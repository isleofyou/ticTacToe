class Game {
  constructor() {
    this.players = [];
    }
    addPlayers(player){
      var newPlayer = new Player(player);
      this.players.push(newPlayer);
    }
    determineFirstPlayer() {
      var firstTurn = Math.floor(Math.random() * this.players.length)
      this.players[firstTurn].isTurn = true;
    }
    checkForWin() {
      console.log('hi');
    }
    checkForDraw() {

    }
    resetBoard() {

    }
}
