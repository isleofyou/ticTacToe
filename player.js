class Player {
  constructor(name) {
    this.name = name;
    this.wins = 0;
    this.isTurn = false;
  }
  saveWinToStorage(winner, wins) {
    var storagePlayer = JSON.stringify(wins);
    localStorage.setItem(winner, storagePlayer);
  }
  retrieveWinsFromStorage(key, player) {
    var retrievedScore = localStorage.getItem(key);
    var parsedScore = JSON.parse(retrievedScore);
    player.wins += parsedScore;
  }
}
