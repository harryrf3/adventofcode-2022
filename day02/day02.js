

//////////////////////////////////////////////////////////////////////
const sampleInput =
  `A Y
  B X
  C Z`;

let playerOneScore = 0;
let playerTwoScore = 0;
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

const renderInput = () => {
    sampleInput.split(' ');
    console.log(sampleInput);
}

console.log(renderInput());

const playGame = () => {
  if (playerOneChoice == playerTwoChoice) {
    playerOneScore += 3
    playerTwoScore += 3
    return 'Draw!'
  }
  if (playerOneChoice == 'ROCK' && playerTwoChoice == 'PAPER') {
    console.log('They win!');
    playerOneScore += 1
    playerTwoScore += 8
  }

  if (playerOneChoice == 'PAPER' && playerTwoChoice == 'SCISSORS') {
    console.log('They win!');
    playerOneScore += 2
    playerTwoScore += 9
  }

  if (playerOneChoice == 'SCISSORS' && playerTwoChoice == 'ROCK') {
    console.log('They win!');
    playerOneScore += 3
    playerTwoScore += 7
  }

}

// // logs all playerOneChoices objects
// // for (const el of playerOneChoices) {
// //   console.log(el);
// // }

// // logs all playerTwoChoices objects
// // for (const el of playerTwoChoices) {
// //   console.log(el);
// // }

// // ! this will always return true, which would be false in this context.
// // const calculateWinner = () => {
// //   if playerOneChoices[0] === playerTwoChoices[0] {
// //     return 'Draw!';
// //   }
// // }

// const calculateWinner = () => {
//   if (playerOneChoice === playerTwoChoice) {
//     return "Draw"
//   }
//   if (playerOneChoice === playerTwoChoice) {
//     return "Draw"
//   }
// }

// const getPlayerOneChoice = () => {
//   const choice = Math.floor(Math.random() * 3) + 1;
//   switch (choice) {
//     case 1:
//       A: 'ROCK';
//       break;
//     case 2:
//       B: 'PAPER';
//       break;
//     case 3:
//       C: 'SCISSORS';
//       break;
//   }
//   return choice;
// }

// const getPlayerTwoChoice = () => {
//   const choice = Math.floor(Math.random() * 3) + 1;
//   switch (choice) {
//     case 1:
//       A: 'ROCK';
//       break;
//     case 2:
//       B: 'PAPER';
//       break;
//     case 3:
//       C: 'SCISSORS';
//       break;
//   }
//   return choice;
// }

// const playerOneChoice = getPlayerOneChoice();

// const playerTwoChoice = getPlayerTwoChoice();
// /* 
//  Points:
//  1 - Rock
//  2 - Paper
//  3 - Scissors

//  0 - Loss
//  3 - Tie
//  6 - Win
// */

// /*
//   Losses:
//   1 - 2
//   2 - 3
//   3 - 1
  
//   Wins:
//   1 - 3
//   2 - 1
//   3 - 2
// */

// // create score variable for each computer and user
// let computerScore = 0;
// let userScore = 0;

