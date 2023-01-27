import fs from 'fs/promises';

const lines = await fs.readFile('calories.txt', { encoding: 'utf8' });
const elves = lines.split('\r\n\r\n');

let max = 0;
for(elf of elves) {
  
}