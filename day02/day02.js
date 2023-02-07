// Day 2:
// https://adventofcode.com/2022/day/2

const tempInput = `A Y
B X
C Z`;

const sampleInput = `A X
A X
A Z
B X
A X
B Z
A X
A X
A X
A X
C Z
C Y
A X
A X
A Z
C Y
A Z
B Y
C Z
A X
B Y
C X
C Z
C Y
A Y
B X
B X
A X
B X
A X
C X
B Z
C Y
A X
A X
C Z
A Z
A X
B X
B X
A X
B X
B Y
A X
A X
A Z
A Y
C Y
A Z
C Z
C Y
A Z
A X
B Z
A X
C Y
B Z
C Y
A X
A Y
C Y
A Z
B Z
A X
C Y
A X
A X
B X
C Y
A Y
A X
C Z
B Z
A X
B X
B Z
A X
A Z
A X
A X
A Y
A Z
A X
B X
A Z
A Z
C Y
A X
B Z
C Y
C Z
A X
A Z
A X
B Y
A X
C X
A X
A X
C Y
C X
A X
C Y
B Z
C Z
C Y
B Z
A X
C Y
B Z
A X
B Z
A X
B Y
A Z
B X
A X
A X
A X
C Y
C X
A Y
C Z
C Y
B Z
A X
A X
B X
A X
A X
A X
C Y
A X
A X
A Z
C Y
A Z
A X
A X
A X
C Y
A Y
A X
A X
C Z
C Y
B X
C Z
C Y
B X
C Y
A X
C Z
A X
B Y
C X
A X
B Y
B Y
A Z
A X
A X
C X
A Y
B Y
C Y
B Z
A X
A X
A Y
A X
A X
C Y
A X
C Y
C Y
C Z
A Z
A X
C Y
C X
C Y
A X
A X
C Y
A Z
A Y
A Y
B Z
B Y
B X
C Y
A X
C Y
C Z
A X
A Y
A Y
B X
C Y
A X
B Z
A X
C Y
B X
A Y
C X
C Y
A X
C Y
B Z
C Y
C Y
C X
B X
C X
C Y
B Z
C Z
C Y
A X
A Z
C Y
A Z
B X
C X
C Y
A Z
C Y
C X
A X
A X
A X
B Y
A X
A X
B Y
B Z
A X
A Y
A Z
B Y
A X
A X
A X
B Z
A X
C Y
A X
A X
B Y
A X
C Y
B X
C Y
A X
A X
C X
A Y
A X
B X
A X
C Y
C Y
C Z
A Y
B Y
B X
A X
A X
A X
C Y
A Y
A X
A Y
C Y
A X
A X
B Y
C Z
A Y
B Z
C Y
A X
C Z
B X
C Y
B Z
C Y
B Z
A Z
A X
A X
C Z
C X
A X
A X
C Y
B Z
B Y
A X
A X
A X
B X
B X
B Y
C Y
C Z
A X
C X
C Z
A X
A X
C Y
A X
A X
C Z
B Z
B Z
A X
B X
A Z
C Z
C Z
B X
B Z
B Z
C Y
A X
A Y
C Z
A X
A X
A X
A Y
A X
A X
A Z
C Y
C Y
A X
A X
A X
A Z
B Z
C Y
A Z
A X
B Y
A X
A X
C Z
A Z
A X
C Y
A Y
C X
B Z
C Y
C Y
A X
C Y
B Y
A X
A X
C X
B X
B Z
A Y
B X
B Z
B Z
A X
A Y
B Y
B Y
A Z
C Y
A X
A X
B Y
C X
A Z
B X
B Z
A X
A Y
C Y
B X
B Y
C Y
A X
B Y
B X
A X
C Y
B Y
B Z
B Y
C Y
C Y
B Z
C Y
B X
A X
A X
B Y
B X
B X
C Y
C Z
B X
A X
A Z
A Y
C Y
C Z
A X
A X
A X
C X
A Y
C Y
C X
A X
A X
A X
A X
B Z
A X
A X
A X
A X
A X
C Y
C Z
B Z
C Z
A Z
C Z
A X
B X
A Z
A X
A X
A X
A X
B Y
A Z
C Y
B Z
A Y
C Z
C X
B Z
C Z
C Z
C X
C Y
B X
C Y
C X
A X
A Y
A X
C X
A X
A X
C X
B Z
A X
A X
B X
C Z
A X
A X
B Y
A X
B Z
C Y
A Y
A Y
C Y
A X
A Z
C X
A X
C Y
A X
B X
C Y
A X
B Y
A X
A X
A X
C Y
C X
B X
A Y
A X
A X
A X
C Y
C Z
A Z
A X
C Y
A X
B Z
C Z
B X
B X
A X
A X
C Z
C X
A X
A Z
A X
C Y
A X
C Y
A Z
A X
C Z
C X
B X
B Z
C X
A Z
B X
C Y
B X
B Y
B X
A X
C Y
B Y
C Y
C Z
C Z
B Y
C Y
B Y
A Y
B Z
A X
B Z
C Y
A X
A X
A X
A X
C Z
C Z
C Z
A X
A X
C Z
C Z
A X
C Y
A Z
A Z
B Y
C Z
A Z
C Z
C Y
A X
B Z
C Y
C Z
A Z
C Y
A X
A X
A X
A X
B Z
B Z
A X
B Z
A X
A X
A X
C Z
C X
A X
C X
A Z
B X
A X
A X
A X
A Z
B Y
B Y
A X
C Y
A X
C Y
A X
A X
A Y
B X
A X
B Z
A X
C Y
C Y
A Z
A X
A X
B X
C Y
C Z
A X
A X
B X
A Y
A Z
C Z
A X
B Z
B Y
A Y
B Z
A Y
A X
C Y
A Z
A X
A X
A X
C Y
C Y
A Z
A Y
C X
A X
A X
A X
C Y
A X
B Z
C Y
B Y
C Z
A X
B Z
B Y
B X
C Y
C Z
B Y
C Y
C Y
C Y
A Z
A X
B Y
C Y
C Z
A Y
A X
B Z
C Y
A Z
C Z
A X
A Z
B X
C Z
A X
B Y
C Z
C Y
C Y
B Y
A Y
C Y
B Y
C Y
C Z
B X
A X
A X
A X
B Y
A X
A X
C Z
C Y
C Z
B Z
A X
B X
A Y
A Z
B Y
C Y
C X
A X
C Y
A Y
A Z
B Z
A Z
A Y
C Y
A X
C X
C Y
B Y
B Y
B Y
A X
C Z
A X
C Y
A Z
B Z
C Y
C Y
C Y
C Y
B X
A Y
C X
C X
A X
A Z
B X
A X
C Y
B X
C Y
B X
C Y
A X
A Z
C Y
A Y
A X
A Z
A X
B Z
A X
B Y
C Z
A X
B X
B X
A X
C Z
A X
C Y
A X
A X
B X
A X
C Z
A X
A Y
C Y
B X
B X
B Z
A X
A X
A X
A X
B Y
A Y
A X
C Z
C Y
C Z
A Z
A X
B X
C Y
A X
C Z
A Z
A X
A X
B X
A X
B Z
B X
A Y
A Z
A Y
A Z
A X
C Y
C Y
B X
C Y
B X
A X
B Z
C Y
A Y
C Y
C Y
A Z
B Z
B X
A X
B Z
C Y
C Y
C Y
A Z
A X
A X
C Y
B X
B X
A X
A Z
A X
A X
A Z
C Y
B X
A X
A Y
A X
B Z
A Z
C Y
A X
A X
A Y
A X
A X
A X
B X
B X
A Z
B Z
A Y
A X
B X
C X
A Z
B Z
C Y
B Y
C Y
B X
A X
C Z
B Y
A X
C Y
C Y
C Y
A Y
B Y
A Z
B Z
A X
A Y
C Y
C X
A X
C Y
C Y
A X
A X
A X
B X
B Z
A Z
A X
C Z
C Z
B X
C Z
A Y
A X
A Y
B Z
A Y
A X
C Y
B X
A X
B X
A X
C X
A X
B Y
A Z
C Y
A X
C X
B Z
A X
C Y
A Y
C Y
A X
B X
C Y
A X
B X
A X
A Y
C Z
A X
A X
A X
A X
B X
C X
A X
A X
C Y
C Y
A X
A X
A Y
C Y
A X
B Z
A Z
C Y
B X
A Y
A Z
A X
A X
C X
A X
B X
A X
C Y
B Z
B Z
A X
B Y
A X
B Y
B Z
B X
B Y
C Y
A X
C Y
A X
A X
A X
A Z
C Y
C Y
A Y
B X
A Z
A Y
A Y
A X
B X
C Y
A X
C X
C Y
C Z
A X
A Z
A Z
A Z
A X
C Y
A X
A Y
A X
C Z
C Y
C Y
B Z
B Z
B Z
A X
C Z
A Z
A X
A X
A X
B Z
B X
A X
B Z
B Y
C Y
C Y
A X
A X
C Y
C Y
C Z
B X
A X
A X
C Y
A X
C Y
A Z
C Y
A X
C Z
B Z
C Z
C Y
B Z
C Y
B X
B X
B X
C Y
A Z
A X
C Y
A Y
C Z
A Y
C Z
B Y
C Y
A X
A Y
A X
C X
C Y
C Y
C Y
C Y
A Y
C Y
B Z
C Y
A X
C Z
B Z
A Y
A X
B Z
A Y
A Z
A X
C Y
C Y
C Y
A Y
B X
C Z
A X
B Z
C Z
A X
B X
B Y
A X
C Y
B X
A Z
A Y
A X
A X
A X
B X
C Z
C Y
B Y
B X
C Y
A X
A X
C Y
A Z
C X
A X
A Z
A X
A X
C Y
A Z
A Y
A X
A Z
B Z
A X
B X
B X
B X
B X
C Y
B Y
A X
A Y
A Y
A Y
B Y
A Y
C Z
A X
A X
A X
A X
A Y
C Y
B X
A X
A X
A X
A Z
A X
A X
C Y
B Y
B X
B X
A X
A X
C Y
A Z
C X
C X
C Y
A Y
C Z
B Z
B X
A X
A X
C X
A X
C X
A Y
B X
A X
B X
B Z
B Z
B Z
A X
B Y
C Z
C X
B X
B Z
A X
A X
C Z
A X
A X
B Y
A X
C Y
C Z
B Z
B Z
A X
A X
A X
A X
B X
B Z
C Z
A Y
B X
A X
C Y
C Y
A Z
C Z
C Y
A X
C Z
A Z
C Y
C Y
A X
A X
B Y
B Z
A Z
A Y
A Y
A X
B X
A Z
C Y
C Y
B Z
B Z
B Y
C Y
B Y
A X
C Z
B Z
C X
C Y
A X
A X
B X
C Y
A X
A X
A Z
A Y
C Y
A X
A X
B X
B X
C Z
C Y
B X
C Y
B Z
A X
A X
C Y
A Y
B Z
B Z
A Y
A Z
A X
A X
A Z
C Y
A X
C Y
A Y
C Y
C Z
B X
B X
C Y
A X
B X
B Z
C Y
C Y
C X
A Y
C Z
A X
C Y
A Y
A X
A Y
A X
A X
A Y
B X
B Y
A X
C Z
C Y
C Z
A Z
B Y
C Y
C X
C Y
A X
C Z
A X
C Z
A X
B X
A X
A X
B X
A X
A Y
A X
C Z
C Y
A Z
B Y
A X
A Y
A X
C X
B X
B X
A Z
C Z
C Y
B Y
A X
B Y
A Z
A X
A X
A X
A X
C Y
C Y
B Y
C Y
B Z
A X
A X
B Z
B Y
C Y
C Y
C Z
C Y
A X
A X
C X
B Y
B X
C X
B X
B Y
A X
C X
C X
A Y
C X
A X
A Z
C X
B Y
C Y
B Z
B X
A X
A X
A X
B X
C Y
C Y
B X
A X
C Y
A X
A X
A X
C Z
A X
A X
C Z
A X
C X
C Y
C Z
A X
A X
C Y
A Y
A X
C Y
A Y
A X
A Y
A Z
A X
C Y
A X
C Y
A X
A Y
A Z
B X
B X
B X
B Y
C Z
B Z
C Y
B Z
A Z
A X
A X
A X
B X
C Y
B X
B Z
A Z
C Y
A Z
C X
A X
B Y
B Y
A Z
C Y
A X
A X
A X
A X
B Y
C X
A X
C Z
C Y
B X
A Y
A Z
A X
B Y
C X
B Z
B Y
A Y
A X
A X
A X
B Z
A X
C Z
A X
C Y
A X
B X
A X
A X
A X
A X
A X
A Z
A Y
A Y
A Z
B X
A Y
B Z
C Y
B Z
C Z
A Z
C X
C Y
B X
B X
B Z
A X
A X
A Z
A X
A X
C Y
C Y
A Z
C Z
A Z
B Z
C X
A X
C Z
C Y
A X
C Z
B Y
B Z
A Y
A X
C Y
A X
C X
A Z
A X
A X
A Y
C Y
C Y
A X
A X
C Y
B Y
B Z
C Y
C Z
A Z
A Y
C Z
B X
C Y
C Y
A X
A X
A X
A X
B Z
A X
C Y
A X
A X
B Z
A X
A X
A X
A X
B X
A X
C Y
A X
A X
C Y
A Y
A X
C Y
A X
A Z
B X
A Y
A Z
C X
C Y
A X
C Z
C Y
A Y
A X
A X
C X
A X
B Y
A X
C Z
A X
B Y
A X
C X
C Z
A X
C Y
C X
C Y
B Z
A Z
A Y
A Y
C Y
C Z
C Y
B X
C Y
A X
C Y
C Z
A Z
C X
A X
A Y
B Y
C Z
C Y
B Z
C Z
C Y
B Z
C Y
A X
B Z
B Z
C Z
C X
C Y
A X
C Z
C Y
A X
C Y
A X
C Y
A X
B X
C Y
A X
B X
A Z
B Z
A X
A Z
A Y
A X
A Y
A X
C Z
A Y
A X
C Y
B X
A X
B Z
C Y
B X
A X
C Y
A X
A Y
C Y
B X
C Y
A Y
C Y
C Z
B Y
C Y
A Y
C Y
B X
A X
A X
A X
A Z
A X
B Z
A X
C Y
A Z
B X
A X
A X
A X
A X
A Z
C Y
B Z
A X
B Y
C Y
C Y
B Y
C X
A X
A X
A X
B X
B X
B X
C X
B Y
B Z
C Y
C Y
B X
B Z
A Z
A Y
A X
A X
A X
C Y
A X
C Y
C Z
C Z
C Z
A Y
C Y
A X
A X
B Z
A Y
C X
A Z
A X
A X
A X
A X
A X
A X
A Z
C Y
C Y
A Z
A X
A X
A X
A X
B X
C Y
A X
B X
C Y
A Y
A Y
C Y
A X
A Y
B Z
A X
A X
C Y
C Y
A Y
A X
A X
A Z
B X
A X
C Y
A X
B X
C X
A X
A X
A X
A X
A X
C Y
B Y
C Y
C Z
A Y
A X
C Y
B X
B X
A X
A Y
B X
B Y
C Y
C X
C X
A X
A X
A X
A X
A Z
C Z
A X
A X
A X
A Y
B X
B X
A X
A X
A X
A X
C Z
C Y
A Z
C Y
B X
A X
C Y
C Z
A Z
B Y
A X
B Y
A X
A Z
C Y
C Y
C Y
A X
C Y
A X
A Z
B Z
B Y
A Y
C X
C Z
A Y
C X
A X
A X
C X
A X
A Y
A X
A Z
A X
A X
A X
C Y
A Y
A Y
B Z
A X
C Y
C Y
B Y
A Z
C Z
B Z
A X
A X
C X
A Y
A Y
C Y
C Z
B X
B X
C Z
B Z
A X
C Z
A X
A Z
C Z
C Y
B Z
B Y
C Z
B Z
C Y
B X
C Y
A Z
C Y
B X
C Z
A Z
A X
B X
B Y
B Z
B Z
B X
C Y
A X
C X
A X
B X
B Z
A Z
A X
A Y
B Y
A X
C Y
A Z
B X
A Y
B X
A X
B Z
A X
C X
A X
C Y
B X
B Z
B Z
A X
A Z
B Y
A X
A X
B X
C Y
C Z
A X
A X
A X
C Z
C Y
A Z
B X
A Z
C Y
A X
A X
A Z
B X
C Y
A X
A X
A X
A X
B Z
A X
A Z
A X
C Y
C X
C Y
A X
B X
B Z
A X
C X
A X
A Y
A X
C Z
C Y
C Y
C Y
B X
B Z
C Y
A X
A Y
C Z
A X
C Y
B Y
B Y
A X
A X
A X
A X
C Y
B Z
C Z
C Y
A Y
B Y
C Y
A X
B X
A Y
C X
C Y
C Y
A Z
C Y
C Z
C Y
B X
C Y
B X
B X
C Y
B Z
A X
A X
B X
C Y
A Y
B Y
A X
A X
B Y
C Y
A X
B X
A X
A Y
B X
C Y
A Z
A X
C Y
A X
B Y
A Z
C Y
B Z
A Z
B Z
C X
A X
A Z
B X
B Y
A X
A Y
B X
C Y
C Y
C Y
C Y
A Z
C Z
A X
B Y
C Z
A X
C Y
B Y
C Z
C Y
A Z
A X
C Y
C Y
C Z
A X
C Y
B Y
B Z
B X
A X
C Z
C X
A Y
B X
A X
A X
A X
C Z
C Z
A Y
C Y
B Y
C X
B X
C X
A X
A X
B Y
A X
A X
C X
A Y
A X
C Y
A Y
B X
C Y
A X
C Z
A Z
A Y
A X
A Y
B Y
A X
A X
C Z
A Y
C Y
B Z
C Y
B Z
A X
B Z
B Z
A Y
B Z
B X
C X
A X
A X
B Y
A X
A X
A X
A X
B X
C Z
A X
A Y
B X
C X
C Y
A X
A X
C Y
A X
A X
C Z
C Z
B X
A Z
B Z
A X
A X
C Y
A Y
A X
A Z
A Y
C Y
A X
C Y
B X
A X
A X
A X
A Z
A Z
A X
B Z
A Z
C Z
B Y
A X
C Y
B Z
C Y
A X
B X
C Y
A X
C Y
A Z
A X
A Y
B X
C X
B X
A X
C Y
C Y
B X
B X
C Y
A X
A Y
B Y
A X
C X
C Y
A Y
C Y
C Z
A X
B Y
A Y
A X
A Z
A Y
C Y
A X
A X
B Z
B Y
B Y
A X
C Z
A Y
A X
B Z
C Z
B Z
A X
B X
C X
A X
A X
A X
A X
A X
C X
A X
A Z
A X
C Z
A X
A X
B Z
A Z
B Z
A Y
A X
C Y
A X
B Y
C Y
B Z
B Z
A X
B Z
C Y
B Z
A Z
B Y
B Z
B X
B Y
A X
B X
A X
C X
B Y
B Y
B X
B Z
C Y
C Y
B Z
A Z
A X
A X
C Y
A X
A X
A Y
A X
B Z
A X
A X
B Z
B Z
A X
A Z
A X
A X
A X
A Z
A Z
C Z
C Y
A Y
A X
C Z
C Z
B Y
B X
B Z
C Y
A X
B Z
A Z
A X
A X
C X
A X
C Y
C X
A Z
A Y
B Z
C Z
B Y
B X
C Z
A Z
B X
A X
A X
A X
A Z
B Y
B Z
A X
A Y
C Y
A X
A X
C Z
B Z
C Y
C X
C Y
C Y
B Z
A X
B X
A X
A Z
B Z
A X
B X
C Y
C Y
B Y
A X
A Y
C X
B X
C Z
B X
A X
C Y
A X
C Y
A X
B Z
C Y
B Z
A Z
A Z
C Z
C Y
A Z
C Y
A Z
C Y
B X
A X
B X
A X
C Y
C X
C Z
A X
A X
A X
B Y
A X
B Z
A X
A X
A X
C Y
C Y
A X
B X
C Y
A Z
A X
C Y
B X
C Z
C Y
C X
B X
A X
C X
C Y
A Y
B Z
B Y
B X
C Y
C Z
B Y
A X
C X
A X
B X
C Z
A X
A X
C Y
A Z
A X
C Y
A Z
C X
A X
C Y
A Z
A X
A X
A Y
A X
C Y
A X
C Y
A X
A Y
C Y
C Y
B Y
B Y
B Z
A X
B X
B Z
B X
A X
B X
A X
A X
A X
A X
C X
B X
B X
A X
A Y
A X
B Y
A X
A Z
B Z
A Y
A X
A X
C Y
B Z
C Y
A X
C Y
A X
C Y
B X
A Z
B X
A X
A Z
B Y
B Y
C X
C Y
A X
B X
C Z
C Z
A Y
A X
C Z
A X
A X
C Z
B X
C Y
A X
C X
C Z
C Z
B Z
A X
A X
A X
B X
A Y
B Z
A X
B Y
A Z
A X
B Z
B Y
B X
A X
A Y
C Z
A X
C Y
C Y
A Y
A Y
A Y
C Z
C Y
B X
A Y
A Z
A Y
A X
C Z
C Y
C Y
C X
B Y
A X
A X
A X
C Y
B Y
C X
C Y
A X
A Z
B Z
B Y
B Z
B Z
B X
A X
B Z
C Y
C Y
C Y
A X
A X
B Y
B Z
B Y
C Y
B Y
A X
C X
A Z
C Y
C Y
B X
A Y
A X
C Y
A Y
A Z
B X
C Y
C Z
A X
C Y
B X
B Y
A X
A X
A X
B Z
A X
C Z
C Y
B X
C Y
C Y`;


