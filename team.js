const team = {
  _players: [
    {
       firstName: 'Daffy',
       lastName: 'Duck',
       age: 75
     },
     {
        firstName: 'Elmer',
        lastName: 'Fudd',
        age: 80
      },
      {
        firstName: 'Michael',
        lastName: 'Jordan',
        age: 28
       }],
  _games: [
    {
     opponent: 'Goon Squad',
     teamPoints: 35,
     opponentPoints: 30 
    },
    {
      opponent: 'Monstars',
      teamPoints: 23,
      opponentPoint: 16
    },
    {
      opponent: 'Looney Laners',
      teamPoints: 51,
      opponentPoints: 25
    }],
/* -------------------- Getters ----------------- */
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
/* ------------------- Methods ----------------- */
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },

    addGame(opponentName, teamPoints, opponentPoints){
      let game = {
        opponent: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };

      this.games.push(game);
    }
};


team.addPlayer("Lebron", "James", 36);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Buggs", "Bunny", 76);

team.addGame("Nets", 24, 20);
team.addGame("Heat", 30, 30);
team.addGame("Warriors", 33, 29);

/* testing implementation */
console.log(team.players);
console.log();
console.log(team.games);
