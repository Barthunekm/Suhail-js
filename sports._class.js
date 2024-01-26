// SPORTS is a class
// cricket is an object (or an instance of this class)
// tennis is an object (or an instance of this class)

function Sports(name, totalPlayers) {
    this.game = name;
    this.totalP = totalPlayers;
    
    this.printTotalPlayers = function() {
        console.log(this.totalP);
    }
    }
    
    const cricket = new Sports("Cricket", 11);
    cricket.printTotalPlayers();
    
    const tennis = new Sports("Tennis", 2);
    tennis.printTotalPlayers();