// let playerOneScore = 0;
// let playerTwoScore = 0;

const playerOneChoices = {
  A: 'ROCK',
  B: 'PAPER',
  C: 'SCISSORS'
};

const playerTwoChoices = {
  X: 'ROCK',
  Y: 'PAPER',
  Z: 'SCISSORS'
};

const renderInput = () => {
  // Encrypted strategy guide:
  // "The first column is what your opponent is going to play:
  //     A for Rock, B for Paper, and C for Scissors. The second column--"
  // "The second column, you reason, must be what you should play in
  //     response: X for Rock, Y for Paper, and Z for Scissors."

  // - split by lines
  // - then split by column

  // (1) Input (`sampleInput`)
  //   "A Y
  //    B X
  //    C Z"
  const step1 = tempInput;

  // (2) After split by line
  //   [
  //     "A Y",
  //     "  B X",
  //     "  C Z",
  //   ]
  const step2 = step1.split('\n');

  // (3) Trim excess whitespace, then split by column
  //   [
  //     ["A", "Y"],
  //     ["B", "X"],
  //     ["C", "Z"],
  //   ]
  const step3 = [];
  for (line of step2) {
    // (a) "  B X" --> "B X"
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    let removeLineWhitespace = line.trim();

    // (b) "B X" --> [ 'B', 'X' ]
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    let columns = removeLineWhitespace.split(' ');

    step3.push(columns);
  }

  return step3;
};

