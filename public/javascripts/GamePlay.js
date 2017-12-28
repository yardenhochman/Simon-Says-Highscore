class GamePlay {
  constructor(currentPlayer, currentGame) {
    this.flashing = true;

    this.flash = () => {
      this.flashing = true;
      //let $h1 = $('h1');
      //let $button = $('.button');
      if (this.flashing === true) {
        $button.off('click');
        let timesToFlash =
          currentGame.player.sequenceLength; //should I use 'player' pointer or consistently 'game' pointer
        $h1.html(timesToFlash);
        $h1.css('font-size', '70px');
        let flashes =
          currentGame.colorSequence.theSequence;
        let turnModifier =
          (timesToFlash - 2) * 35;
        if (turnModifier > 400) {
          turnModifier = 400;
        }
        let darkDelay = 450 - turnModifier * 0.6; //min 200,150
        let flashDelay = 700 - turnModifier; //max 700,550
        let count = 0;
        for (let i = 0; i < timesToFlash; i++) {
          let lightToFlash = '#' + flashes[i];
          let currentButton = $(lightToFlash);
          setTimeout(() => {
            currentButton.addClass('flash');
            let colorSound = new Audio();
            playSound(
              flashes[i],
              colorSound,
              450
            );
            setTimeout(() => {
              currentButton.removeClass('flash');
              colorSound.pause();
            }, darkDelay); //dark delay
          }, count * flashDelay); //lighting delay
          count += 1;
        }
        setTimeout(() => {
          this.flashing = false;
          $h1.html('Ready');
          currentPlayer.gamePlay.playerSelects();
        }, flashDelay * count);
      }
    };

    this.playerSelects = () => {
      this.flashing = false;
      //let $colorButton = $('.button');
      if (!this.flashing) {
        //$colorButton.click(function() {
        $button.click(function() {
          let clickCount =
            currentPlayer.currentSelection.length;
          const numberOfClicksToMake =
            currentPlayer.sequenceLength;
          const colorsToClickSequence = currentGame.colorSequence.theSequence.slice(
            0,
            numberOfClicksToMake
          );
          let color = this.id;
          currentPlayer.currentSelection.push(
            color
          );
          let colorSound = new Audio();
          playSound(color, colorSound, 450);
          const sequencePlayerChose = [
            ...currentPlayer.currentSelection
          ];
          clickCount += 1;
          if (
            clickCount === numberOfClicksToMake
          ) {
            setTimeout(() => {
              colorSound.pause();
              const gameContinues = compareArrays(
                sequencePlayerChose,
                colorsToClickSequence
              );
              if (gameContinues) {
                currentPlayer.currentSelection = [];
                currentPlayer.sequenceLength += 1;
                this.flashing = true;
                currentPlayer.gamePlay.flash();
              } else {
                announce(currentPlayer);
              }
            }, 500);
          }
        });
      }
    };
  }
}

/**

/**
Logic:

Method playerSelects:

The player clicks the colors. Once the player chooses an amount that is equal 
to the number of flashes on the last turn, the method compares the selection to the flashes
to see if the game is over.

this.flashing - makes sure selection cannot happen while the colors are still flashing (cheating)
currentPlayer - defined on the constructor. This is the game's current player's object
clickCount - number of colors the user has selected on this turn
color - the color of the clicked button
playSound, announce - functions from 'miscFunctions' file


*/
