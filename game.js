const computerPlay = () => {
  const states = ['rock', 'paper', 'scissors'];
  const idx = Math.floor(3 * Math.random());

  return states[idx];
};

const singleRound = (input) => {
  const aiInput = computerPlay();
  const states = ['rock', 'paper', 'scissors'];
  const huInput = input.trim().toLowerCase();

  // checks for invalid input
  if (!states.includes(huInput)) {
    return {
      value: -1,
      message: `invalid input!. input can only be either of 
[ ${states[0]}, ${states[1]}, ${states[2]} ]`,
    };
  }

  if (aiInput === huInput) {
    console.log(`Computer played: ${aiInput}`);
    return {
      value: 0,
      message: 'Its a tie!',
    };
  }
  // for edge case when index of states is lower but by the Game
  // logic is greater
  if (aiInput === states[0] && huInput === states[2]) {
    console.log(`Computer played: ${aiInput}`);
    return {
      value: 1,
      message: `You loose! ${aiInput} beats ${huInput}`,
    };
  }
  if (huInput === states[0] && aiInput === states[2]) {
    console.log(`Computer played: ${aiInput}`);
    return {
      value: 2,
      message: `You win! ${huInput} beats ${aiInput}`,
    };
  }
  // Computer wins
  if (states.indexOf(aiInput) > states.indexOf(huInput)) {
    console.log(`Computer played: ${aiInput}`);
    return {
      value: 1,
      message: `You loose! ${aiInput} beats ${huInput}`,
    };
  }
  // Human wins
  return {
    value: 2,
    message: `You win! ${huInput} beats ${aiInput}`,
  };
};

const promisifiedProcess = () => {
  process.stdin.setEncoding('utf8');
  return new Promise((resolve, reject) => {
    process.stdin.on('data', (data) => {
      if (data === null) {
        reject(data);
      }
      resolve(data);
    });
  });
};

async function game() {
  let huWinCount = 0;
  let aiWinCount = 0;
  let data;
  // const rounds = [];
  for (let i = 0; i < 5; i += 1) {
    console.log('Enter input:');
    try {
      data = await promisifiedProcess();
      const { value, message } = singleRound(data);
      if (value === 1) {
        aiWinCount += 1;
      } else if (value === 2) {
        huWinCount += 1;
      }

      console.log(message);
    } catch (e) {
      console.log(e);
    }
  }

  if (huWinCount > aiWinCount) {
    console.log('You are the final winner');
  } else if (huWinCount === aiWinCount) {
    console.log("You're inseparable! its a draw");
  } else {
    console.log('Computer wins');
  }
}

game();
module.exports = { game, computerPlay, singleRound };
