// // SPORTS is a class
// // cricket is an object (or an instance of this class)
// // tennis is an object (or an instance of this class)
// function Sports(name, totalPlayers) {
//     this.game = name;
//     this.totalP = totalPlayers; 

//     this.printTotalPlayers = function() {
//         console.log(this.totalP);
//     }
// }

// const cricket = new Sports("Cricket", 11);
// cricket.printTotalPlayers();

// const tennis = new Sports("Tennis", 2);
// tennis.printTotalPlayers();
 
// creating class using class keyword
 class Sports {
  constructor(name, totalPlayers){
    // console.log ("inside constructor")
    this.game= name;
    this.totalP= totalPlayers;
  }

  printTotalPlayers(){
     console.log(this.totalP)
  }

  printGameName(){
    console.log(this.game)
  }
 }

 var cricket=new Sports("cricket", 11)
 console.log(cricket); //---->// Sports { game: 'cricket', totalP: 11 }
 cricket.printTotalPlayers(); //11

 const tennis=new Sports("tennis",2)
 console.log(tennis); //Sports { game: 'tennis', totalP: 2 }
 tennis.printTotalPlayers(); //2
 tennis.printGameName(); // tennis

        

