class Game {
  constructor() {
    this.colorSequence = new ColorSequence();
    this.player = new Player(this);
    this.colorSequence.generateRandomColorSequence();
    this.player.gamePlay.flash();
  }
}

/**


TODO: 

start button. welcome screen with animation. Make animations more fun
reset button
high score list. option to reset list
Try to figure out the logic for multiplayer
remove save of 'this'


Logic:
color sequence - generates the flashing colors order

player - creates a player object so as to allow adding a 
         multiplayer feature

generateRandomColorSequence - the actual function to create a random list 
            of colors

flash - the function that flashes the lights. 
        This function will call a function that lets 
        the player click the buttons. The game proceeds 
        by these functions calling each other back and forth.

*/
