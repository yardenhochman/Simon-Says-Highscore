const compareArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (!(array1[i] === array2[i])) {
      return false;
    }
  }
  return true;
};

const announce = player => {
  let lossSound = new Audio();
  playSound('fail', lossSound, 20000);
  //let $h1 = $('h1');
  let highscore = localStorage.getItem(
    'highscore'
  ); //this needs to be replaced by get
  axios.get('/scores');
  let addedDelay = 0;
  if (player.sequenceLength == 2) {
    $h1.css('font-size', '70px');
    $h1.html('Try again');
    resetGame();
  } else {
    $h1.css('font-size', '35px');
    $h1.html(
      `Game Over! <br>${player.name} remembered ${
        player.sequenceLength
      }`
    );
    if (highscore !== null) {
      addedDelay += 1500;
      if (highscore < player.sequenceLength) {
        localStorage.setItem(
          'highscore',
          player.sequenceLength
        );
        setTimeout(() => {
          $h1.html(
            'Congratulations! You just set a personal record!'
          );
          happySound();
        }, 1500);

        addedDelay += 1500;
      } else {
        setTimeout(() => {
          $h1.css('font-size', '35px');
          $h1.html(
            `Your highest score is still ${highscore}!`
          );
        }, 1500);

        addedDelay += 1500;
      }
    } else {
      localStorage.setItem(
        'highscore',
        player.sequenceLength
      );
    }
  }

  resetGame(addedDelay);
};

const resetGame = delayTime => {
  delayTime = delayTime || 0;
  setTimeout(() => {
    location.reload();
  }, 1500 + delayTime);
};

const happyDance = () => {
  const darkDelay = 80;
  const flashDelay = 90;
  $h1.html('Welcome!');
  $h1.css('font-size', '70px');
  initialSequence = new ColorSequence();
  initialSequence.generateRandomColorSequence();
  const flashes = [
    'red',
    'blue',
    'red',
    'blue',
    'yellow',
    'green',
    'yellow',
    'green',
    'red',
    'yellow',
    'green',
    'blue',
    'red',
    'yellow',
    'green',
    'blue',
    'red',
    'yellow',
    'green',
    'blue',
    'yellow',
    'red',
    'green',
    'blue',
    'yellow',
    'red',
    'green',
    'blue',
    'yellow',
    'red',
    'green'
  ];
  let count = 0;
  flashes.forEach(flash => {
    let lightToFlash = '#' + flash;
    let currentButton = $(lightToFlash);
    setTimeout(() => {
      currentButton.addClass('flash');
      setTimeout(() => {
        currentButton.removeClass('flash');
      }, darkDelay); //dark delay
    }, count * flashDelay); //lighting delay
    count += 1;
  });
  setTimeout(() => {
    $h1.html('Ready');
  }, flashDelay * count);
};

const playSound = (color, toPlay, maxlength) => {
  toPlay.src = `sound/${color}.mp3`;
  toPlay.play();
  setTimeout(() => {
    toPlay.pause();
  }, maxlength);
};

const happySound = () => {
  let winSound = new Audio();
  winSound.src = `sound/correct.mp3`;
  winSound.play();
};

const initiateResetButton = () => {
  let $reset = $('.reset');
  $reset.click(() => {
    resetGame(-1500);
  });
};

/*const lossEffect = function(){

}*/

/**

TODO:

Code Logic:

*/
