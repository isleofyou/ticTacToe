class Player {
    constructor(name) {
      this.name = name;
      this.wins = 0;
      this.isTurn = false;
    }
    saveWinToStorage(player) {
      var storagePlayer = JSON.stringify(player);
      localStorage.setItem("thisGame", storagePlayer);
    }
    retrieveWinsFromStorage() {
    var retrievedGame = localStorage.getItem("thisGame");
    var parsedGame = JSON.parse(retrievedGame);
    newGame.players[0] += retrievedGame.players[0].wins;
    newGame.players[1] += retrievedGame.players[1].wins;
    }
}
