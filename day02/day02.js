
// Grab data from fetch input for daily challenges
const summonPuzzleInput = async () => {
  const response = await fetch('https://adventofcode.com/2022/day/2/input');
  const responseText = await response.text(); // wait for a response
  return responseText; // return that response
};