class ColorSequence {
  constructor() {
    this.sizeOfSequence = 50;
    this.colorSelection = ['red','yellow','green','blue'];
    this.theSequence = [];

    this.generateRandomColorSequence = () => {
      for (let i = 0 ; i < this.sizeOfSequence ; i ++) {
        let randomColorIndex = Math.floor(Math.random() * this.colorSelection.length);
        let currentColor = this.colorSelection[randomColorIndex];
        this.theSequence.push(currentColor);
      };
    };
  }
}

/**

TODO:

optional: add a method to check if player is
          reaching the limit, if he does add

TODO:

optional: add a method to check if player is
          reaching the limit, if he does add
          to size of sequence


Logic:

color sequence - generates the flashing colors order

player - creates a player object so as to allow adding a
         multiplayer feature

generator - the actual function to create a random list
            of colors

flash - the function that flashes the lights.
        This function will call a function that lets
        the player click the buttons. The game proceeds
        by these functions calling each other back and forth.

*/
