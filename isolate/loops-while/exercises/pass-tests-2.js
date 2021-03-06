'use strict';

function alternator(range, str1, str2) {
  if (typeof range !== 'number') { throw new TypeError(); }
  if (typeof str1 !== 'string') { throw new TypeError(); }
  if (typeof str2 !== 'string') { throw new TypeError(); }
  let i=0;
  let result='';
  while (i<range) {
  if (i % 2){
  result+=str2;
  i++;
} else{
  result+=str1;
  i++;
}
  }

  if (typeof result !== 'string') { throw new TypeError(); }
  return result;
}


const _1_expect = '_-_';
const _1_actual = alternator(3, '_', '-');
console.assert(_1_actual === _1_expect, 'Test  1');

const _2_expect = '';
const _2_actual = alternator(0, 'x', 'y');
console.assert(_2_actual === _2_expect, 'Test  2');

const _3_expect = 'y';
const _3_actual = alternator(3, '', 'y');
console.assert(_3_actual === _3_expect, 'Test  3');

const _4_expect = 'xx';
const _4_actual = alternator(3, 'x', '');
console.assert(_4_actual === _4_expect, 'Test  4');

const _5_expect = '0:0:';
const _5_actual = alternator(4, '0', ':');
console.assert(_5_actual === _5_expect, 'Test  5');

const _6_expect = '#######';
const _6_actual = alternator(7, '#', '#');
console.assert(_6_actual === _6_expect, 'Test  6');


