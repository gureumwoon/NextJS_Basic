// const modleData = require('./math');
// const { add, sub } = require('./math'); // 구조분해할당

// console.log(add(1, 2)); // 3
// console.log(sub(1, 2)) // -1 

// ESM 방식

import multiply, { add, sub } from './math.js';
import randomColor from 'randomcolor';

// console.log(add(1, 2)); // 3
// console.log(sub(1, 2)); // -1
// console.log(multiply(10, 20)) // 200

const color = randomColor();
console.log(color); 