//const renderInputShort = () => sampleInput.split('\n').map(v => v.trim().split(' '));

//console.log(renderInput());

const playGame = (opponentChoice, yourChoice) => {
  // The score for a single round is the score for the shape you selected
  // (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the
  // outcome of the round (0 if you lost, 3 if the round was a draw, and
  // 6 if you won).

  let score = 0;
  let choices = {
    "ROCK": 1,
    "PAPER": 2,
    "SCISSORS": 3
  };

  score += choices[yourChoice];

  // plus the score for the outcome of the round (0 if you lost,
  // 3 if the round was a draw, and 6 if you won).




  if (opponentChoice == yourChoice) {
    console.log('Draw!');
    score += 3;
  }
  if (opponentChoice == 'ROCK' && yourChoice == 'PAPER') {
    console.log('You win!');
    score += 7;
  }

  if (opponentChoice == 'PAPER' && yourChoice == 'SCISSORS') {
    console.log('You win!');
    score += 6;
  }

  if (opponentChoice == 'SCISSORS' && yourChoice == 'ROCK') {
    console.log('You win!');
    score += 7;
  }

  if (yourChoice == 'ROCK' && opponentChoice == 'PAPER') {
    console.log('They win!');
    score += 1;
  }

  if (yourChoice == 'PAPER' && opponentChoice == 'SCISSORS') {
    console.log('They win!');
    score += 2;
  }

  if (yourChoice == 'SCISSORS' && opponentChoice == 'ROCK') {
    console.log('They win!');
    score += 3;
  }

  return score;
};

// renderInput = function
// renderInput() = array of games as the result of *calling* that function
let finalScore = 0;
for (let game of renderInput()) {
  // game = ['A', 'Y']

  // "A for Rock, B for Paper, and C for Scissors"
  //
  // so:
  //   A = ROCK
  //   B = PAPER
  //   C = SCISSORS
  //
  // playerOneChoices
  let playerOneChoice = playerOneChoices[game[0]];  // "ROCK"
  let playerTwoChoice = playerTwoChoices[game[1]];  // "PAPER"
  // "X for Rock, Y for Paper, and Z for Scissors"
  //
  // so:
  //  X = ROCK
  //  Y = PAPER
  //  Z = SCISSORS
  //
  // playerTwoChoices


  finalScore += playGame(playerOneChoice, playerTwoChoice);

  // goal:
  //   playGame(playerOneChoice, playerTwoChoice)
}
console.log(finalScore);
// ------------

//const Options = {
//    Cheese: "Edam",
//    Booze: "Beer",
//    Meat: "Steak",
//}
//
//const input = "Meat";
//const output = Options[input];  // "Steak"

// ------------ Part 2

