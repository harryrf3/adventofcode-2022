const sampleInput =
  `A Y
  B X
  C Z`;

const computerChoice = [
  { A: 'ROCK' },
  { B: 'PAPER' },
  { C: 'SCISSORS' }
];

const playerChoice = [
  { X: 'ROCK' },
  { Y: 'PAPER' },
  { Z: 'SCISSORS' }
];

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

for (const round in sampleInput) {
  // compare each shape in round
  sampleInput.split(' ');
  console.log(sampleInput);
}