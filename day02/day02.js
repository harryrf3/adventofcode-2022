const sampleInput =
  `A Y
  B X
  C Z`;

const playerOneChoices = [
  { A: 'ROCK' },
  { B: 'PAPER' },
  { C: 'SCISSORS' }
];

const playerTwoChoices = [
  { X: 'ROCK' },
  { Y: 'PAPER' },
  { Z: 'SCISSORS' }
];

// logs all playerOneChoices objects
// for (const el of playerOneChoices) {
//   console.log(el);
// }

// logs all playerTwoChoices objects
// for (const el of playerTwoChoices) {
//   console.log(el);
// }



/* 
 Points:
 1 - Rock
 2 - Paper
 3 - Scissors

 0 - Loss
 3 - Tie
 6 - Win
*/

/*
  Losses:
  1 - 2
  2 - 3
  3 - 1
  
  Wins:
  1 - 3
  2 - 1
  3 - 2
*/

// create score variable for each computer and user
let computerScore = 0;
let userScore = 0;

